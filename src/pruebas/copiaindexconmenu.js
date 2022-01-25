import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.scss";
import Scroll from "react-scroll";
import { render } from "react-dom";
import { Seccion1 } from "./components/seccion1";
import { Seccion2 } from "./components/seccion2";
import { Seccion3 } from "./components/seccion3";
import { Seccion4 } from "./components/seccion4";
import { Seccion5 } from "./components/seccion5";
import { Footer } from "./components/footer";

var Link = Scroll.Link;
var Element = Scroll.Element;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

class Section extends React.Component {
  render() {
    return (
      <div className="container">
        <nav>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <button class="dropdown-item" type="button">
                <Link
                  activeClass="active"
                  to="home"
                  containerId="containerElement">
                  Home
                </Link>
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                <Link
                  activeClass="active"
                  to="aboutus"
                  containerId="containerElement">
                  About Us
                </Link>
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  <Link
                    activeClass="active"
                    to="product"
                    containerId="containerElement">
                    Product
                  </Link>
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  <Link
                    activeClass="active"
                    to="service"
                    containerId="containerElement">
                    Service
                  </Link>
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  <Link
                    activeClass="active"
                    to="contact"
                    containerId="containerElement">
                    Contact
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* <nav> */}
          {/* <ul> */}
            {/* eslint-disable-next-line no-unused-expressions */}
            {/* <li>
              <Link
                activeClass="active"
                to="home"
                containerId="containerElement"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="aboutus"
                containerId="containerElement"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="product"
                containerId="containerElement"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="service"
                containerId="containerElement"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                containerId="containerElement"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav> */}

        <Element
          name="test7"
          className="element"
          id="containerElement"
          style={{
            position: 'relative',
            height: "48rem",
            width: "85rem",
            overflow: "auto"
          }}
        >
          <Element name="home" style={{ height: "48rem" }}>
            <Seccion1 />
          </Element>

          <Element name="aboutus" style={{ height: "48rem" }}>
            <Seccion2 />
          </Element>

          <Element name="product" style={{ height: "48rem" }}>
            <Seccion3 />
          </Element>

          <Element name="service" style={{ height: "48rem" }}>
            <Seccion4 />
          </Element>

          <Element name="contact" style={{ height: "48rem" }}>
            <Seccion5 />
          </Element>
        </Element>
      </div>
    );
  }
}

render(<Section />, document.getElementById("root"));
