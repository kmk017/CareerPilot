import FeatureCard from "./FeatureCard";
import "./Features.css";

function Features() {
  return (
    <section id="features" className="features">

      <h2 className="features-title">Core Features</h2>

      <div className="feature-grid">

        <FeatureCard
          icon="📄"
          title="Resume Builder"
          description="Create ATS-friendly resumes with AI-powered summary enhancement and PDF export."
          path="/resume"
          buttonText="Build Resume"
        />

        <FeatureCard
          icon="🎯"
          title="Career Guidance"
          description="Explore frontend, backend, and AI/ML career paths based on your interests and skills."
          path="/career"
          buttonText="Explore Careers"
        />

        <FeatureCard
          icon="🗺️"
          title="Learning Roadmap"
          description="Follow a structured roadmap with technologies, projects, and milestones to become job-ready."
          path="/roadmap"
          buttonText="View Roadmap"
        />

        <FeatureCard
          icon="💼"
          title="Interview Practice"
          description="Prepare for technical interviews with role-based questions and guided practice sessions."
          path="/interview"
          buttonText="Start Practice"
        />

      </div>

    </section>
  );
}

export default Features;