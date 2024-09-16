import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience1 from "./Experience1";
import Experience2 from "./Experience2";
import CVTemplate from "./CVTemplate";

import "./App.css";

function App() {
  const [personalData, setPersonalData] = useState({
    firstName: "JOE",
    surname: "BLOGGS",
    email: "joebloggs@example.com",
    number: "07000000000",
    location: "Manchester",
  });
  const [educationData, setEducationData] = useState({
    school: "School/Universty Name",
    degree: "Degree Name",
    classification: "Classification",
    startDate: "Start Date",
    endDate: "End Date",
  });
  const [experienceData1, setExperienceData1] = useState({
    companyName: "Company Name",
    position: "Job Role",
    startDate: "Start Date",
    endDate: "End Date",
    location: "Manchester",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  });

  const [experienceData2, setExperienceData2] = useState({
    companyName: "Company Name",
    position: "Job Role",
    startDate: "Start Date",
    endDate: "End Date",
    location: "Manchester",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  });

  const [editPersonalOpen, setEditPersonalOpen] = useState(false);
  const [editEducationOpen, setEditEducationOpen] = useState(false);
  const [editExperience1Open, setEditExperience1Open] = useState(false);
  const [editExperience2Open, setEditExperience2Open] = useState(false);

  const getPersonalData = (data) => {
    setPersonalData(data);
  };

  const getExperience1Data = (data) => {
    setExperienceData1(data);
  };

  const getExperience2Data = (data) => {
    setExperienceData2(data);
  };

  const getEducationData = (data) => {
    setEducationData(data);
  };

  const handlePersonalEditOpen = () => {
    setEditPersonalOpen(!editPersonalOpen);
  };

  const handleEducationEditOpen = () => {
    setEditEducationOpen(!editEducationOpen);
  };

  const handleExperience1EditOpen = () => {
    setEditExperience1Open(!editExperience1Open);
  };

  const handleExperience2EditOpen = () => {
    setEditExperience2Open(!editExperience2Open);
  };

  return (
    <>
      <div className="outer-container">
        <div className="form-container">
          <PersonalDetails
            onSubmit={getPersonalData}
            onClick={handlePersonalEditOpen}
            editPersonalOpen={editPersonalOpen}
          />
          <Experience1
            onSubmit={getExperience1Data}
            onClick={handleExperience1EditOpen}
            editExperience1Open={editExperience1Open}
          />
          <Experience2
            onSubmit={getExperience2Data}
            onClick={handleExperience2EditOpen}
            editExperienceOpen={editExperience2Open}
          />
          <Education
            onSubmit={getEducationData}
            onClick={handleEducationEditOpen}
            editEducationOpen={editEducationOpen}
          />
        </div>
        <div className="template-container">
          <CVTemplate
            personalData={personalData}
            educationData={educationData}
            experienceData1={experienceData1}
            experienceData2={experienceData2}
          />
        </div>
      </div>
    </>
  );
}

export default App;
