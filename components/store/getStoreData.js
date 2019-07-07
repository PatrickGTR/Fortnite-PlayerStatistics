const getStoreData = async () => {
  const res = await fetch("https://fortnite-api.theapinetwork.com/store/get", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "ec05f7844418ef86e1bb3ee456d21162"
    }
  });

  return res.json();
};

export default getStoreData;
