function PersonalDetails() {
  return (
    <>
      <h2>Personal Details</h2>
      <form className="personal-details-container">
        <label>
          First Name:
          <input type="text" />
        </label>

        <label>
          Surname:
          <input type="text" />
        </label>

        <label>
          Email
          <input type="email" />
        </label>

        <label>
          Phone:
          <input type="number" />
        </label>

        <label>
          Location:
          <input type="text" />
        </label>
      </form>
    </>
  );
}

export default PersonalDetails;
