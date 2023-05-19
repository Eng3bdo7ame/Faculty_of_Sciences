import { Link } from "react-router-dom";

import { Fragment } from "react";
import "./style/student.css";
import LogoImg from "./../imges/login_logo.png";

function Student_login() {
  // const btn = document.querySelectorAll("showPass");
  // const pass = document.querySelector("password");
  // function showPass() {
  //   if (pass.type === "password") {
  //     pass.type = "text";
  //   } else {
  //     pass.type = "password";
  //   }
  // }
  return (
    <Fragment>
      <section className="login">
        <div className="form_div">
          <form action="">
            <div className="logo">
              <img src={LogoImg} alt="" />
            </div>
            <div className="login_titel">
              <h2>Fresh Academy</h2>
            </div>
            <div className="inputs">
              <input
                className="password"
                placeholder="Your Email"
                type="email"
                required
              />
              <input placeholder="Your Password" type="password" required />
            </div>
            <div className="sign_in_btn">
              <Link to="/Content">
                <button>Sign in</button>
              </Link>
            </div>
            <div className="New_account">
              <p>Do not have an account ? </p>
              <Link to="./">Sign up</Link>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
}

export default Student_login;
