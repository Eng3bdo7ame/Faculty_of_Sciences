import { Fragment } from "react";
import Logo from "./../imges/logo.jpg";
import "./style/notices.css";
function notices() {
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
                hanaa tarek and 2 other posted in logic group.<br></br> 5 hours
                ago
              </h5>
            </div>
          </div>
        </div>

        <div className="notices-content">
          <div className="my-notices">
            <div className="notices-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="notices-info">
              <h5>
                hanaa tarek and 2 other posted in logic group.<br></br> 5 hours
                ago
              </h5>
            </div>
          </div>
        </div>
        <div className="notices-content">
          <div className="my-notices">
            <div className="notices-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="notices-info">
              <h5>
                hanaa tarek and 2 other posted in logic group.<br></br> 5 hours
                ago
              </h5>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default notices;
