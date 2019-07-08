import React, { useState } from "react";

const useFormInput = (callback, initialValue = {}, validator) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState({});

  const onChange = event => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();

    if (Object.keys(validator(value)).length === 0) {
      callback();
      setValue(initialValue);
      setError({});
    } else {
      setError(validator(value));
    }
  };

  return {
    onChange,
    onSubmit,
    value,
    error
  };
};

const UserForm = () => {
  const ValidateFormInput = value => {
    let error = {};
    if (value.platform === "none") {
      error.platform = "Please select your platform.";
    }

    if (value.username.trim() === "") {
      error.username = "Please insert your Fortnite username.";
    }
    return error;
  };

  const redirectUser = () => {
    window.location.replace(
      `/?username=${value.username}&platform=${value.platform}`
    );
  };

  const { value, error, onChange, onSubmit } = useFormInput(
    redirectUser,
    {
      username: "",
      platform: "none"
    },
    ValidateFormInput
  );

  return (
    <>
      <div className="columns" style={{ marginTop: "10px" }}>
        <div className="column is-half is-offset-one-quarter">
          <article className="message is-info">
            <div className="message-header">
              <p>Search Players</p>
            </div>
            <div method="GET" action="/" className="message-body">
              <form onSubmit={onSubmit}>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <label className="label">Username</label>
                      <div className="control has-icons-left has-icons-right">
                        <input
                          value={value.username}
                          onChange={onChange}
                          className="input is-success"
                          type="text"
                          placeholder="Username..."
                          name="username"
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-user" />
                        </span>
                      </div>
                      {error.username && (
                        <p className="help is-danger">
                          Please fill out this field.
                        </p>
                      )}
                    </div>

                    <div className="field">
                      <label className="label">Platform</label>
                      <div className="control">
                        <div className="select">
                          <select
                            value={value.platform}
                            onChange={onChange}
                            name="platform"
                          >
                            <option value="none">Select Platform</option>
                            <option value="pc">PC</option>
                            <option value="ps4">Playstation 4</option>
                            <option value="xb1">Xbox Live</option>
                          </select>
                        </div>
                      </div>
                      {error.platform && (
                        <p className="help is-danger">
                          Please select platform.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="control">
                  <input
                    type="submit"
                    className="button is-link"
                    style={{ margin: "5px 0px 5px 0" }}
                    value="Search Player"
                  />
                </div>
              </form>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default UserForm;
