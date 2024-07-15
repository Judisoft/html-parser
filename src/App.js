import React, { useState } from "react";
import "./styles/App.css";
import logo from "./images/logo.png";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [url, setUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true); // Initially assume URL is valid
  const [scrappedPageData, setScrappedPageData] = useState(null);
  const [loading, setLoading] = useState(false);

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
    return urlPattern.test(url);
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
      console.error(error);
    } finally {
      setLoading(false);
    }
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
              {loading ? "Fetching data..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      {scrappedPageData && Object.keys(scrappedPageData).length > 0 ? (
        <>
          <h1>Data for {url}</h1>
          <Table scrappedPageData={scrappedPageData.data} />
        </>
      ) : null}
    </div>
  );
}

export default App;
