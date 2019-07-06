import React from "react";

const DuoStats = ({ data }) => {
  return (
    <>
      <div className="list is-hoverable">
        <span className="list-item">
          Matches Played - {data.matchesplayed_duo}
        </span>
        <span className="list-item">K/D - {data.kd_duo}</span>
        <span className="list-item">Kills - {data.kills_duo}</span>
        <span className="list-item">Wins - {data.placetop1_duo}</span>
        <span className="list-item">Top 5 - {data.placetop5_duo}</span>
        <span className="list-item">Top 12 - {data.placetop12_duo}</span>
      </div>
    </>
  );
};

export default DuoStats;
