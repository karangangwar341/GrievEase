import "./Card2.css";
import Card2In from "./Card2In.jsx";
import img1 from "../leftAssets/new1.png";
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
      text: "In Process",
      imgurl: img3,
    },
    
    {
      text: "Solved",
      imgurl: img5,
    },
    {
        text: "Graphical View",
        imgurl: img2,
      },
  ];
  return (
    <div className="card2">
      <div className="card2-content">
        <Link to='/government/grievances'><Card2In name={data[1].text} imgurl={data[1].imgurl}></Card2In></Link>
        <Link to='/government/inprocess'><Card2In name={data[2].text} imgurl={data[2].imgurl}></Card2In></Link>
        <Link to='/government/solved'><Card2In name={data[3].text} imgurl={data[3].imgurl}></Card2In></Link>
        <Link to='/government/show'><Card2In name={data[4].text} imgurl={data[4].imgurl}></Card2In></Link>
      </div>
    </div>
  );
};

export default Card2;
