import React, { useRef } from "react";
import "./FormStyles.css";

const IssueForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted. Check the console for data.");
    console.log(new FormData(e.target));
  };
  
  //file upload stuff for supporting documentation
  const fileInputRef = useRef(null);

  const handleDocumentUpload = () => {
    fileInputRef.current.click();
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
        <div className="form-group">
          <label>Supporting Documentation:</label>
          <input type="file" ref={fileInputRef} style={{display: "none"}} />
          <button type="button" className="upload-button" onClick={handleDocumentUpload}>Upload File(s)</button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IssueForm;
