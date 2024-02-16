import { useState } from "react";
import "./Login.css";
import { Routes, Route, useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [data, setData] = useState({ name: "", password: "", email: "" });
//   const { name, email, password } = data;
  const navigate = useNavigate();

//   const changeHandler = (e) => {
//     setData({ ...data, [e.target.name]: [e.target.value] });
//   };
  const submitHandler = (e) => {
    e.preventDefault();
    let objData = {
        name: name,
        email: email,
        password: password
    };
    // let {name, email, password} = objData
    console.log(objData);
    const data = localStorage.setItem('myObj', JSON.stringify(objData));
    console.log(data);
    navigate("/home");
  };

  return (
    <div>
      <div className="login-page-background-pic">
        <div className="login-page">
          <span className="login-heading">Login Page</span>
          <form onSubmit={submitHandler} className="login-form">
            <div className="login-form-group">
              <input
                onChange={(e)=>{setName(e.target.value)}}
                type="text"
                name="name"
                value={name}
                className="login-page-form"
                placeholder="Name"
                required
              />
            </div>
            <div className="login-form-group">
              <input
                onChange={(e)=> {setEmail(e.target.value)}}
                type="email"
                name="email"
                value={email}
                className="login-page-form"
                placeholder="Email"
                required
              />
            </div>
            <div className="login-form-group">
              <input
                onChange={(e)=> {setPassword(e.target.value)}}
                type="password"
                name="password"
                value={password}
                className="login-page-form"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-submit-btn">
              <button
                className="login-btn"
                type="submit"
                name="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        {/* <div className="login-page-image">

        </div> */}
      </div>
    </div>
  );
};

export default Login;
