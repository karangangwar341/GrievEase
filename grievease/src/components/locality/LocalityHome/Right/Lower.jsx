import "./Lower.css";
import LowerIn from "./LowerIn";
import Rules from "./right_bottom/rules.jpg";
import Process from "./right_bottom/flow.jpg";
import About from "./right_bottom/abt.jpg";
import { Link } from "react-router-dom";
const Lower = () => {
  

  const infodata = [
    {
      text: "Guidelines",
      imgurl: Rules,
    },
    {
      text: "Process Flow",
      imgurl: Process,
    },
    {
      text: "About Us",
      imgurl: About,
    },
  ];
  return (
    <div className="info">
      <div>
        {/* <button onClick={submitHandle} className="btn2">
          Informatics &rarr;
        </button> */}
        <Link to='/home/rules'><LowerIn name={infodata[0].text} imgurl={infodata[0].imgurl}></LowerIn></Link>
        <Link to='/home/process'><LowerIn name={infodata[1].text} imgurl={infodata[1].imgurl}></LowerIn></Link>
        <Link to='/home/about'><LowerIn name={infodata[2].text} imgurl={infodata[2].imgurl}></LowerIn></Link>

      </div>
    </div>
  );
};

export default Lower;
