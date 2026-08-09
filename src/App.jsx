import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Career from "./pages/Career";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import Interview from "./pages/Interview";
import { useState } from "react";
import ResumeHistory from "./pages/ResumeHistory";

function App() {
  return (
    <div>
      <Navbar
        title="CareerPilot"
        subtitle="student career companion"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/career" element={<Career />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume-history" element={<ResumeHistory />} />  
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

