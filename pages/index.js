/**
 * @todo -> Add option to change background colour.
 * @todo -> Add fortnite news.
 * @todo -> Add fortnite challenges.
 */

import React from "react";

// --
// Style
// --
import "react-bulma-components/dist/react-bulma-components.min.css";

// --
// Body
// --
import HeadContent from "../components/headContent";
import FooterContent from "../components/footerContent";

// --
// Store
// --
import getStoreData from "../components/store/getStoreData";
import { DailyItems, FeaturedItems } from "../components/store/storeItems";

// --
// User
// --
import UserForm from "../components/userForm";
import UserStats from "../components/userStats";

import {
  getUserAccountID,
  getUserAccountData
} from "../components/stats/getUserData";

const Index = ({ accountData, error, storeData }) => {
  return (
    <>
      <HeadContent />
      <div className="container">
        {accountData === undefined && (
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
        )}
        {accountData !== undefined && (
          <a href="/">
            <button style={{ marginTop: "10px" }} className="button is-info">
              Go back!
            </button>
          </a>
        )}
        <UserForm />
        {accountData === undefined ? null : (
          <UserStats user={accountData} error={error} />
        )}
      </div>
      <FooterContent />
    </>
  );
};

Index.getInitialProps = async ({ query }) => {
  const storeData = await getStoreData();

  if (query.username === undefined || query.platform === "none") {
    // only return the storeData if username or platform is empty.
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
