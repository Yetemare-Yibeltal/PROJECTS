import React from "react";
import "../LoginPage/Login.css";
function Login() {
  return (
    <div>
      <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      <div className="login-container">
        <h1>Sign-in</h1>
        <form action="">
          <h1>E-mail</h1>
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
          <button onClick={register} className="login-signInButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
