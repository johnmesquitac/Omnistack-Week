import React, { useState } from "react";
import "./Login.css";
import api from '../services/api';

import logo from "../assets/logo.svg";

export default function Login({ history }) {
  const [username, setUsername] = useState(''); //receiving username

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/devs', {
        username,
    });
    console.log(response);
    history.push('/home');
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="Enter with your github user"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
