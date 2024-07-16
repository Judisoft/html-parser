import React from "react";
import "../styles/Table.css";

const PageData = ({scrappedPageData}) => {

  return (
    <div className="container">
    <table className="responsive-table">
        <thead>
        <tr>
            <th scope="col">URL</th>
            <th scope="col">Reachable</th>
            <th scope="col">Error</th>
        </tr>
        </thead>
        <tbody>
            {scrappedPageData.map((data, index) => (
                <tr key={index}>
                    <td data-title="URL">{data.url}</td>
                    <td data-title="Reachable">{data.reachable ? "Yes" : "No"}</td>
                    <td data-title="Error">{data.error || '-'}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default PageData