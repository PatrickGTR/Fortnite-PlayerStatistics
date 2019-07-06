import React from "react";

const SquadStats = ({ data }) => {
  return (
    <>
      <div className="list is-hoverable">
        <span className="list-item">
          Matches Played - {data.matchesplayed_squad}
        </span>
        <span className="list-item">K/D - {data.kd_squad}</span>
        <span className="list-item">Kills - {data.kills_squad}</span>
        <span className="list-item">Wins - {data.placetop1_squad}</span>
        <span className="list-item">Top 3 - {data.placetop3_squad}</span>
        <span className="list-item">Top 6 - {data.placetop6_squad}</span>
      </div>
    </>
  );
};

export default SquadStats;
