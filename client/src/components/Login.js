import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [msg, setMsg] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqData = formData;
    axios
      .post("http://localhost:8080/user/login", reqData)
      .then((response) => {
        setMsg(response.data.msg);
        console.log(response.data.msg);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="loginContainer">
      <h1>{msg}</h1>
      <form className="loginForm" onSubmit={handleSubmit} method="post">
        <div className="loginComponent">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="loginComponent">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="loginComponent">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
