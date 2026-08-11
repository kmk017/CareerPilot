import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />

      <section id="features" className="features">

    <h2 className="features-heading">Core Features</h2>
  
    <div className="feature-grid">
  
      <div className="feature-card">
        <h3>📄 Resume Builder</h3>
        <p>
          Create ATS-friendly resumes and improve your summary with AI.
        </p>
        <button className="btn-primary" onClick={() => navigate("/resume")}>
          Build Resume
        </button>
      </div>
  
      <div className="feature-card">
        <h3>🎯 Career Guidance</h3>
        <p>
          Explore frontend, backend, and AI/ML career paths.
        </p>
        <button className="btn-primary" onClick={() => navigate("/career")}>
          Explore Careers
        </button>
      </div>
  
      <div className="feature-card">
        <h3>🗺️ Learning Roadmap</h3>
        <p>
          Follow a structured roadmap to become job-ready.
        </p>
        <button className="btn-primary" onClick={() => navigate("/roadmap")}>
          View Roadmap
        </button>
      </div>
  
      <div className="feature-card">
        <h3>💼 Interview Practice</h3>
        <p>
          Practice technical interview questions and improve interview confidence.
        </p>
        <button className="btn-primary" onClick={() => navigate("/interview")}>
          Start Practice
        </button>
      </div>
  
    </div>
  
  </section>
    </>
  );
}

export default Home;