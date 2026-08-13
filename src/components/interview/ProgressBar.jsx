function ProgressBar({ current, total }) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
      <p className="progress-text">
        Question {current + 1} of {total}
      </p>
    </div>
  );
}

export default ProgressBar;
