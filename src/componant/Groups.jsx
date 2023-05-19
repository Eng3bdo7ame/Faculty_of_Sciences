import { Fragment } from "react";
import Logo from "./../imges/logo.jpg";
import "./style/groups.css";
import { Link } from "react-router-dom";

function Groups() {
  const goinNow = 0;
  return (
    <Fragment>
      <section className="Groups">
        <div class="container">
          <div class="lib_titel">
            <h2>My_Group</h2>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="card">
                <img src={Logo} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Software Engineer</h5>
                  <div className="group-btn">
                    <Link to="/Details" class="btn btn-primary">
                      Show Details
                    </Link>
                    {goinNow === 0 ? (
                      <Link href="./" class="btn btn-primary">
                        Join Now
                      </Link>
                    ) : (
                      <p className="Joined">
                        Joined <i class="fas fa-check"></i>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default Groups;
