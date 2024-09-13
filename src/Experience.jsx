function Experience() {
  return (
    <>
      <h2>Experience</h2>
      <form className="experience-container">
        <label>
          Company Name:
          <input type="text" />
        </label>

        <label>
          Position:
          <input type="text" />
        </label>

        <label>
          Start Date:
          <input type="date" />
        </label>

        <label>
          End Date:
          <input type="date" />
        </label>

        <label>
          Location:
          <input type="text" />
        </label>

        <label>
          Description:
          <textarea></textarea>
        </label>
      </form>
    </>
  );
}

export default Experience;
