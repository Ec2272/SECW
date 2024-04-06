import React from 'react';
import "./FormStyles.css";

const ServiceIssueForm = ({ handleSubmit }) => {
  return (
    <>
      <h2>Service Issue Form</h2>
      <input name="serviceName" placeholder="Service Name" required />
      <input name="serviceId" placeholder="Service ID" required />
      <textarea name="description" placeholder="Description" required />
      <button type="submit">Submit</button>
    </>
  );
};

export default ServiceIssueForm;
