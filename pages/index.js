import React from "react";
import Head from "next/head";

import "../components/style.css";
import "react-bulma-components/dist/react-bulma-components.min.css";

import UserForm from "../components/userForm";
import { log } from "util";
import UserStats from "../components/userStats";

import fetch from "isomorphic-unfetch";

const Index = ({ data }) => {
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
        {data === undefined ? null : <UserStats user={data} />}
      </div>
    </>
  );
};
Index.getInitialProps = async ({ query }) => {
  if (query.username === undefined || query.platform === undefined) {
    return {
      error: true,
      message: "username and platform is undefined."
    };
  }

  const url = encodeURI(
    `https://api.fortnitetracker.com/v1/profile/${query.platform}/${
      query.username
    }`
  );
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "TRN-Api-Key": "08916d7f-03fc-4b36-b89f-290acb7d08c8"
    }
  });
  const data = await res.json();

  return { data };
};

export default Index;
