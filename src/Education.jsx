function Education() {
  return (
    <>
      <h2>Education</h2>
      <form className="education-container">
        <label>
          School/Universty:
          <input type="text" />
        </label>

        <label>
          Degree:
          <input type="text" />
        </label>

        <label>
          Classification:
          <input type="number" />
        </label>

        <label>
          Start Date:
          <input type="date" />
        </label>

        <label>
          End Date:
          <input type="date" />
        </label>

        <label></label>
      </form>
    </>
  );
}

export default Education;
