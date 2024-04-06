import GovernmentChartData from "./GovernmentChartData";
import "./GovernmentChartData.css";
function GovernmentChart() {
  return (
    <div className="GovernmentChartLocality">
      <header className="GovernmentChartHeading">
        <h1 className="GovernmentChartHeadingIn">Registered Grievances</h1>
      </header>
      <GovernmentChartData />
    </div>
  );
}

export default GovernmentChart;
