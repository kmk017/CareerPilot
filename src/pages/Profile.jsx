import { useState, useEffect } from "react";
import './Profile.css';

function Profile() {

  const [profileData, setProfileData] = useState({

    totalResumes: 0,

    highestScore: 0,

    averageScore: 0

  });

  async function loadProfile() {
  
      try {
  
          const response = await fetch(
  
              "http://127.0.0.1:5000/api/profile"
  
          );
  
          const data = await response.json();
  
          setProfileData(data);
  
      }
  
      catch (error) {
  
          console.error(error);
  
      }
  
  }

  useEffect(() => {

    loadProfile();

  }, []);

    return (
      <div className="profile-page">
        <h1>Profile Dashboard</h1>
    
        <div className="profile-grid">
          <div className="profile-card">
            <h2>Basic Information</h2>
            <p><strong>Name:</strong> -</p>
            <p><strong>Email:</strong> -</p>
            <p><strong>Interested Role:</strong> -</p>
          </div>
    
          <div className="stats-card">
            <h2>Resume Statistics</h2>
            <p><strong>Total Resume Analyses:</strong> {profileData.totalResumes}</p>
            <p><strong>Highest ATS Score:</strong> {profileData.highestScore}</p>
            <p><strong>Average ATS Score:</strong> {profileData.averageScore.toFixed(2)}</p>
          </div>
        </div>
      </div>
    );

}

export default Profile;