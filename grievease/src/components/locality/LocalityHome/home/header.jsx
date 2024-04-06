import React, { useState, useEffect } from 'react';
import { auth, database } from '../../../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import logoImage from './Mask group.png';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from './header.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom';
import DiamondIcon from '@mui/icons-material/Diamond';
const Nav = () => {
  const [credit, setCredit] = useState(10);

  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({
    Name: '',
    Email: '',
    phoneNumber: '',
    city: '',
    locality: '',
  });
  const [formData, setFormData] = useState({
    Name: '',
    phoneNumber: '',
    city: '',
    locality: '',
  });


  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const user = await fetchUserDataFromFirestore();
        setUserData(user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const user = auth.currentUser;
    if (user) {
      fetchUserDetails();
    }
  }, []);

  const fetchUserDataFromFirestore = async () => {
    try {
      const user = auth.currentUser;
  
      if (user) {
        const userDataCollection = 'users';
        const userCollection = collection(database, userDataCollection);
        
        const q = query(userCollection, where('UID', '==', user.uid));
  
        // Fetch the data using the query
        const querySnapshot = await getDocs(q);
  
        if (querySnapshot.size > 0) {
          const doc = querySnapshot.docs[0];
          const userData = doc.data();
          return userData; // Return the user's data as a map
        } else {
          throw new Error('User document not found in Firestore.');
        }
      } else {
        throw new Error('User is not authenticated.');
      }
    } catch (error) {
      console.error('Error fetching user data from Firestore:', error);
      throw error;
    }
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.Name===''){
      formData.Name = userData.Name;
    }
    if(formData.phoneNumber===''){
      formData.phoneNumber = userData.phoneNumber;
    }
    if(formData.city===''){
      formData.city = userData.city;
    }
    if(formData.locality===''){
      formData.locality = userData.locality;
    }
    console.log(formData);
    try{
    const userDataCollection = 'users';
    const userCollection = collection(database, userDataCollection);
    const user = auth.currentUser;
    const q = query(userCollection, where('UID', '==', user.uid));
    const querySnapshot = await getDocs(q);
    const docRef = querySnapshot.docs[0].ref;
    await updateDoc(docRef, formData);
    }
    catch{
      console.error('error');
    }
    setOpen(false);
    window.location.reload();
  };

  const handleButtonClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logocontainer}>
        <img src={logoImage} alt="App Logo" className={styles.logo} />
        <h1 className={styles.appName}>GrievEase</h1>
      </div>

      <div className={styles.iconsContainer}>
        <Link to="/home"><button className={styles.iconButton}><HomeIcon /></button></Link>
        <button className={styles.iconButton}><GroupsIcon /></button>
        {/* <button className={styles.iconButton}><GroupsIcon /></button> */}
      </div>

      <div className={styles.searchContainer}>
        <input type="text" placeholder="Type here to Search..." className={`${styles.searchInput} ${styles.navSearch}`} />
        <button className={styles.searchButton}><SearchIcon /></button>
      </div>

      <div className={styles.iconsContainer}>
        <button className={styles.iconButton}><DiamondIcon /></button>
        <span className={styles.credit}>{credit}</span>
        <button className={styles.iconButton} onClick={handleLogout} ><LogoutIcon /></button>
        {/* <button className={styles.iconButton}><NotificationsIcon /></button> */}
        <button className={styles.iconButton}><ProfileIcon /></button>
        <span className={styles.profileName}>{userData.Name}</span>
        <div className={styles.profileCard}>
          <button className={styles.iconButton} onClick={handleButtonClick}><ArrowDropDownIcon /></button>
          {open && (
            <div className={styles.dropdown}>
              <div className={styles.updateProfile}>
                <h2>Update Profile</h2>
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="Name">Name:</label>
                    <input
                      type="text"
                      id="Name"
                      name="Name"
                      placeholder={userData.Name}
                      value={formData.Name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      placeholder={userData.phoneNumber}
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="locality">locality:</label>
                    <input
                      placeholder={userData.locality}
                      type="text"
                      id="locality"
                      name="locality"
                      value={formData.locality}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="city">city:</label>
                    <input
                      placeholder={userData.city}
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type="submit" className={styles.updateButton}>
                    Update Details
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;