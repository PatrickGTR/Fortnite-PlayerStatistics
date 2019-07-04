import React from "react";
import fetch from "isomorphic-unfetch";

import "../components/style.css";
import "react-bulma-components/dist/react-bulma-components.min.css";

import UserForm from "../components/UserForm";
import UserStats from "../components/UserStats";

import { Columns, Section, Container, Heading } from "react-bulma-components";

const Index = props => (
  <>
    <Heading style={{ textAlign: "center" }}>Fornite Player Statistics</Heading>
    <Heading style={{ textAlign: "center" }} subtitle>
      Made with 💗 by Patrick - &copy; 2019
    </Heading>
    <Section>
      <Container>
        <Columns>
          <Columns.Column size="half" offset="one-quarter">
            <UserForm />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  </>
);

Index.getInitialProps = async () => {
  const url = encodeURI(
    "https://api.fortnitetracker.com/v1/profile/pc/Mmalign"
  );
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "TRN-Api-Key": "08916d7f-03fc-4b36-b89f-290acb7d08c8"
    }
  });
  const data = await res.json();
  return { data };
};

export default Index;
