import React from "react";

import SoloStats from "./stats/SoloStats";
import DuoStats from "./stats/DuoStats";
import SquadStats from "./stats/SquadStats";
import TotalStats from "./stats/TotalStats";

const UserStats = ({ user, error }) => {
  if (error !== null) {
    return (
      <div className="notification is-danger">
        <button className="delete" />
        An error occured!
        <br />
        Message: {error.message}
      </div>
    );
  }

  let platform = null;
  switch (user.platform) {
    case "pc": {
      platform = "PC";
      break;
    }
    case "ps4": {
      platform = "PlayStation 4";
      break;
    }
    case "xb1": {
      platform = "Xbox One";
      break;
    }
    default: {
      platform = "None";
      break;
    }
  }

  return (
    <>
      <h1
        className="title"
        style={{ color: "white", textShadow: "2px 2px black" }}
      >
        {user.username}'s Statistics
      </h1>
      <h1
        className="subtitle"
        style={{ color: "white", textShadow: "2px 2px black" }}
      >
        Platform: {platform}
      </h1>

      <div className="container">
        <div className="columns">
          <SoloStats data={user.stats} />
          <DuoStats data={user.stats} />
          <SquadStats data={user.stats} />
          <TotalStats data={user.totals} />
        </div>
      </div>
    </>
  );
};

export default UserStats;
