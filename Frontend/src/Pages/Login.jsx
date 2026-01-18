import React, { useState } from 'react';
import './Login.css';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setData }) => {
  const navigate = useNavigate();
  const url = "http://localhost:8000"; // backend URL

  const [currentState, setCurrentState] = useState("signup");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const endpoint = currentState === "signup" ? "/api/user/register" : "/api/user/login";
      const payload = currentState === "signup" ? formData : { email: formData.email, password: formData.password };

      const response = await axios.post(`${url}${endpoint}`, payload);

      // Log the backend response to check _id
      console.log("Backend user object:", response.data.data.user);

      if (response.data.success) {
        const userData = response.data.data.user; // includes _id
        const token = response.data.data.token;

        // Save exactly what backend returns
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token);

        // Update state
        setData(userData);

        toast.success(currentState === "signup" ? "Signup successful!" : "Login successful!");
        setFormData({ name: "", email: "", password: "" });
        navigate("/");
      } else {
        toast.error(response.data.message || "Authentication failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">{currentState === "signup" ? "Sign Up" : "Login"}</h2>

        <form className="login-form" onSubmit={submitHandler}>
          {currentState === "signup" && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={formHandler}
              placeholder="Name"
              className="login-input"
              required
            />
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={formHandler}
            placeholder="Email"
            className="login-input"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={formHandler}
            placeholder="Password"
            className="login-input"
            required
          />

          <button type="submit" className="login-button">
            {currentState === "signup" ? "Sign Up" : "Login"}
          </button>

          {currentState === "signup" ? (
            <p className="Switch" onClick={() => setCurrentState("login")}>
              Already have an account? Login
            </p>
          ) : (
            <p className="Switch" onClick={() => setCurrentState("signup")}>
              Don’t have an account? Sign up
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
