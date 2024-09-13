// import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import CVTemplate from "./CVTemplate";

import "./App.css";

function App() {
  return (
    <>
      <h1>CV Creator</h1>
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
