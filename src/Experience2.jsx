import { useState } from "react";

function Experience2(props) {
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
    setFormData({
      ...formData,
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  return (
    <>
      <div>
        <h2>Experience Part Two</h2>
        <button onClick={props.onClick}>{props.editExperienceOpen ? "Hide" : "Edit"}</button>
      </div>
      {props.editExperienceOpen && (
        <form className="experience-container" onSubmit={handleSubmit}>
          <label>
            Company Name:
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
          </label>

          <label>
            Position:
            <input type="text" name="position" value={formData.position} onChange={handleChange} />
          </label>

          <label>
            Start Date:
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
          </label>

          <label>
            End Date:
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
          </label>

          <label>
            Description:
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          </label>

          <button type="submit">Submit</button>
          <button onClick={props.onDelete} className="delete-button">
            Delete
          </button>
        </form>
      )}
    </>
  );
}

export default Experience2;
