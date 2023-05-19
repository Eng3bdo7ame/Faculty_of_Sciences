import { Fragment } from "react";
import { Link } from "react-router-dom";
import imge_1 from "./../imges/image14.jpg";
import imge_2 from "./../imges/image13.jpg";
// import imge_3 from "./../imges/image12.jpg";
import "./style/content.css";

function content() {
  return (
    <Fragment>
      <section className="content">
        <div className="content-1">
          <div className="content-logo">
            <img src={imge_1} alt="" />
            <Link to="./"> Theater College</Link>
            <p>
              .يعلن فريق المسرح عن فتح باب التسجيل لمن يريد الدخول من يوم 1مارس
              القادم
            </p>
          </div>
          <div className="content-img">
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
      </section>
    </Fragment>
  );
}
export default content;
