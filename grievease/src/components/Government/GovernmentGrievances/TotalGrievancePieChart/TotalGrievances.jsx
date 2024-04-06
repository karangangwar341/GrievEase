import React from "react";
import TotalGrievanceData from "./TotalGrievanceData";
import './TotalGrievance.css';
function TotalGrievance() {
  return (
    <div className="PieChartTotal">
    <div className="chartTotalContainer">
      <header className="TotalHeading">
        <h1 className="TotalHeadingIn">Total Grievances</h1>
      </header>
      <TotalGrievanceData></TotalGrievanceData>
    </div>
    <div className="contentContainer">
        <p className="welcome-info">
          <strong>Welcome to GrievEase!</strong><br />Introducing our Grievance Portal: A unified platform where individuals can report their concerns and engage with a supportive community to collectively address issues, fostering a sense of empowerment and resolution.
        </p>
      </div>
    </div>
  );
}

export default TotalGrievance;
