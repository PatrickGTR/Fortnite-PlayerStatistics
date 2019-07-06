import React from "react";

import SoloStats from "./stats/soloStats";
import DuoStats from "./stats/duoStats";
import SquadStats from "./stats/squadStats";

const UserStats = ({ user, error }) => {
  if (error) {
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
      <h1 className="title">{user.username}'s Statistic</h1>
      <h1 className="subtitle">Platform: {platform}</h1>

      <div className="container">
        <div className="columns">
          <div className="column">
            <article className="message is-danger">
              <div className="message-header">
                <p>SOLO</p>
              </div>
              <div className="message-body">
                <SoloStats data={user.stats} />
              </div>
            </article>
          </div>
          <div className="column">
            <article className="message is-info">
              <div className="message-header">
                <p>DUO</p>
              </div>
              <div className="message-body">
                <DuoStats data={user.stats} />
              </div>
            </article>
          </div>
          <div className="column">
            <article className="message is-warning">
              <div className="message-header">
                <p>SQUAD</p>
              </div>
              <div className="message-body">
                <SquadStats data={user.stats} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserStats;
