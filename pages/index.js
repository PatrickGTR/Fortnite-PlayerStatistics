import React from "react";
import Head from "next/head";

import "../components/style.css";
import "react-bulma-components/dist/react-bulma-components.min.css";

import UserForm from "../components/userForm";
import UserStats from "../components/userStats";

import {
  getUserAccountID,
  getUserAccountData
} from "../components/stats/getUserData";

const Index = ({ data, error }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
        />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        />
      </Head>

      <div className="container">
        <div style={{ textAlign: "center", margin: "0 0 40px 0" }}>
          <h1 className="title">Fornite Player Statistics</h1>
          <h2 className="subtitle">Made with 💗 by Patrick - &copy; 2019</h2>
        </div>

        <UserForm />

        {data === undefined ? null : <UserStats user={data} error={error} />}
      </div>
    </>
  );
};

Index.getInitialProps = async ({ query }) => {
  if (query.username === undefined || query.platform === "none") {
    return {};
  }

  const accountid = await getUserAccountID(query.username);
  const data = await getUserAccountData(accountid, query.platform);

  let error = null;
  if (accountid == -1 || data == -1) {
    error = {
      message: `could not retrieve ${query.username}'s data.`
    };
  }

  return { data, error };
};

export default Index;
