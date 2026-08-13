import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Career from "./pages/Career";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Interview from "./pages/Interview";
import ResumeHistory from "./pages/ResumeHistory";

function App() {
  return (
    <div className="app-shell">
      <Navbar
        title="CareerPilot"
        subtitle="student career companion"
      />
      <main className="app-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/career" element={<Career />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume-history" element={<ResumeHistory />} />  
      </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

