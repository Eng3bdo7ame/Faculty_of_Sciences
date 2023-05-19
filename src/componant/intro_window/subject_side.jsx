import { Fragment } from "react";
import "./../style/subject.css";
import imge1 from "./../../imges/image3.jpg";
import imge2 from "./../../imges/image4.jpg";
import imge3 from "./../../imges/image5.jpg";
import imge4 from "./../../imges/image6.jpg";
import imge5 from "./../../imges/image7.jpg";
import imge6 from "./../../imges/image8.jpg";

function Subject() {
  return (
    <Fragment>
      <section class="Student_dash">
        <div class="right">
          <h2> MY Groups</h2>
          <ul>
            <li class="div1">
              <div>
                <img class="imge" src={imge1} alt="student" />
                <h3 class="H3"> Database </h3>
                <p> Dr: Nader</p>
              </div>
            </li>
            <li class="div2">
              <div>
                <img class="imge" src={imge2} alt="student" />
                <h3 class="H3"> Math3 </h3>
                <p> Dr: Osama</p>
              </div>
            </li>
            <li class="div3">
              <div>
                <img class="imge" src={imge3} alt="student" />
                <h3 class="H3"> Data Mining </h3>
                <p> Dr: Amged</p>
              </div>
            </li>
            <li class="div3">
              <div>
                <img class="imge" src={imge4} alt="student" />
                <h3 class="H3"> Compiler </h3>
                <p> Dr: Ibrahim</p>
              </div>
            </li>
            <li class="div3">
              <div>
                <img class="imge" src={imge5} alt="student" />
                <h3 class="H3"> Logic </h3>
                <p> Dr: Khaled Amin</p>
              </div>
            </li>
            <li class="div3">
              <div>
                <img class="imge" src={imge6} alt="student" />
                <h3 class="H3"> Math0 </h3>
                <p> Dr: Osama</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
}
export default Subject;
