function ProgressBar({ current, total }) {

  const percentage = ((current + 1) / total) * 100;

  return (

    <div>

      <div
        style={{
          width: "100%",
          height: "12px",
          background: "#ddd",
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "10px"
        }}
      >

        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            background: "#2563eb"
          }}
        />

      </div>

      <p>

        Question {current + 1} of {total}

      </p>

    </div>

  );

}

export default ProgressBar;