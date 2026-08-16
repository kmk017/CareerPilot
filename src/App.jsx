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
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

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
      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
        <Route
          path="/resume"
          element={
            <ProtectedRoute>
              <Resume />
            </ProtectedRoute>
          }
        />
      
        <Route
          path="/career"
          element={
            <ProtectedRoute>
              <Career />
            </ProtectedRoute>
          }
        />
      
        <Route
          path="/roadmap"
          element={
            <ProtectedRoute>
              <Roadmap />
            </ProtectedRoute>
          }
        />
      
        <Route
          path="/interview"
          element={
            <ProtectedRoute>
              <Interview />
            </ProtectedRoute>
          }
        />
      
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      
        <Route
          path="/resume-history"
          element={
            <ProtectedRoute>
              <ResumeHistory />
            </ProtectedRoute>
          }
        />
      </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

