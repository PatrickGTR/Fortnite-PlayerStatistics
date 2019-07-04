import React from "react";

import { Message, Heading, Tile, Box, Table } from "react-bulma-components";

import LifeTimeStatistic from "../components/lifeTimeStatistics";

const UserStats = ({ user }) => (
  <Message color="danger" align="center">
    <Message.Header>
      {user.epicUserHandle}'s Statistics | Platform: {user.platformNameLong}
    </Message.Header>
    <Message.Body>
      <Box>
        <Heading size={3} align="center">
          Lifetime Statistics
        </Heading>
        <Tile>
          <Table>
            <tbody>
              <LifeTimeStatistic data={user.lifeTimeStats} />
            </tbody>
          </Table>
        </Tile>
      </Box>
    </Message.Body>
  </Message>
);

export default UserStats;
