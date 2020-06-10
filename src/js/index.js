//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/js/dist/dropdown";
import $ from "jquery";
import Popper from "popper.js";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
