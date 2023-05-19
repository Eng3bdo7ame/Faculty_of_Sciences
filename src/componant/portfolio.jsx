import { Fragment } from "react";
import imge_1 from "./../imges/image12.jpg";
import imge_2 from "./../imges/image14.jpg";
import { Link } from "react-router-dom";
import "./style/content.css";

function portfolio() {
  return (
    <Fragment>
      <section className="content">
        <div className="content-1">
          <div className="content-logo">
            <img src={imge_1} alt="" />
            <Link to="./">Eng_Hoda</Link>
          </div>
          <div className="content-img">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              quae deleniti, quam sapiente dolores sint iure aperiam, optio,
              voluptate inventore error explicabo?
            </p>
            <img src={imge_2} alt="" />
          </div>
          <div className="content-icon">
            <div className="left-icon">
              <i class="far fa-heart"></i>
              <i class="far fa-comment-alt"></i>
              <i class="fas fa-share"></i>
            </div>
            <div className="right-icon">
              <i class="far fa-bookmark"></i>
            </div>
          </div>
          <div className="content-info">
            <p>10 Likes</p>
            <p>view all comments</p>
            <p>24Fep 2023</p>
          </div>
        </div>

        <button className="addpost">+</button>
      </section>
    </Fragment>
  );
}
export default portfolio;
