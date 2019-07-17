/**
 * @todo -> Add option to change background colour.
 * @todo -> Add fortnite challenges.
 */

import React from "react";
import PageLayout from "../components/PageLayout";

// --
// User
// --

import {
  getUserAccountID,
  getUserAccountData
} from "../components/stats/getUserData";
import UserForm from "../components/UserForm";
import UserStats from "../components/UserStats";

const Index = ({ accountData, error }) => {
  return (
    <PageLayout>
      <UserForm />

      {accountData === undefined ? null : (
        <UserStats user={accountData} error={error} />
      )}
    </PageLayout>
  );
};

Index.getInitialProps = async ({ query }) => {
  if (query.username === undefined || query.platform === "none") {
    return {};
  }

  const accountid = await getUserAccountID(query.username);
  const accountData = await getUserAccountData(accountid, query.platform);

  let error = null;
  if (accountid == -1 || accountData == -1) {
    error = {
      message: `could not retrieve ${query.username}'s data.`
    };
  }

  return { accountData, error };
};

export default Index;
