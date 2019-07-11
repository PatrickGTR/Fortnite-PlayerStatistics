/**
 * @todo -> Add option to change background colour.
 * @todo -> Add fortnite challenges.
 * @todo -> Run the request through your own server, resize the images and cache the response
 * @todo -> Add a state property for the platform. Just have it stored so I don't have to keep swapping for multiple players with the same platform
                (when user clicks a platform, keep the platform as it is and not reset to default)


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

const Index = ({ accountData, error, query }) => {
  console.log("index: ", query.platform);
  return (
    <PageLayout>
      <UserForm inputUsername={query.username} inputPlatform={query.platform} />

      {accountData === undefined ? null : (
        <UserStats user={accountData} error={error} />
      )}
    </PageLayout>
  );
};

Index.getInitialProps = async ({ query }) => {
  if (query.username === undefined || query.platform === "none") {
    return { query };
  }

  const accountid = await getUserAccountID(query.username);
  const accountData = await getUserAccountData(accountid, query.platform);

  let error = null;
  if (accountid == -1 || accountData == -1) {
    error = {
      message: `could not retrieve ${query.username}'s data.`
    };
  }

  return { accountData, error, query };
};

export default Index;
