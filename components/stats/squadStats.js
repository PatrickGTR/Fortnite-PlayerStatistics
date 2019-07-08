import React from "react";

const SquadStats = ({ data }) => {
  return (
    <>
      <div className="column">
        <article className="message">
          <div style={{ backgroundColor: "purple" }} className="message-header">
            <p>SQUAD</p>
            <p style={{ fontStyle: "italic" }}>
              {data.matchesplayed_squad} Matches
            </p>
          </div>
          <div className="message-body">
            <div className="list is-hoverable">
              <span className="list-item">
                <i
                  style={{ marginRight: "15px" }}
                  className="fas fa-percentage"
                />
                K/D - {data.kd_squad}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-skull" />
                Kills - {data.kills_squad}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-trophy" />
                Wins - {data.placetop1_squad}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-medal" />
                Top 3 - {data.placetop3_squad}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} class="fas fa-award" />
                Top 6 - {data.placetop6_squad}
              </span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default SquadStats;
