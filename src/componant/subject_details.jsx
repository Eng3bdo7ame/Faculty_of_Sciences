import { Fragment } from "react";
import Logo from "./../imges/image3.jpg";
import "./style/Details.css";

function Details() {
  return (
    <Fragment>
      <section className="Details">
        <div className="sub_img">
          <img src={Logo} alt="" />
        </div>
        <div className="Details-titel">
          <h3>Database</h3>
        </div>
        <div className="Details-info">
          <h4>Definition of Subject :</h4>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus beatae, a nulla dicta quisquam odit dolore quas et
              excepturi quasi, voluptatibus, laboriosam recusandae consequatur?
              Harum pariatur sequi corrupti expedita esse? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Repellendus beatae, a nulla
              dicta quisquam odit dolore quas et excepturi quasi, voluptatibus,
              laboriosam recusandae consequatur? Harum pariatur sequi corrupti
              expedita esse? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Repellendus beatae, a nulla dicta quisquam odit dolore quas
              et excepturi quasi, voluptatibus, laboriosam recusandae
              consequatur? Harum pariatur sequi corrupti expedita esse? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
              beatae, a nulla dicta quisquam odit dolore quas et excepturi
              quasi, voluptatibus, laboriosam recusandae consequatur? Harum
              pariatur sequi corrupti expedita esse? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Repellendus beatae, a nulla dicta
              quisquam odit dolore quas et excepturi quasi, voluptatibus,
              laboriosam recusandae consequatur? Harum pariatur sequi corrupti
              expedita esse? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Repellendus beatae, a nulla dicta quisquam odit dolore quas
              et excepturi quasi, voluptatibus, laboriosam recusandae
              consequatur? Harum pariatur sequi corrupti expedita esse?
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default Details;
