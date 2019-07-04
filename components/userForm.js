import React, { useState } from "react";
import { Message, Form, Icon, Button, Columns } from "react-bulma-components";

const UserForm = () => {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("Select Platform");

  const handleNameChange = event => setName(event.target.value);
  const handlePlatform = event => setPlatform(event.target.value);
  const handleSubmit = event => {
    setName("");
    setPlatform("");
    console.log("clicked");
  };
  return (
    <>
      <Message color="danger">
        <Message.Header>Search for player</Message.Header>
        <Message.Body>
          <Form.Field>
            <Form.Label>Username</Form.Label>
            <Form.Control iconLeft>
              <Form.Input
                onChange={handleNameChange}
                type="text"
                placeholder="Username"
                value={name}
              />
              <Icon align="left" icon="bars" />
            </Form.Control>
            <Button
              color="success"
              style={{ margin: "5px 0px 5px 0" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Form.Label>Platform</Form.Label>
            <Form.Control>
              <Form.Select onChange={handlePlatform} value={platform}>
                <option value="none">Select Platform</option>
                <option value="pc">PC</option>
                <option value="ps4">Playstation 4</option>
                <option value="xbl">Xbox Live</option>
              </Form.Select>
            </Form.Control>
          </Form.Field>
        </Message.Body>
      </Message>
    </>
  );
};

export default UserForm;
