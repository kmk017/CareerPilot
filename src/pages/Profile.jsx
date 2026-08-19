import { useState, useEffect } from "react";
import "./Profile.css";
import { API_BASE } from "../config";

function Profile() {

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [profileData, setProfileData] = useState({
    totalResumes: 0,
    highestScore: 0,
    averageScore: 0
  });

  async function loadProfile() {

    try {

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_BASE}/api/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error("Failed to load profile");
      }

      const data = await response.json();

      setProfileData({
        totalResumes: data.totalResumes ?? 0,
        highestScore: data.highestScore ?? 0,
        averageScore: data.averageScore ?? 0
      });

    } catch (error) {

      console.error("Profile error:", error);

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

          <p>
            <strong>Name:</strong>{" "}
            {user.name || "-"}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user.email || "-"}
          </p>

          <p>
            <strong>Interested Role:</strong>{" "}
            {user.interestedRole || "Not specified"}
          </p>

        </div>

        <div className="stats-card">

          <h2>Resume Statistics</h2>

          <p>
            <strong>Total Resume Analyses:</strong>{" "}
            {profileData.totalResumes}
          </p>

          <p>
            <strong>Highest ATS Score:</strong>{" "}
            {profileData.highestScore}%
          </p>

          <p>
            <strong>Average ATS Score:</strong>{" "}
            {Number(profileData.averageScore).toFixed(2)}%
          </p>

        </div>

      </div>

    </div>

  );

}

export default Profile;