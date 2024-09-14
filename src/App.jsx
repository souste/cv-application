// import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import CVTemplate from "./CVTemplate";

import "./App.css";

function App() {
  const getPersonalData = (data) => {
    console.log("This is the first name coming from App", data);
  };
  return (
    <>
      <div className="outer-container">
        <div className="form-container">
          <PersonalDetails onSubmit={getPersonalData} />
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
