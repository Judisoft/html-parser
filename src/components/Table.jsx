import React from "react";
import "../styles/Table.css";

const Table = ({scrappedPageData}) => {
  return (
    <div className="container">
    <table className="responsive-table">
        <thead>
        <tr>
            <th scope="col">HTML Version</th>
            <th scope="col">Page Title</th>
            <th scope="col">Headings</th>
            <th scope="col">Hyperlinks</th>
            <th scope="col">Login Form</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">{scrappedPageData.htmlVersion}</th>
                <td data-title="Page Title">{scrappedPageData.pageTitle}</td>
                <td data-title="Headings">
                    {Object.entries(scrappedPageData.headingsCount).map(([key, value]) => (
                        <p key={key}>
                            {`${key}: ${value}`} &nbsp;
                        </p>
                    ))}
                </td>
                <td data-title="Hyperlinks">
                <p>Internal Links: {scrappedPageData.linksCount.internal} </p>
                <p>External Links: {scrappedPageData.linksCount.external}</p>
                </td>
                <td data-title="Login Form">{scrappedPageData.hasLoginForm ? "Yes" : "No"}</td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default Table