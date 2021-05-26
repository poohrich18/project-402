import React, { useEffect, useState } from "react";
import Axios from "axios";
//import "../App.css";

export default function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:5001/username/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:5001/username/login2", {
      username: username,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
      } else {
        console.log(response.data);
        localStorage.setItem("token", "Pooh" + response.data.token);
        setLoginStatus(true);
      }
    });
  };

  const userAuthenticated = () => {
    Axios.get("http://localhost:5001/username/isUserAuth", {
      headers: { "x-access-token": localStorage.getItem("token") },
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:5001/username/login2").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].id);
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div>

      <h1>{loginStatus && <button>Check if Authenticated</button>}</h1>
    </div>
  );
}
