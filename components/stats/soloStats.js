import React from "react";

const SoloStats = ({ data }) => {
  return (
    <>
      <div className="list is-hoverable">
        <span className="list-item">
          Matches Played - {data.matchesplayed_solo}
        </span>
        <span className="list-item">K/D - {data.kd_solo}</span>
        <span className="list-item">Kills - {data.kills_solo}</span>
        <span className="list-item">Placed Top 1 - {data.placetop1_solo}</span>
        <span className="list-item">Placed Top 3 - {data.placetop3_solo}</span>
        <span className="list-item">
          Placed Top 25 - {data.placetop25_solo}
        </span>
      </div>
    </>
  );
};

export default SoloStats;
