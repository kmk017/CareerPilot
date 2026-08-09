function OverviewCard({ career }) {

  return (

    <div className="overview-card">

      <h1>{career.title}</h1>

      <p>{career.description}</p>

      <p>

        <strong>Estimated Duration:</strong>{" "}

        {career.roadmap.duration}

      </p>

    </div>

  );

}

export default OverviewCard;