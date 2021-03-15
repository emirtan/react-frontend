import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
//import * as serviceWorker from "./reportWebVitals";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

//serviceWorker.unregister();
reportWebVitals();