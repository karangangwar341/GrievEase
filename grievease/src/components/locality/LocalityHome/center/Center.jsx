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
import "./Center.css";
import { useLocation } from "react-router-dom";
import TotalGrievance from "../../Grievances/TotalGrievancePieChart/TotalGrievances.jsx"; // Correct import path

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

  return <div>{renderContent()}</div>;
};

export default Center;
