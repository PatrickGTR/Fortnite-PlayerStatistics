import React from "react";

import SoloStats from "../components/soloStats";
import DuoStats from "../components/DuoStats";
import SquadStats from "../components/SquadStats";

const UserStats = ({ user }) => {
  return (
    <>
      <h1 className="title">{user.username}'s Statistic</h1>
      <h1 className="subtitle">Platform: {user.platform.toUpperCase()}</h1>
      <div class="container">
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
