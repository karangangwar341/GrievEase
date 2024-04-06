import water from '../leftAssets/water.png';
import elec from '../leftAssets/elecic.png';
import road from '../leftAssets/road.png';
import law from '../leftAssets/law.png';
import jury from '../leftAssets/jury.png';
import mis from '../leftAssets/mis.png';
import Card1In from './Card1In';
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
      {infodata.map((dataItem) => (
        <Card1In key={dataItem.text} {...dataItem} />
      ))}
      </div>
    </div>
    
  );
};

export default Card1;
