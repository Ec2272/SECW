import React, { useState } from "react";
import "./FormStyles.css";

const IssueForm = () => {
  const [issueType, setIssueType] = useState("service"); // Default to 'service'

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle form submission, perhaps sending the data to a server
    alert("Form submitted. Check the console for data.");
    // For demo purposes, let's log the form data
    console.log(new FormData(e.target));
  };

  return (
    <div className="form-wrapper">
      <button
        onClick={() =>
          setIssueType(issueType === "service" ? "lab" : "service")
        }
      >
        Switch to {issueType === "service" ? "Lab" : "Service"} Issue
      </button>

      <form onSubmit={handleSubmit}>
        {issueType === "lab" ? (
          <>
            <h2>Lab Issue Form</h2>
            <input name="labName" placeholder="Lab Name" required />
            <input name="floor" placeholder="Floor" required />
            <input name="computerId" placeholder="Computer ID" required />
            <input
              name="applicationName"
              placeholder="Application Name"
              required
            />
            <select name="issueType" required>
              <option value="hardware">Hardware</option>
              <option value="software">Software</option>
            </select>
            <textarea name="description" placeholder="Description" required />
          </>
        ) : (
          <>
            <h2>Service Issue Form</h2>
            <input name="serviceName" placeholder="Service Name" required />
            <input name="serviceId" placeholder="Service ID" required />
            <textarea name="description" placeholder="Description" required />
          </>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IssueForm;
