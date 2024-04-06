import water from '../leftAssets/water.png';
import elec from '../leftAssets/elecic.png';
import road from '../leftAssets/road.png';
import law from '../leftAssets/law.png';
import jury from '../leftAssets/jury.png';
import mis from '../leftAssets/mis.png';
import Card1In from './Card1In';
import { Link } from "react-router-dom";
import './Card1.css'
const Card1 = () => {
  const infodata = [
    {
      text: "Water",
      imgurl: water,
    },
    {
      text: "Electricity",
      imgurl: elec,
    },
    {
      text: "Roadways",
      imgurl: road,
    },
    {
      text: "Law Enforcement",
      imgurl: law,
    },
    {
      text: "Waste",
      imgurl: jury,
    },
    {
      text: "Miscellaneous",
      imgurl: mis,
    },
  ];

  return (
    <div className="card">
      <div className="card-header">Departments</div>
      <div className="card-content">
      {/* {infodata.map((dataItem) => (
        <Card1In key={dataItem.text} {...dataItem} />
      ))} */}
      <Link to='/home/water'><Card1In text={infodata[0].text} imgurl={infodata[0].imgurl}/></Link>
      <Link to='/home/elec'><Card1In text={infodata[1].text} imgurl={infodata[1].imgurl}/></Link>
      <Link to='/home/road'><Card1In text={infodata[2].text} imgurl={infodata[2].imgurl}/></Link>
      <Link to='/home/law'><Card1In text={infodata[3].text} imgurl={infodata[3].imgurl}/></Link>
      <Link to='/home/waste'><Card1In text={infodata[4].text} imgurl={infodata[4].imgurl}/></Link>
      <Link to='/home/mis'><Card1In text={infodata[5].text} imgurl={infodata[5].imgurl}/></Link>
      
      </div>
    </div>
    
  );
};

export default Card1;
