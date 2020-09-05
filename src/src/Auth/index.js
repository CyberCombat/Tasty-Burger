import React, { useState, useEffect } from "react";
import "./auth.css";

const Auth = () => {
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(0);
  const [inputType, setInputType] = useState("password");
  const [data, setData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    number: null,
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 700);
  }, []);

  const clickHandle = (e) => {
    setFlag((prev) => prev ^ 1);
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
  };

  const handleSignInData = (e) => {
    //data
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
  };
  const handleSignUpData = (e) => {
    // setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "23444898429",
          }}
        >
          <img src={require("../images/Spinner.gif")} alt="loader" />
        </div>
      ) : (
        <div className={flag === 0 ? "container1" : "container1 sign-up-mode"}>
          <div className="forms-container" style={{ width: "100%" }}>
            <div className="signin-signup">
              <form className="sign-in-form" onSubmit={handleSignIn}>
                <h2 className="title" style={{ fontFamily: "poppins" }}>
                  Sign in
                </h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleSignInData}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  {/* <div
                      style={{
                        border: "0 solid #FFF",
                        borderLeftColor: "#acacac"
                      }}
                    > */}
                  <input
                    name="password"
                    type={inputType}
                    placeholder="Password"
                    onChange={handleSignInData}
                  />

                  {/* </div> */}
                </div>
                <input type="submit" value="Login" className="btn solid" />
                {/* <Link to="/forget" style={{ fontFamily: "Poppins" }}>
                  Forgot Password?
                </Link> */}
              </form>
              <form onSubmit={handleSignUpSubmit} className="sign-up-form">
                <h2 className="title" style={{ fontFamily: "poppins" }}>
                  Sign up
                </h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input
                    onChange={handleSignUpData}
                    value={data.name}
                    name="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope" />
                  <input
                    onChange={handleSignUpData}
                    value={data.email}
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-phone" />
                  <input
                    onChange={handleSignUpData}
                    value={data.number}
                    type="text"
                    name="number"
                    placeholder="Contact Number"
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input
                    onChange={handleSignUpData}
                    value={data.password}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input
                    onChange={handleSignUpData}
                    value={data.confirmPassword}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
                <input type="submit" className="btn" value="Sign up" />
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3 style={{ fontFamily: "poppins" }}>New here ?</h3>
                <p style={{ fontFamily: "poppins" }}>
                  Then Sign Up and Start Ordering!
                </p>
                <button
                  className="btn transparent"
                  id="sign-up-btn"
                  onClick={clickHandle}
                  style={{ fontFamily: "poppins" }}
                >
                  Sign up
                </button>
              </div>
              <img
                src={require("../images/log.svg")}
                className="image"
                alt=""
              />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3 style={{ fontFamily: "poppins" }}>One of us ?</h3>
                <p style={{ fontFamily: "poppins" }}>
                  Then Sign In and get Started!
                </p>
                <button
                  className="btn transparent"
                  onClick={clickHandle}
                  id="sign-in-btn"
                  style={{ fontFamily: "poppins" }}
                >
                  Sign in
                </button>
              </div>
              <img
                src={require("../images/register.svg")}
                className="image"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
