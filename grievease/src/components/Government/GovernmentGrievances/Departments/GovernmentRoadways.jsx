import ProfileCard from "../../../locality/Grievances/ProfileCard";
import { database } from "../../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import  { useEffect, useState } from "react";

const GovernmentRoad = () => {
  const [grievanceData, setGrievanceData] = useState([]);

  const fetchGrievanceData = async () => {
    const userCollections = collection(database, "grievances");
    const q =query(userCollections,where('status', 'in', ['pending', 'InProcess']), where('department','==','RoadWays'));;
    const data = await getDocs(q);
    const fil = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setGrievanceData(fil);
  };

  useEffect(() => {
    fetchGrievanceData();
  }, []);
  return (
    <div>
      <div className="card-headerG text-3xl font-bold text-orange-900 mb-4 items-center justify-center' text-center">Grievances Pending at Roadways DepartMent</div>
           <div className="overflow-y-scroll " style={{ overflowY: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}> 
      {grievanceData.map((post, index) => (
        <ProfileCard key={index} post={post} />
      ))}
    </div>
    </div>
  );
};

export default GovernmentRoad;
