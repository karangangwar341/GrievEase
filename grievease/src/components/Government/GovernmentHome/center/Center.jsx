/*import "./Center.css";
import {useLocation} from "react-router-dom";
import {TotalGrievance} from "../../Grievances/TotalGrievancePieChart/TotalGrievances.jsx"
const Center = () => {
  const location = useLocation();
  const renderContent = () => {
    if (location.pathname === "/home") {
      return (
        <>
        <TotalGrievance />
        </>
      );
    }
  };

  return (
    <div>
      {renderContent()}
    </div>    
  );
};

export default Center;*/
//import GovernmentChart from "../../GovernmentGrievances/GovernmentChart/GovernmentChart";
import TotalGrievance from "../../GovernmentGrievances/TotalGrievancePieChart/TotalGrievances";
import "./Center.css";
import { useLocation } from "react-router-dom";

const Center = () => {
  const location = useLocation();

  const renderContent = () => {
    if (location.pathname === "/government") {
      return (
        <>
          <TotalGrievance></TotalGrievance>
        </>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default Center;
