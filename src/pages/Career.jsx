import { useState } from "react";
import Questionnaire from "../components/career/Questionnaire";
import "./Career.css";
import recommendCareer from "../utils/recommendationEngine";
import careers from "../data/careerData";
import Recommendation from "../components/career/Recommendation";
import { useNavigate } from "react-router-dom";

function Career() {

  const [answers, setAnswers] = useState({

    requiredSkills: {},

    interests: {},

    workPreference: {},

    careerGoals: {}

  });

  const [recommendations, setRecommendations] = useState([]);

  function handleRecommendation() {

    const results = recommendCareer(

        answers,

        careers

    );

    console.log(results);

    setRecommendations(results);

  }

  function handleRoadmap(career) {

    navigate("/roadmap",{
        state: {
            career
        }
    });

  }

  const navigate = useNavigate();

    return (

        <div className="career-page">

            <h1>Career Guidance</h1>

            <p>

                Answer a few questions to discover the careers that best match your skills and interests.

            </p>

            <div className="questionnaire-section">

                <Questionnaire

                  answers={answers}

                  setAnswers={setAnswers}

                  onSubmit={handleRecommendation}

                />


            </div>

            <div className="recommendation-section">

                <Recommendation

                   recommendations={recommendations}

                   onViewRoadmap={handleRoadmap}

                />

            </div>

        </div>

    );

}

export default Career;