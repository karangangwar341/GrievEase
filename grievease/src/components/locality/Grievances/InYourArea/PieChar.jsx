import React from "react";
import PieChartData from "./PieChartData";
import "./PieChartData.css";
function PieChart() {
  return (
    <div className="PieChartLocality">
      <div className="chartContainer">
      <header className="LocalityHeading">
        <h1 className="LocatlityHeadingIn">In Your Locality</h1>
      </header>
      <PieChartData />
      </div>

      <div className="contentContainer">
        <p className="welcome-info">
          Checkout the grievances reported in your locality. You can now register your grievance by submitting the Grievance form.
        </p>
      </div>
    </div>
  );
}

export default PieChart;
