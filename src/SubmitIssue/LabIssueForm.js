import React from 'react';
import "./FormStyles.css";

const LabIssueForm = ({ handleSubmit }) => {
  return (
    <>
      <h2>Lab Issue Form</h2>
      <input name="labName" placeholder="Lab Name" required />
      <input name="floor" placeholder="Floor" required />
      <input name="computerId" placeholder="Computer ID" required />
      <input name="applicationName" placeholder="Application Name" required />
      <select name="issueType" required>
        <option value="hardware">Hardware</option>
        <option value="software">Software</option>
      </select>
      <textarea name="description" placeholder="Description" required />
      <button type="submit">Submit</button>
    </>
  );
};

export default LabIssueForm;
