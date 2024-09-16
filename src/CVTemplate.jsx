function CVTemplate({ personalData, experienceData1, experienceData2, educationData }) {
  return (
    <>
      <div className="cv-template-container">
        <div className="cv-template-top">
          <h2 className="cv-name">
            {personalData.firstName} {personalData.surname}
          </h2>
          <div className="personal-info-container">
            <p className="personal-data">{personalData.email}</p>
            <p className="personal-data">{personalData.number}</p>
            <p className="personal-data">{personalData.location}</p>
          </div>
        </div>
        <div className="cv-experience-container">
          <h2 className="cv-header">Experience</h2>
          <div className="experience-info-container">
            <div className="company-start-end-date">
              <h3 className="company-name">{experienceData1.companyName}:</h3>
              <h3 className="start-date">{experienceData1.startDate}</h3>
              <h3>- {experienceData1.endDate}</h3>
            </div>
            <h3 className="job-title">{experienceData1.position}</h3>
            <p>{experienceData1.description}</p>
          </div>
          <div className="experience-info-container">
            <div className="company-start-end-date">
              <h3 className="company-name">{experienceData2.companyName}:</h3>
              <h3 className="start-date">{experienceData2.startDate}</h3>
              <h3>- {experienceData2.endDate}</h3>
            </div>
            <h3 className="job-title">{experienceData2.position}</h3>
            <p>{experienceData2.description}</p>
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
            <h3 className="classification">{educationData.classification}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CVTemplate;
