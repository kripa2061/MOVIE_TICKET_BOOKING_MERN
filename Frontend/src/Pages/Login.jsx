import React, { useEffect, useState } from 'react';
import './Login.css'
import toast from 'react-hot-toast';
import axios from 'axios';
const Login = ({setData}) => {
  const url="http://localhost:8000"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  

  const formHandler = (e) => {
    const { name, value } = e.target;
  
    setFormData({ ...formData, [name]: value });

  };

  const submitHandler =async (e) => {
    e.preventDefault();
    const response=await axios.post(`${url}/api/user/register`,formData);
    if(response.data.success){
         setData({
name:formData.name,
email:formData.email
   })
      toast.success("success");
          setFormData({
      "name":"",
      "email":"",
      "password":""
    })
    }else{
      toast(response.data.message)
    }

  };
useEffect(()=>{
  console.log(formData)
},[formData])
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title"> SignUp</h2>
        <form className="login-form" onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={formHandler}
            placeholder="Name"
            className="login-input"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={formHandler}
            placeholder="Email"
            className="login-input"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={formHandler}
            placeholder="Password"
            className="login-input"
          />
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
