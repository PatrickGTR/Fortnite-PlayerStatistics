import React from "react";

const LifeTimeStatistic = ({ data }) => {
  return data.map(user => <ShowLifeTimeStatistic key={user.key} user={user} />);
};

const ShowLifeTimeStatistic = ({ user }) => {
  return (
    <tr>
      <td>{user.key}</td>
      <td>{user.value}</td>
    </tr>
  );
};
export default LifeTimeStatistic;
