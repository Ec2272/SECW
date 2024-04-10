import React from 'react';
import "./FormStyleIssues.css";
import supabase from '../Config/supabaseClient';

const ServiceIssueForm = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      "Service Name": event.target.serviceName.value,
      "Service ID": event.target.serviceId.value,
      "Description": event.target.description.value
    };

    const { error } = await supabase
      .from('Service_Issue')
      .insert([formData]);

    if (error) {
      alert('Could not submit the issue: ' + error.message);
    } else {
      alert('Issue submitted successfully!');
    }
  };

  return (
    <>
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
          <textarea name="description" placeholder="Description" required />
        </div>
  
          <button type="submit" className='IssueSubmitButton'>Submit</button>
      </form>
    </>
  );
};

export default ServiceIssueForm;
