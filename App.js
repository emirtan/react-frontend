import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormComponent from "./FormComponent";
import Navbar from "./Navbar";
import React from "react";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Sign Up</h1>

      <div className="form">
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
