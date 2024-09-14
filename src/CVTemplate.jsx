function CVTemplate({ personalData, experienceData, educationData }) {
  return (
    <>
      <div className="cv-template-container">
        <div className="cv-template-top">
          <h2 className="cv-name">
            {personalData.firstName} {personalData.surname}
          </h2>
          <div className="personal-info-container">
            <p>{personalData.email}</p>
            <p>{personalData.number}</p>
            <p>{personalData.location}</p>
          </div>
        </div>
        <div className="cv-experience-container">
          <h2 className="cv-header">Experience</h2>
          <div className="experience-info-container">
            <div className="company-start-end-date">
              <h3 className="company-name">{experienceData.companyName}:</h3>
              <h3 className="start-date">{experienceData.startDate}</h3>
              <h3>- {experienceData.endDate}</h3>
            </div>
            <h3 className="job-title">{experienceData.position}</h3>
            <p>{experienceData.description}</p>
          </div>
        </div>
        <div className="cv-education-container">
          <h2 className="cv-header">Education</h2>
          <div className="school-start-end-date">
            <h3 className="school-name">{educationData.school}:</h3>
            <h3 className="start-date">{educationData.startDate}</h3>
            <h3>- {educationData.endDate}</h3>
          </div>
          <div className="degree-classification">
            <h3 className="degree">{educationData.degree}:</h3>
            <h3>Classification: {educationData.classification}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
//               ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
//               fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//               mollit anim id est laborum.

export default CVTemplate;
