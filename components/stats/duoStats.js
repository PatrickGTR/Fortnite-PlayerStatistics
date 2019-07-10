import React from "react";

const DuoStats = ({ data }) => {
  return (
    <>
      <div className="column">
        <article className="message is-info">
          <div className="message-header">
            <p>DUO</p>
            <p style={{ fontStyle: "italic" }}>
              {data.matchesplayed_duo} Matches
            </p>
          </div>
          <div className="message-body">
            <div className="list is-hoverable">
              <span className="list-item">
                <i
                  style={{ marginRight: "15px" }}
                  className="fas fa-percentage"
                />
                K/D - {data.kd_duo}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-skull" />
                Kills - {data.kills_duo}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-trophy" />
                Wins - {data.placetop1_duo}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-medal" />
                Top 5 - {data.placetop5_duo}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-award" />
                Top 12 - {data.placetop12_duo}
              </span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default DuoStats;
