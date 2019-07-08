import React, { useState } from "react";
import Head from "next/head";

import "react-bulma-components/dist/react-bulma-components.min.css";

import UserForm from "../components/userForm";
import UserStats from "../components/userStats";

import getStoreData from "../components/store/getStoreData";
import { DailyItems, FeaturedItems } from "../components/store/storeItems";

import {
  getUserAccountID,
  getUserAccountData
} from "../components/stats/getUserData";

const Index = ({ accountData, error, storeData }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
        />
        <link rel="stylesheet" href="/static/style.css" />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        />
        <title>Fortnite Statistics</title>
      </Head>

      <div className="container">
        <div style={{ marginTop: "5px" }} className="columns is-centered">
          <div style={{ textAlign: "center" }} className="column">
            <div className="box">
              <h1 className="shop-title">Featured Items</h1>
              <FeaturedItems store={storeData} />
            </div>
          </div>
          <div style={{ textAlign: "center" }} className="column">
            <div className="box">
              <h1 className="shop-title">Daily Items</h1>
              <DailyItems store={storeData} />
            </div>
          </div>
        </div>

        <UserForm />

        {accountData === undefined ? null : (
          <UserStats user={accountData} error={error} />
        )}
      </div>

      <footer style={{ marginTop: "30px" }}>
        <div className="content has-text-centered">
          <p>
            <strong style={{ color: "white", textShadow: "1px 1px black" }}>
              Fortnite Statistics by{" "}
              <a
                style={{ color: "gold" }}
                href="https://patrickgtr.github.io"
                target="_blank"
                rel="noopener"
              >
                Patrick Subang
              </a>{" "}
              &copy; 2019
            </strong>
          </p>
        </div>
      </footer>
    </>
  );
};

Index.getInitialProps = async ({ query }) => {
  const storeData = await getStoreData();

  if (query.username === undefined || query.platform === "none") {
    return { storeData };
  }

  const accountid = await getUserAccountID(query.username);
  const accountData = await getUserAccountData(accountid, query.platform);

  let error = null;
  if (accountid == -1 || accountData == -1) {
    error = {
      message: `could not retrieve ${query.username}'s data.`
    };
  }

  return { accountData, error, storeData };
};

export default Index;
