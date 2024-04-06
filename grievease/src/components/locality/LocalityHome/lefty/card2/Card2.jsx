import "./Card2.css";
import Card2In from "./Card2In.jsx";
import img1 from "../leftAssets/new1.png";
import img4 from "../leftAssets/inyourarea.jpg";
import img5 from "../leftAssets/solved.jpg";
import img2 from "../leftAssets/Reported.png";
import img3 from "../leftAssets/Your.png";
import { Link } from "react-router-dom";
const Card2 = () => {
  const data = [
    {
      text: "Register New",
      imgurl: img1,
    },
    {
      text: "Grievance Reported",
      imgurl: img2,
    },
    {
      text: "Your Grievance",
      imgurl: img3,
    },
    {
      text: "In your Area",
      imgurl: img4,
    },
    {
      text: "Solved",
      imgurl: img5,
    },
  ];
  return (
    <div className="card2">
      <div className="card2-content">
        <Link to='/home/grievances'><Card2In name={data[1].text} imgurl={data[1].imgurl}></Card2In></Link>
        <Link to='/home/new'><Card2In name={data[0].text} imgurl={data[0].imgurl}></Card2In></Link>
        <Link to='/home/yourGrievances'><Card2In name={data[2].text} imgurl={data[2].imgurl}></Card2In></Link>
        <Link to='/home/area'><Card2In name={data[3].text} imgurl={data[3].imgurl}></Card2In></Link>
        <Link to='/home/solved'><Card2In name={data[4].text} imgurl={data[4].imgurl}></Card2In></Link>
      </div>
    </div>
  );
};

export default Card2;
