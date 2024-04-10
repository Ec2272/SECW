import React from 'react';
import supabase from '../Config/supabaseClient'; // Make sure the path to supabaseClient is correct
import "./FormStyleIssues.css";

const ServiceIssueForm = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      "Service ID": event.target.serviceId.value,
      "Service Name": event.target.serviceName.value, 
      "Description": event.target.description.value,
      
      "AssignStatus": null,
      "FacultyID": null,
      "Status": null,
      "UserId_S": null,
    };

    
    const { error } = await supabase
      .from('Service_Issue') 
      .insert([formData]);

    if (error) {
      alert('Could not submit the service issue: ' + error.message);
    } else {
      alert('Service issue submitted successfully!');
     
    }
  };

  return (
    <div className="issue-form-container">
      <form onSubmit={handleFormSubmit}>
        <h2>Service Issue Form</h2>
        <div className='form-group'>
          <label>Service Name</label>
          <input name="serviceName" placeholder="Service Name" required />
        </div>
        <div className='form-group'>
          <label>Service ID</label>
          <input name="serviceId" placeholder="Service ID" required />
        </div>
        <div className='form-group'>
          <label>Description</label>
          <textarea name="description" placeholder="Description" required />
        </div>
        <button type="submit" className='IssueSubmitButton'>Submit</button>
      </form>
    </div>
  );
};

export default ServiceIssueForm;