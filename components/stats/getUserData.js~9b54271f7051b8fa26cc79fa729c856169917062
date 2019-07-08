import fetch from "isomorphic-unfetch";

const requestData = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.FORTNITE_API_KEY
  }
};

const getUserAccountID = async username => {
  const retrieveNameURL = encodeURI(
    `https://fortnite-api.theapinetwork.com/users/id?username=${username.trim()}`
  );

  const res = await fetch(retrieveNameURL, requestData);
  const data = await res.json();

  if (!data.success && data.eCode === "unkown.user") {
    return -1;
  }

  return data.data.uid;
};

const getUserAccountData = async (accountid, platform) => {
  if (accountid === -1) {
    return accountid;
  }

  const retrieveAccountDataURL = `https://fortnite-api.theapinetwork.com/prod09/users/public/br_stats?user_id=${accountid}&platform=${platform}`;

  const res = await fetch(retrieveAccountDataURL, requestData);

  return res.json();
};

export { getUserAccountID, getUserAccountData };
