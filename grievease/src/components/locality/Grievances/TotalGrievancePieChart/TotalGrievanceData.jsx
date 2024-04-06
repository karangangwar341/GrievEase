import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import './TotalGrievance.css';
import { database } from "../../../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

Chart.register(
  Tooltip, Title, ArcElement, Legend
);

const TotalGrievanceData = () => {
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
    const departmentCounts = {
      'Water-Works': 0,
      'RoadWays': 0,
      'Electricity': 0,
      'Waste': 0,
      'Law-Enforcement': 0,
      'Miscellaneous': 0,
    };

    grievanceData.forEach((grievance) => {
      if (grievance.department in departmentCounts) {
        departmentCounts[grievance.department]++;
      }
    });

    const data = {
      labels: ['Water-Works', 'RoadWays', 'Electricity', 'Waste', 'Law-Enforcement', 'Miscellaneous'],
      datasets: [
        {
          data: Object.values(departmentCounts),
          backgroundColor: ['#00A9FF', '#9E9FA5', '#FFD95A', '#7D7C7C', '#A7D397', '#FF6384'],
          hoverBackgroundColor: ['#00A9FF', '#9E9FA5', '#FFD95A', '#7D7C7C', '#A7D397', '#FF6384'],
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
    <div className="pie-chart">
      <Doughnut data={chartData} />
      <p className='total'>Total Grievances: {totalGrievances}</p>
    </div>
  );
};

export default TotalGrievanceData;