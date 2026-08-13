function Recommendation({ recommendations, onViewRoadmap }) {

    if (recommendations.length === 0) {

        return (

            <p>

                Complete the questionnaire and click
                <strong> Get Recommendation </strong>
                to see your recommendations.

            </p>

        );

    }

    return (

        <div>

            <h2>Recommended Careers</h2>

            {

                recommendations.map((result, index) => (

                    <div

                        className="recommendation-card"

                        key={result.career}

                    >

                        <h3>
                            {

                              index === 0

                                ? "🏆 " + result.career.title

                                : result.career.title

                            }

                        </h3>

                        <p>

                          {result.career.description}

                        </p>

                        <p>

                           Match Score : {result.score}

                        </p>

                        <button

                          onClick={() =>

                            onViewRoadmap(result.career)

                          }

                        >

                          View Roadmap

                        </button>

                    </div>

                ))

            }

        </div>

    );

}

export default Recommendation;