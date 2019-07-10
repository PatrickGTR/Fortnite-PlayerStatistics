import React from "react";

const SoloStats = ({ data }) => {
  return (
    <>
      <div className="column">
        <article className="message is-success">
          <div className="message-header">
            <p>SOLO</p>
            <p style={{ fontStyle: "italic" }}>
              {data.matchesplayed_solo} Matches
            </p>
          </div>
          <div className="message-body">
            <div className="list is-hoverable">
              <span className="list-item">
                <i
                  style={{ marginRight: "15px" }}
                  className="fas fa-percentage"
                />
                K/D - {data.kd_solo}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-skull" />
                Kills - {data.kills_solo}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-trophy" />
                Wins - {data.placetop1_solo}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-medal" />
                Top 10 - {data.placetop10_solo}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-award" />
                Top 25 - {data.placetop25_solo}
              </span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default SoloStats;
