import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axiosWithAuth from "../utils/axiosWithAuth";

const initialCredentials = {
  username: "",
  password: "",
};

const Login = () => {
  const [credentials, setCredentials] = useState(initialCredentials);
  const history = useHistory();

  const handleChange = (evt) => {
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/bubble-page");
        setCredentials(initialCredentials);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Bubbly Bubbly, welcome to Bubbles!</h1>
      <section className="form container">
        <form>
          <label className="login-form-label">
            Username:&nbsp;
            <input
              name="username"
              type="text"
              placeholder="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </label>
          <label className="login-form-label">
            Password:&nbsp;
            <input
              name="password"
              type="text"
              placeholder="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </label>
          <button onClick={onSubmit}>Log in</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
