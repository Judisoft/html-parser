import React, { useState } from "react";
import "./styles/App.css";
import logo from "./images/logo.png";
import axios from "axios";
import PageData from "./components/PageData";
import LinksValidationResult from "./components/LinksValidationResult";

const  App = () => {
  const [url, setUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true); // Initially assume URL is valid
  const [scrappedPageData, setScrappedPageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate URL before submission
    if (isValidHttpUrl(url)) {
      fetchUrlData();
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
  
    // Enforce http or https at the beginning
    return urlPattern.test(url) && (url.startsWith("http://") || url.startsWith("https://"));
  };
  

  // Send a GET request to the server
  const fetchUrlData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/v1/parse-html-page", {
        params: {
          url: url,
        },
      });
      setScrappedPageData(response.data);
      console.log(response.data)
      setIsValidUrl(true);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="app-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>URL Parser</h1>
        {error && (
            <p className="error-message">{error}</p>
          )}
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter http(s) URL e.g http(s)://github.com"
          />
          {!isValidUrl && (
            <p className="error-message">Please enter a valid URL beginning with http(s)://domain-name.com</p>
          )}
          <div>
            <button className="submit-button" type="submit">
              {loading ? "Fetching data..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      {scrappedPageData && Object.keys(scrappedPageData).length > 0 ? (
        <div className="result">
          <h1>Data for {url}</h1>
          <PageData scrappedPageData={scrappedPageData.data} />
          <h1>Links Validation Results</h1>
          <LinksValidationResult scrappedPageData={scrappedPageData.data.linkValidationResults} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
