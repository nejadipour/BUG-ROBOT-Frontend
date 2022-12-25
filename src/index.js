import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";

ReactDOM.render(<App />, document.getElementById("root"));
