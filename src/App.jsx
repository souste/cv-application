// import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import CVTemplate from "./CVTemplate";

import "./App.css";

function App() {
  // const getData = (data) => {
  //   // const firstName = "";
  //   // console.log(firstName);
  //   console.log("FirstName coming from App.js", data);
  //   console.log("Surname coming from App.js", data);
  // };

  return (
    <>
      <div className="outer-container">
        <div className="form-container">
          <PersonalDetails />
          <Education />
          <Experience />
        </div>
        <div className="template-container">
          <CVTemplate />
        </div>
      </div>
    </>
  );
}

export default App;
