import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const loginData = (e) => {
    e.preventDefault();
    console.log(name, email);
    console.log("Login");
    navigate("/home");
  };
  return (
    <div>
      <div className="login-main">
        <div className="login">
          <span className="login-text">Login Form</span>
          <form className="login-form" onSubmit={loginData}>
            <div className="login-form-group">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="login-page-form"
                placeholder="Name"
                required
              />
            </div>
            <div className="login-form-group">
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-page-form"
                placeholder="Email"
                required
              />
            </div>
            <div className="login-form-submit-btn">
              <button  className="login-btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="login-background-img"></div>
      </div>
    </div>
  );
}

export default Login;
