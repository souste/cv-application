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
      <PersonalDetails />
      <Education />
      <Experience />
      <CVTemplate />
    </>
  );
}

export default App;
