import React, { useState } from "react";
import Link from "next/link";

const PlatformSelection = ({ platform, handlePlatform }) => {
  return (
    <div className="field">
      <label className="label">Platform</label>
      <div className="control">
        <div className="select">
          <select onChange={handlePlatform} value={platform} name="platform">
            <option value="none">Select Platform</option>
            <option value="pc">PC</option>
            <option value="ps4">Playstation 4</option>
            <option value="xbl">Xbox Live</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const UsernameForm = ({ handleNameChange, name }) => {
  return (
    <div className="field">
      <label className="label">Username</label>
      <div className="control has-icons-left has-icons-right">
        <input
          required={true}
          onChange={handleNameChange}
          className="input is-success"
          type="text"
          placeholder="Username..."
          value={name}
          name="username"
        />
        <span className="icon is-small is-left">
          <i className="fas fa-user" />
        </span>
      </div>
    </div>
  );
};

const UserForm = props => {
  const [platform, setPlatform] = useState("Select Platform");
  const [name, setName] = useState("");

  const handlePlatform = event => setPlatform(event.target.value);
  const handleNameChange = event => setName(event.target.value);

  return (
    <>
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <article className="message is-danger">
            <div className="message-header">
              <p>Search Players</p>
            </div>
            <div className="message-body">
              <form method="GET" action="/">
                <UsernameForm handleNameChange={handleNameChange} name={name} />
                <PlatformSelection
                  handlePlatform={handlePlatform}
                  platform={platform}
                />
                <div className="control" />
                <input
                  type="submit"
                  className="button is-link"
                  style={{ margin: "5px 0px 5px 0" }}
                  value="Search Player"
                />
              </form>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default UserForm;
