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
  if (query.username === undefined || query.platform === "none") {
    return {
      error: true,
      message: "username and platform is undefined."
    };
  }

  const retrieveNameURL = encodeURI(
    `https://fortnite-api.theapinetwork.com/users/id?username=${query.username}`
  );

  let res;
  let data;
  res = await fetch(retrieveNameURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "ec05f7844418ef86e1bb3ee456d21162"
    }
  });
  data = await res.json();
  const accountid = data.data.uid;

  const retrieveAccountDataURL = `https://fortnite-api.theapinetwork.com/prod09/users/public/br_stats?user_id=${accountid}&platform=${
    query.platform
  }`;

  res = await fetch(retrieveAccountDataURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "ec05f7844418ef86e1bb3ee456d21162"
    }
  });

  data = await res.json();
  console.log(data);

  return { data };
};

export default Index;
