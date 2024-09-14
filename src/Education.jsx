import { useState } from "react";

function Education(props) {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    classification: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
  };

  return (
    <>
      <h2>Education</h2>
      <form className="education-container" onSubmit={handleSubmit}>
        <label>
          School/Universty:
          <input type="text" name="school" value={formData.school} onChange={handleChange} />
        </label>

        <label>
          Degree:
          <input type="text" name="degree" value={formData.degree} onChange={handleChange} />
        </label>

        <label>
          Classification:
          <input type="number" name="classification" value={formData.classification} onChange={handleChange} />
        </label>

        <label>
          Start Date:
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
        </label>

        <label>
          End Date:
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Education;
