import  {useState, useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart,Tooltip,Title,ArcElement,Legend} from "chart.js"
import './GovernmentChartData.css';
import { database } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
Chart.register(
    Tooltip,Title,ArcElement,Legend
)
const GovernmentChartData = () => {
  const [grievanceData, setGrievanceData] = useState([]);

  const fetchGrievanceData = async () => {
    const userCollections = collection(database, "grievances");
    const data = await getDocs(userCollections);
    const fil = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setGrievanceData(fil);
  };

  useEffect(() => {
    fetchGrievanceData();
  }, []);

  useEffect(() => {
    const statusCounts = {
      'pending': 0,
      'In process': 0,
      'solved': 0,
    };

    grievanceData.forEach((grievance) => {
      if (grievance.status in statusCounts) {
        statusCounts[grievance.status]++;
      }
    });

    const data = {
      labels: ['pending', 'In process', 'solved'],
      datasets: [
        {
          data: Object.values(statusCounts),
          backgroundColor: ['#00A9FF', '#9E9FA5', '#FFD95A'],
          hoverBackgroundColor: ['#00A9FF', '#9E9FA5', '#FFD95A'],
        },
      ],
    };

    setChartData(data);
    setTotalGrievances(grievanceData.length);
  }, [grievanceData]);

  const [chartData, setChartData] = useState(null);
  const [totalGrievances, setTotalGrievances] = useState(0);

  if (!chartData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Governmentchart">
      <Doughnut data={chartData} />
      <p className='total'>Total Grievances: {totalGrievances}</p>
    </div>
  );
};

export default GovernmentChartData;
