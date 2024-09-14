function CVTemplate() {
  return (
    <>
      <div className="cv-template-container">
        <div className="cv-template-top">
          <h2 className="cv-name">JOE BLOGGS</h2>
          <div className="personal-info-container">
            <p>joebloggs@outlook.com</p>
            <p>07000 000 000</p>
            <p>Manchester</p>
          </div>
        </div>
        <div className="cv-experience-container">
          <h2 className="cv-header">Experience</h2>
          <div className="experience-info-container">
            <div className="company-start-end-date">
              <h3 className="company-name">THE FROG COMPANY:</h3>
              <h3 className="start-date">JAN 2024</h3>
              <h3> - PRESENT</h3>
            </div>
            <h3 className="job-title">Software Developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="cv-education-container">
          <h2 className="cv-header">Education</h2>
          <div className="school-start-end-date">
            <h3 className="school-name">UNIVERSITY OF LIVERPOOL:</h3>
            <h3 className="start-date">SEP 2002 </h3>
            <h3>- JUL 2005</h3>
          </div>
          <h3 className="degree">BSc Economics</h3>
        </div>
      </div>
    </>
  );
}

export default CVTemplate;
