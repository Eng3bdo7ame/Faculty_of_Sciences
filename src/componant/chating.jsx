import { Fragment } from "react";
import Logo from "./../imges/logo.jpg";
import { Link } from "react-router-dom";

import "./style/notices.css";
function chating() {
  return (
    <Fragment>
      <section className="notices">
        <div className="notices-content">
          <div className="my-notices">
            <div className="notices-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="notices-info">
              <h5>
                <Link to="/ChatingBox">
                  hanaa tarek send massege.<br></br> 5 hours ago
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default chating;
