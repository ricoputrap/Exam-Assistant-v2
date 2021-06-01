import React from "react";
import { useStateValue } from "../../context/StateProvider";
import './Login.css'
import {Link} from "react-router-dom";

function Login() {

  const [{ token }, dispatch] = useStateValue();
  const handlelogin = ()=>{
      dispatch({
        type: "SET_TOKEN",
        token: "123"
      });

  }
  return (
    <div className="login">
      <h1>Welcome to Exam Assistant</h1>
      <div className="btn-wrap">
        <button className="btn" onClick={handlelogin}> Student Login </button>
        <Link to="/teacher"><button className="btn"> Teacher Login </button></Link>
      </div>
    </div>
  )

}

export default Login;
