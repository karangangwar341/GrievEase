import "./Lower.css";
import LowerIn from "./LowerIn";
import Rules from "./right_bottom/rules.jpg";
import Process from "./right_bottom/flow.jpg";
import About from "./right_bottom/abt.jpg";

const Lower = () => {
  const submitHandle = () => {
    console.log("hii");
  };

  const infodata = [
    {
      text: "Rules regarding Grievances",
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
        <LowerIn name={infodata[0].text} imgurl={infodata[0].imgurl}></LowerIn>

        <LowerIn name={infodata[1].text} imgurl={infodata[1].imgurl}></LowerIn>

        <LowerIn name={infodata[2].text} imgurl={infodata[2].imgurl}></LowerIn>
      </div>
    </div>
  );
};

export default Lower;
