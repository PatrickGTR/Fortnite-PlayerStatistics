/**
 * @todo -> Add option to change background colour.
 * @todo -> Add fortnite news.
 * @todo -> Add fortnite challenges.
 */

import React from "react";
import Link from "next/link";

// --
// Page Template
import PageLayout from "../components/PageLayout";
// --

// --
// Store
// --
import { DailyItems, FeaturedItems } from "../components/store/storeItems";
import getStoreData from "../components/store/getStoreData";

// --
// User
// --
import {
  getUserAccountID,
  getUserAccountData
} from "../components/stats/getUserData";
import UserForm from "../components/userForm";
import UserStats from "../components/userStats";

const Index = ({ accountData, error, storeData }) => {
  return (
    <PageLayout>
      <UserForm />

      {accountData === undefined && (
        <div className="columns">
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

      {// Show stats
      accountData === undefined ? null : (
        <UserStats user={accountData} error={error} />
      )}
    </PageLayout>
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
