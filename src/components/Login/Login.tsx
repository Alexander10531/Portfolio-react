import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";


const Login : React.FC = () => {
  
  const navigate = useNavigate();
  
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    navigate("/dashboard");

  }

    return (
      <>
        <h1>Login</h1>
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <div className="label-container">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="label-container">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="label-container">
              <button className="login-button" type="submit">Login</button>
            </div>
          </form>
        </div>
      </>
    )
}

export default Login;