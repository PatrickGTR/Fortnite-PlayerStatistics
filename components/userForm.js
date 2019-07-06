import React, { useState } from "react";

const PlatformSelection = ({ platform, handlePlatform, platformError }) => {
  return (
    <div className="field">
      <label className="label">Platform</label>
      <div className="control">
        <div className="select">
          <select onChange={handlePlatform} value={platform} name="platform">
            <option value="none">Select Platform</option>
            <option value="pc">PC</option>
            <option value="ps4">Playstation 4</option>
            <option value="xb1">Xbox Live</option>
          </select>
        </div>
      </div>
      {platformError && (
        <p className="help is-danger">Please select platform.</p>
      )}
    </div>
  );
};

const UsernameForm = ({ handleNameChange, name, nameError }) => {
  return (
    <div className="field">
      <label className="label">Username</label>
      <div className="control has-icons-left has-icons-right">
        <input
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
      {nameError && (
        <p className="help is-danger">Please fill out this field.</p>
      )}
    </div>
  );
};

const UserForm = () => {
  const [platform, setPlatform] = useState("Select Platform");
  const [name, setName] = useState("");
  const [platformError, setPlatformError] = useState(false);
  const [nameError, setNamError] = useState(false);

  const handleClick = event => {
    event.preventDefault();

    if (name === "" || platform === "none") {
      setPlatformError(true);
      setNamError(true);
      return;
    }

    window.location.replace(`/?username=${name}&platform=${platform}`);
  };

  const handlePlatform = event => {
    const platform = event.target.value;

    if (platform === "none") {
      setPlatformError(true);
    }
    if (platformError) {
      setPlatformError(false);
    }

    setPlatform(platform);
  };
  const handleNameChange = event => {
    const username = event.target.value;

    if (username === "") {
      setNamError(true);
    }
    if (nameError) {
      setNamError(false);
    }

    setName(username);
  };

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
                <UsernameForm
                  handleNameChange={handleNameChange}
                  name={name}
                  nameError={nameError}
                />
                <PlatformSelection
                  handlePlatform={handlePlatform}
                  platform={platform}
                  platformError={platformError}
                />
                <div className="control" />
                <input
                  type="submit"
                  onClick={handleClick}
                  className="button is-link"
                  style={{ margin: "5px 0px 5px 0" }}
                  value="Search Player"
                  disabled={platformError || nameError ? true : false}
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
