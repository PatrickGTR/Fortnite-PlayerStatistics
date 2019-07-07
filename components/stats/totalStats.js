import React from "react";

const TotalStats = ({ data }) => {
  return (
    <>
      <span className="list-item">Matches Played: {data.matchesplayed}</span>
      <span className="list-item">KD: {data.kd}</span>
      <span className="list-item">Kills: {data.kills}</span>
      <span className="list-item">Wins: {data.wins}</span>
      <span className="list-item">Time Played: {data.hoursplayed} hours</span>
      <span className="list-item">Win Rate: {data.winrate}%</span>
    </>
  );
};

export default TotalStats;
