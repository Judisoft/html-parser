import React, { useState } from "react";
import "./App.css";
import logo from "./images/logo.png";

function App() {
  const [url, setUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true); // Initially assume URL is valid

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate URL before submission
    if (isValidHttpUrl(url)) {
      setIsValidUrl(true);
      alert("Valid URL: " + url);
      // Handle form submission or other actions here
    } else {
      setIsValidUrl(false);
    }
  };

  // Function to validate HTTP(S) URL
  const isValidHttpUrl = (url) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );
    return urlPattern.test(url);
  };

  return (
    <div className="app">
      <div className="app-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>URL Parser</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter http(s) URL e.g http(s)://github.com"
          />
          {!isValidUrl && (
            <p className="error-message">Please enter a valid HTTP(S) URL.</p>
          )}
          <div>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
