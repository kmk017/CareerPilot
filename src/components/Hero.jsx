import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Launch Your Career with Confidence</h1>

        <p className="hero-subtitle">
          AI-powered career guidance for students and fresh graduates.
        </p>

        <p className="hero-description">
          Create ATS-friendly resumes, discover career paths, and follow a
          personalized learning roadmap to prepare for software engineering
          roles.
        </p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => navigate("/resume")}
          >
            🚀 Build My Resume
          </button>

          <button
            className="btn-secondary"
            onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}
          >
            Explore Features
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;