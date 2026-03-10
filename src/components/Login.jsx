import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Dashboard from "./Dashboard/Dashboard";
import "./Login.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  loginRequestAction,
  loginRequestFail,
  loginRequestSucess,
} from "./Redux/Action/authAction";

const Login = () => {

  const{register,handleSubmit}=useForm();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (fromData) => {
    // e.preventDefault();
    let payload = {
      email: fromData.email,
      password: fromData.password,
    };
    dispatch(loginRequestAction());
    axios
      .post("http://localhost:3001/api/noAuth/users/login", payload)
      .then((res) => {
        console.log(res, "res");
        if (res.data.status === 200) {
          navigate("/Dashboard");
           dispatch(loginRequestSucess(res.data.data));
        }
      })
      .catch((err) => {
        dispatch(loginRequestFail(err));
        console.log(err, "err");
      });

    
  };
  return (
    <div className="login-wrapper">
      <h2 className="title">SwachhBharat</h2>

      <div className="login-card">
        <p className="subtitle">Sign in to start your session</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"  
              placeholder="E-mail Address"
              {...register("email")}
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input

              type="password"
              placeholder="password"
              {...register("password")}
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
