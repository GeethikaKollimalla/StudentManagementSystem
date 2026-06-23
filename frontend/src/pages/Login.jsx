import { useState } from "react";

function Login({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {

    if(
      username === "admin" &&
      password === "SMS2026@Admin"
    ){
      onLogin();
    }
    else{
      alert("Invalid Credentials");
    }
  }

  return (

    <div className="form-container">

      <div className="form-card">

        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;