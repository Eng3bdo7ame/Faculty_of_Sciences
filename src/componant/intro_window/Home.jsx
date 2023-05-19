import { Fragment } from "react";
import imge_1 from "./../../imges/Programming-pana.png";
import "./../style/Home.css";

function home() {
  return (
    <Fragment>
      <section className="Home">
        <div className="Home-page">
          <div className="hello-massage">
            <h1>Welcome to our Faculty</h1>
          </div>
          <div className="hello-img">
            <img src={imge_1} alt="" />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default home;
