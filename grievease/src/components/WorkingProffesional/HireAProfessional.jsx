import React, { useEffect, useState } from 'react';
import ProfessionalCardHire from './ProfessionalCardHire';
import { database } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const HireAProfessional = () => {
  const [professionalData, setProfessionalData] = useState([]);

  const fetchProfessionalData = async () => {
    const userCollections = collection(database, 'WorkingProfessional');
    const data = await getDocs(userCollections);
    const fil = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProfessionalData(fil);
  };

  useEffect(() => {
    fetchProfessionalData();
  }, []);

  return (
    <div className='flex flex-wrap'>
      {professionalData.map((props) => (
        <ProfessionalCardHire key={props.id} {...props} />
      ))}
    </div>
  );
};

export default HireAProfessional;
