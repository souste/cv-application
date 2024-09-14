import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import CVTemplate from "./CVTemplate";

import "./App.css";

function App() {
  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});

  const getPersonalData = (data) => {
    setPersonalData(data);
  };

  const getExperienceData = (data) => {
    console.log(data);
    setExperienceData(data);
  };

  const getEducationData = (data) => {
    console.log(data);
    setEducationData(data);
  };

  return (
    <>
      <div className="outer-container">
        <div className="form-container">
          <PersonalDetails onSubmit={getPersonalData} />
          <Experience onSubmit={getExperienceData} />
          <Education onSubmit={getEducationData} />
        </div>
        <div className="template-container">
          <CVTemplate personalData={personalData} educationData={educationData} experienceData={experienceData} />
        </div>
      </div>
    </>
  );
}

export default App;
