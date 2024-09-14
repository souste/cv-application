import { useState } from "react";

function PersonalDetails() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <h2>Personal Details</h2>
      <p>{firstName}</p>
      <p>{surname}</p>
      <p>{email}</p>
      <p>{number}</p>
      <p>{location}</p>

      <form className="personal-details-container">
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>

        <label>
          Surname:
          <input type="text" value={surname} onChange={handleSurnameChange} />
        </label>

        <label>
          Email
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>

        <label>
          Phone:
          <input type="number" value={number} onChange={handleNumberChange} />
        </label>

        <label>
          Location:
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>
      </form>
    </>
  );
}

export default PersonalDetails;
