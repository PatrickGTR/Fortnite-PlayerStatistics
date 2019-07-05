import React from "react";
import fetch from "isomorphic-unfetch";

const getuserData = async (platform, username) => {
  console.log(platform, username);

  const url = encodeURI(
    `https://api.fortnitetracker.com/v1/profile/pc/Mmalign`
  );
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "TRN-Api-Key": "08916d7f-03fc-4b36-b89f-290acb7d08c8"
    }
  });
  const data = await res.json();
  return { result: data};
};

export default getuserData;
