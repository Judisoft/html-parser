import React, { useState } from "react";
import "./App.css";
import logo from "./images/logo.png";

function App() {
  const [url, setUrl] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(url);
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
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
