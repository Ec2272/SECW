import React from "react";
import "./App.css";
import IssueForm from "./IssueForm"; // Import the IssueForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IssueForm /> {/* Use the IssueForm component */}
      </header>
    </div>
  );
}

export default App;

