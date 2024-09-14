import { useState } from "react";

function PersonalDetails(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    number: "",
    location: "",
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
      <h2>Personal Details</h2>
      <p>{formData.firstName}</p>
      <p>{formData.surname}</p>
      <p>{formData.email}</p>
      <p>{formData.number}</p>
      <p>{formData.location}</p>

      <form className="personal-details-container" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>

        <label>
          Surname:
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
        </label>

        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label>
          Phone:
          <input type="number" name="number" value={formData.number} onChange={handleChange} />
        </label>

        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default PersonalDetails;
