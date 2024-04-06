import "./Center.css";
import {useLocation} from "react-router-dom";
const Center = () => {
  const location = useLocation();

  
  const renderContent = () => {
    if (location.pathname === "/home") {
      return (
        <>
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

export default Center;