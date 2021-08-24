import React from "react";
import { useState } from "react";
import "../styles/Style_auth.css";
import { useForm } from "react-hook-form";
import { UseUserContext } from "../context/userContext";

function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userInfo, setUerInfo] = useState();
  
  const {logIn} = UseUserContext();

  const onSubmit = (data) => {
    logIn(data.username)
    setUerInfo(data);
    console.log(data);
  };
  console.log(errors);

  const {user} = UseUserContext();
  return ( user.isGuestUser? 
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="UserName"
              {...register("username", { required: "Username is Required" })} 
            ></input>
            <p>{errors.username?.message}</p>
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email" 
              placeholder="Email"
              {...register("email", { required: "Email is Required" })}
            ></input>
            <p>{errors.email?.message}</p>
          
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 4,
                  message: "password must contain more than 4 characters",
                },
                maxLength: {
                    value: 8,
                    message: "password must contain less than 8 characters",
                  },
              })}
            ></input>
            <p>{errors.password?.message}</p>
          </div>

          <button className="fluid ui button blue">Submit</button>
     
        </div>
      </form>
    </div>
  :
  <div>Home</div>
  );
}

export default Auth;
