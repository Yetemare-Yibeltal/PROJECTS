import React from "react";
import { useState } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import "../LoginPage/Login.css";
function Login() {
 const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
 const signIn = (e) => {
   e.preventDefault();
   signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       console.log("Signed in:", userCredential.user);
       navigate("/"); // or history.push("/") if using React Router v5
     })  
     .catch((error) => {
       alert(error.message);
     });
 };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if(userCredential){
          navigate('/');
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://thumbs.dreamstime.com/b/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.jpg "
          alt=""
        />
      </Link>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Passwords</h5>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login-signInButton">
            Sign In
          </button>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Condions of Use
            Sale. Please see or privacy Notice, our Cookies Notice and our
            Interest-Based ADS Notice.
          </p>
          <button onClick={register} className="login-registerButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
