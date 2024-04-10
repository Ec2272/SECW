import React from 'react';
import "./FormStyleIssues.css";
import supabase from '../Config/supabaseClient';

const ServiceIssueForm = () => {
  // Define a list of service names
  const serviceNames = ["QMPlus", "MySis", "Q-Review", "Outlook", "QM GitHub", "JupyterHub", "Other"]; // Update this list as needed

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      "Service Name": event.target.serviceName.value,
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
          <select name="serviceName" required>
            {serviceNames.map(name => (
              <option value={name} key={name}>{name}</option>
            ))}
          </select>
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