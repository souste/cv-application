import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
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
    classification: "First",
    startDate: "Start Date",
    endDate: "End Date",
  });
  const [experienceData, setExperienceData] = useState({
    companyName: "Company Name",
    position: "Job Role",
    startDate: "Start Date",
    endDate: "End Date",
    location: "Manchester",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  });

  const [editOpen, setEditOpen] = useState(false);

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

  const handleEditOpen = () => {
    console.log("I'm a little Jeevy");
    setEditOpen(!editOpen);
  };

  return (
    <>
      <div className="outer-container">
        <div className="form-container">
          <PersonalDetails onSubmit={getPersonalData} onClick={handleEditOpen} editOpen={editOpen} />
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
