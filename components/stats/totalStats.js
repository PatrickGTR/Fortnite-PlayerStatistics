import React from "react";

const TotalStats = ({ data }) => {
  return (
    <>
      <div className="column">
        <article className="message is-warning">
          <div className="message-header">
            <p>TOTAL</p>
            <p style={{ fontStyle: "italic" }}>{data.matchesplayed} Matches</p>
          </div>
          <div className="message-body">
            <div className="list is-hoverable">
              <span className="list-item">
                <i
                  style={{ marginRight: "15px" }}
                  className="fas fa-percentage"
                />
                KD: {data.kd}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-skull" />
                Kills: {data.kills}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} className="fas fa-trophy" />
                Wins: {data.wins}
              </span>
              <span className="list-item">
                <i style={{ marginRight: "15px" }} class="fas fa-city" />
                Win Rate: {data.winrate}%
              </span>
              <span className="list-item">
                <i
                  style={{ marginRight: "15px" }}
                  className="fas fa-stopwatch"
                />
                Time Played: {data.hoursplayed} hours
              </span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default TotalStats;
