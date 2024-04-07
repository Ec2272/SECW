import React from 'react';
import "./FormStyleIssues.css";

const LabIssueForm = ({ handleSubmit }) => {
  return (
    <>
      <form>
        <h2>Lab Issue Form</h2>
        <div className="form-group">
          <label>Lab Name</label>
          <input name="labName" placeholder="Lab Name" required />
        </div>
        <div className ="form-group">
          <label>Floor Number</label>
          <input name="floor" placeholder="Floor" required />
        </div>
        <div className ="form-group">
          <label>Computer ID</label>
          <input name="computerId" placeholder="Computer ID" required />
        </div>
        <div className ="form-group">
          <label>Application Name</label>
          <input name="applicationName" placeholder="Application Name" required />
        </div>
        <div className ="form-group">
          <label>Issue Type</label>
          <select name="issueType" required>
            <option value="hardware">Hardware</option>
            <option value="software">Software</option>
          </select>
        </div>
        <div className ="form-group">
          <label>Describe Your Issue</label>
          <textarea name="description" placeholder="Description" required />
        </div>
          <button type="submit" className='IssueSubmitButton'>Submit</button>
      </form>
    </>
  );
};

export default LabIssueForm;
