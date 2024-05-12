import React, { useState } from "react";

// Create ReviewForm function
function ReviewForm() {
  const [text, setText] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevents page from reloading
    setSubmittedInput(text); //sets submittedInput to the value of text
    setText(""); //sets text back to empty string
  };

  // Render the form
  return (
    <div>
      <input type="text" name="name" value={text} onChange={handleChange} />{" "}
      <button onClick={handleSubmit}>Submit</button>
      <p style={{ marginTop: 20 }}>Leave a Review {text}</p>
      <p>Your Review: {submittedInput}</p>
    </div>
  );
}

// Export the ReviewForm component
export default ReviewForm;
