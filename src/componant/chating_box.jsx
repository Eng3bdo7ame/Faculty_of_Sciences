import { Fragment } from "react";
import Logo from "./../imges/logo.jpg";
import "./style/chating_box.css";
function chating_box() {
  return (
    <Fragment>
      <section className="chating_box">
        <div className="chating-content">
          <div className="chat-componant">
            <img src={Logo} alt="" />
            <div className="chat-icon">
              <i class="fas fa-phone-alt"></i>
              <i class="fas fa-video"></i>
            </div>
          </div>
          <main>
            <div class="start">
              <p class="P1"> Hi how are you</p>
              <p class="P2"> fine</p>
              <div class="chat-input">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Type your massege here"
                />
                <div>
                  <i class="fas fa-arrow-circle-right"></i>
                  <i class="fas fa-microphone"></i>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </Fragment>
  );
}
export default chating_box;
