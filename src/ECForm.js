import React from "react";
import "./FormStyles.css";

const IssueForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted. Check the console for data.");
    console.log(new FormData(e.target));
  };

  return (
    <div className="form-wrapper">
      <h2>Extenuating Circumstances Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Module Code:</label>
          <input name="moduleCode" type="text" placeholder="Module Code" required />
        </div>
        <div className="form-group">
          <label>Assessment Type:</label>
          <input name="assessmentType" type="text" placeholder="Assessment Type" required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" placeholder="Description" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IssueForm;
