import React, { useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./FormStyles.css";

const supabaseUrl = 'https://brhksoramgdcntvzzfkh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyaGtzb3JhbWdkY250dnp6ZmtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MzE5NTgsImV4cCI6MjAyNjEwNzk1OH0.dJBSMd_t4dSmGq-OUQJsw3wngOAIhVaAEh9D_3GFSvE';

const supabase = createClient(supabaseUrl, supabaseKey);

const IssueForm = () => {
  const [moduleCode, setModuleCode] = useState("");
  const [assessmentType, setAssessmentType] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null); // Store the file object instead of file URL

  const fileInputRef = useRef(null);

  const handleDocumentUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("EC_Ticket")
        .insert([
          {
            "Module Code": moduleCode,
            "Assessment Type": assessmentType,
            "Description": description,
            "Supporting Evidence": file,
          }
        ]);
      if (error) throw error;
      alert("Form submitted successfully!");
      // Clear form fields after successful submission
      setModuleCode("");
      setAssessmentType("");
      setDescription("");
      setFile(null);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Extenuating Circumstances Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Module Code:</label>
          <input
            name="moduleCode"
            type="text"
            placeholder="Module Code"
            value={moduleCode}
            onChange={(e) => setModuleCode(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Assessment Type:</label>
          <input
            name="assessmentType"
            type="text"
            placeholder="Assessment Type"
            value={assessmentType}
            onChange={(e) => setAssessmentType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Supporting Documentation:</label>
          <input
            type="file"
            name="supportingEvidence"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            required
          />
          <button
            type="button"
            className="upload-button"
            onClick={handleDocumentUpload}
          >
            Upload File(s)
          </button>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default IssueForm;

