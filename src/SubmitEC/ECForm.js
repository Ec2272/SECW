import React, { useRef } from "react";
import ECsupabase from "./ECsuperbase"; // Import the ECsupabase client
import "./FormStyles.css";

const ECForm = () => {
  // File upload stuff for supporting documentation
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      // Upload files to Supabase Storage
      const file = fileInputRef.current.files[0];
      const { data: fileData, error: fileError } = await ECsupabase.storage
        .from("supporting-evidence")
        .upload(`supporting-evidence/${file.name}`, file, {
          contentType: file.type,
        });

      if (fileError) {
        throw fileError;
      }

      // Insert ticket data into Superbase table
      const { data, error } = await ECsupabase.from("tickets").insert([
        {
          module_code: formData.get("moduleCode"),
          assessment_type: formData.get("assessmentType"),
          description: formData.get("description"),
          supporting_evidence_url: fileData[0].url,
        },
      ]);

      if (error) {
        throw error;
      }

      console.log("Ticket inserted successfully:", data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleDocumentUpload = () => {
    fileInputRef.current.click();
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
            required
          />
        </div>
        <div className="form-group">
          <label>Assessment Type:</label>
          <input
            name="assessmentType"
            type="text"
            placeholder="Assessment Type"
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            placeholder="Description"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Supporting Documentation:</label>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
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
        <button type="submit" className="ECSubmitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ECForm;
