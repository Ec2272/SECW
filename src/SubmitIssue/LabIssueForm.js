import React from 'react';
import supabase from '../Config/supabaseClient';
import "./FormStyleIssues.css";

const LabIssueForm = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const UserID = sessionStorage.getItem('userId'); //grab Userid, Change 1

    const formData = {
      "Module Code": event.target.labName.value,
      "Floor": event.target.floor.value,
      "Computer ID": event.target.computerId.value,
      "Application Name": event.target.applicationName.value,
      "Computer Architecture": event.target.issueType.value,
      "Description": event.target.description.value,
      "UserID_L": UserID, //change 2
    };

    const { error } = await supabase
      .from('Lab_Issue')
      .insert([formData]);

    if (error) {
      alert('Could not submit the issue: ' + error.message);
    } else {
      alert('Issue submitted successfully!');
      
    }
  };

  return (
    <div className="issue-form-container">
      <form onSubmit={handleFormSubmit}>
        <h2>Lab Issue Form</h2>
        <div className="form-group">
          <label>Lab Name</label>
          <input name="labName" placeholder="Lab Name" required />
        </div>
        <div className="form-group">
          <label>Floor Number</label>
          <input name="floor" placeholder="Floor Number" required />
        </div>
        <div className="form-group">
          <label>Computer ID</label>
          <input name="computerId" placeholder="Computer ID" required />
        </div>
        <div className="form-group">
          <label>Application Name</label>
          <input name="applicationName" placeholder="Application Name" required />
        </div>
        <div className="form-group">
          <label>Issue Type</label>
          <select name="issueType" required>
            <option value="">Select Issue Type</option>
            <option value="hardware">Hardware</option>
            <option value="software">Software</option>
          </select>
        </div>
        <div className="form-group">
          <label>Describe Your Issue</label>
          <textarea name="description" placeholder="Describe the issue" required />
        </div>
        <button type="submit" className='IssueSubmitButton'>Submit</button>
      </form>
    </div>
  );
};

export default LabIssueForm;
