import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sample from "./components/locality/into/Sample";
import Main from "./components/locality/LocalityHome/main.jsx";
import LandingPage from "./components/locality/Land/LandingPage.jsx";
import Water from "./components/locality/Grievances/Departments/Water.jsx";
import Miscellaneous from "./components/locality/Grievances/Departments/Miscellaneous.jsx";
import Electricity from "./components/locality/Grievances/Departments/Electricity.jsx";
import Roadways from "./components/locality/Grievances/Departments/Roadways.jsx";
import Law from "./components/locality/Grievances/Departments/LawEnforcement.jsx";
import Waste from "./components/locality/Grievances/Departments/Waste.jsx";
import YourGrievances from "./components/locality/Grievances/YourGrievances.jsx";
import CardComponent from "./components/locality/GrievanceForm/FormCard.jsx";
import Grievances from "./components/locality/Grievances/Grievances.jsx";
import Process from "./components/locality/process/process.jsx";
import Rules from "./components/locality/Rules/rules.jsx";
import About from "./components/locality/about/about.jsx";
import PieChart from "./components/locality/Grievances/InYourArea/PieChar.jsx";
import GovernmentMain from "./components/Government/GovernmentHome/main.jsx";
import GovernmentGrievances from "./components/Government/GovernmentGrievances/Grievances.jsx";
import InProcess from "./components/Government/GovernmentGrievances/InProcess.jsx";
import GovernmentSolved from "./components/Government/GovernmentGrievances/Solved.jsx";
import GovernmentElectricity from "./components/Government/GovernmentGrievances/Departments/GovernmentElectricity.jsx";
import GovernmentWater from "./components/Government/GovernmentGrievances/Departments/GovernmentWater.jsx";
import GovernmentRoad from "./components/Government/GovernmentGrievances/Departments/GovernmentRoadways.jsx";
import GovernmentLaw from "./components/Government/GovernmentGrievances/Departments/GovernmentLaw.jsx";
import GovernmentMis from "./components/Government/GovernmentGrievances/Departments/GovernmentMis.jsx";
import GovernmentWaste from "./components/Government/GovernmentGrievances/Departments/GovernmentWaste.jsx";
import ProfessionalCard from "./components/WorkingProffesional/BeAProffessional.jsx";
import ProfessionalCardHire from "./components/WorkingProffesional/ProfessionalCardHire.jsx";
import HireAProfessional from "./components/WorkingProffesional/HireAProfessional.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/next" element={<Sample />} />
        <Route exact path="/home" element={<Main />}>
          <Route exact path="/home/Water" element={<Water />} />
          <Route exact path="/home/mis" element={<Miscellaneous/>} />
          <Route exact path="/home/elec" element={<Electricity/>} />
          <Route exact path="/home/road" element={<Roadways/>} />
          <Route exact path="/home/law" element={<Law/>} />
          <Route exact path="/home/waste" element={<Waste/>} />
          <Route exact path="/home/grievances" element={<Grievances/>} />
          <Route exact path="/home/new" element={<CardComponent/>} />
          <Route exact path="/home/yourGrievances" element={<YourGrievances/>} />
          <Route exact path="/home/area" element={<PieChart/>} />
          <Route exact path="/home/solved" element={<Waste/>} />
          <Route exact path="/home/process" element={<Process/>} />
          <Route exact path="/home/rules" element={<Rules/>} />
          <Route exact path="/home/about" element={<About/>} />
          <Route exact path="/home/regester" element={<ProfessionalCard/>} />
          <Route exact path="/home/hire" element={<HireAProfessional/>} />
        </Route>
        <Route exact path="/government" element={<GovernmentMain/>}>
          <Route exact path="/government/grievances" element={<GovernmentGrievances/>}/>
          <Route exact path="/government/inprocess" element={<InProcess/>}/>
          <Route exact path="/government/Solved" element={<GovernmentSolved/>}/>
          <Route exact path="/government/elec" element={<GovernmentElectricity/>}/>
          <Route exact path="/government/water" element={<GovernmentWater/>}/>
          <Route exact path="/government/road" element={<GovernmentRoad/>}/>
          <Route exact path="/government/law" element={<GovernmentLaw/>}/>
          <Route exact path="/government/mis" element={<GovernmentMis/>}/>
          <Route exact path="/government/waste" element={<GovernmentWaste/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
