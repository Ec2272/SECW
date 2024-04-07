import React from 'react';
import "./FormStyleIssues.css";

const ServiceIssueForm = ({ handleSubmit }) => {
  return (
    <>
      <form>
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
