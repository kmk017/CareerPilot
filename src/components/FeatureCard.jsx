import "./FeatureCard.css";
import { useNavigate } from "react-router-dom";

function FeatureCard({
  icon,
  title,
  description,
  path,
  buttonText
}) {

  const navigate = useNavigate();

  return (
    <div className="feature-card">

      <div className="feature-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button onClick={() => navigate(path)}>
        {buttonText}
      </button>

    </div>
  );
}

export default FeatureCard;