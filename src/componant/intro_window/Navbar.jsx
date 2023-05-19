import { Fragment } from "react";
import "./../style/Nav_style.css";
// import LogoImg from "./../../imges/logo.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Fragment>
      <header>
        <div class="container">
          <div class="row">
            <div class="col">
              <h3>Frac</h3>
            </div>
            <div class="col search">
              <input type="search" placeholder="Search..." />
            </div>
            <div class="col nav_icon">
              <Link to="/Notices">
                <i class="fas fa-bell"></i>{" "}
              </Link>
              <Link to="/ChatingBox">
                {" "}
                <i class="fab fa-facebook-messenger"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
export default Navbar;
