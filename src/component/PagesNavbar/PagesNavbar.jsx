import React from "react";

export default function PagesNavbar({ logoImage }) {
  return (
    <div className="page-navbar">
      {logoImage}
      <span className="page-navbar-title">
        <h1>Dhyeya</h1>
        <h1>Educational</h1>
        <h1>Foundation</h1>
      </span>
    </div>
  );
}
