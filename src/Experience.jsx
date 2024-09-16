import { useState } from "react";

function Experience(props) {
  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
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
      <div>
        <h2>Experience</h2>
        <button onClick={props.onClick}>{props.editExperienceOpen ? "Hide" : "Edit"}</button>
      </div>
      {props.editExperienceOpen && (
        <form className="experience-container" onSubmit={handleSubmit}>
          <label>
            Company Name:
            <input type="text" name="companyName" value={setFormData.companyName} onChange={handleChange} />
          </label>

          <label>
            Position:
            <input type="text" name="position" value={setFormData.position} onChange={handleChange} />
          </label>

          <label>
            Start Date:
            <input type="date" name="startDate" value={setFormData.startDate} onChange={handleChange} />
          </label>

          <label>
            End Date:
            <input type="date" name="endDate" value={setFormData.endDate} onChange={handleChange} />
          </label>

          <label>
            Location:
            <input type="text" name="location" value={setFormData.location} onChange={handleChange} />
          </label>

          <label>
            Description:
            <textarea name="description" value={setFormData.description} onChange={handleChange}></textarea>
          </label>

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default Experience;
