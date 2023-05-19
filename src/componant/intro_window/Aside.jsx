import { Link } from "react-router-dom";
import { Fragment } from "react";
import LogoImg from "./../../imges/Programming-pana.png";
import "./../style/aside_style.css";

function Aside() {
  return (
    <Fragment>
      <section class="Student_dash">
        <div class="containerr">
          <div class="row">
            <div class="col-9"></div>
            <div class="aside_div col-3">
              <aside>
                <div class="student-logo">
                  <img src={LogoImg} alt="student" />
                </div>
                <div class="info">
                  <p class="username">Hoda Ahmed Ail</p>
                  <p class="email">Hodalil200@gmail.com</p>
                </div>
                <div class="subj_libr">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <i class="fas fa-home"></i>{" "}
                      <Link to="/Content">Home</Link>
                    </li>
                    <li class="list-group-item">
                      <i class="fas fa-user-alt"></i>{" "}
                      <Link to="/Portfolio">MY PROFILE</Link>
                    </li>
                    <li class="list-group-item">
                      <i class="fas fa-users"></i>
                      <Link to="/Groups">Groups</Link>
                    </li>
                    <li class="list-group-item">
                      <i class="fas fa-calendar-week"></i>
                      <Link to="Events">Event</Link>
                    </li>
                  </ul>

                  <div className="Setting ">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <Link to="#">Help & support</Link>
                      </li>
                      <li class="list-group-item">
                        <Link to="#">Setting & privacy</Link>
                      </li>

                      <li class="list-group-item">
                        <Link to="#">Log out</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Aside;
