import { useState } from "react";
import interviewQuestions from "../data/careerData/interviewQuestions";
import Timer from "../components/interview/Timer";
import ProgressBar from "../components/interview/ProgressBar";
import "./Interview.css";

function Interview() {

  const careers = Object.keys(interviewQuestions);

  const [selectedCareer, setSelectedCareer] = useState("");

  const [quizStarted, setQuizStarted] = useState(false);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const [quizFinished, setQuizFinished] = useState(false);

  const [score, setScore] = useState(0);

  const [aiFeedback, setAiFeedback] = useState('');
  const [feedbackLoading, setFeedbackLoading] = useState(false);

  function handleCareerChange(event) {
    setSelectedCareer(event.target.value);
  }

  function startQuiz() {
  
    setQuizStarted(true);
  
  }
  
  function nextQuestion() {
  
    if (
  
      currentQuestion <
  
      interviewQuestions[selectedCareer].length - 1
  
    ) {
  
      setCurrentQuestion(currentQuestion + 1);
  
    }
  
  }
  
  function previousQuestion() {
  
    if (currentQuestion > 0) {
  
      setCurrentQuestion(currentQuestion - 1);
  
    }
  
  }
  
  function handleAnswer(option) {
  
    setSelectedAnswers({
  
      ...selectedAnswers,
  
      [currentQuestion]: option
  
    });
  
  }

  function submitQuiz() {
  
    let correct = 0;
  
    questions.forEach((question, index) => {
  
      if (selectedAnswers[index] === question.answer) {
        correct++;
      }
  
    });
  
    setScore(correct);
    setQuizFinished(true);
    getAIFeedback(correct);
  }

  async function getAIFeedback(finalScore) {
    try {
      setFeedbackLoading(true);
  
      const response = await fetch(
        'http://127.0.0.1:5000/api/interview-feedback',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            career: selectedCareer,
            score: finalScore,
            total: questions.length
          })
        }
      );
  
      const data = await response.json();
      setAiFeedback(data.feedback);
  
    } catch (error) {
      console.error(error);
    } finally {
      setFeedbackLoading(false);
    }
  }
  
  function handleTimeUp() {
  
    submitQuiz();
  
  }

  const questions =

    selectedCareer

      ? interviewQuestions[selectedCareer]

      : [];

  const question =

    questions[currentQuestion];

  return (

    <div className="interview-page">

      <h1>Interview Preparation</h1>

      <p>
        Choose a career and practice interview questions.
      </p>

      <div className="result-card">

        <label>

          <strong>Select Career : </strong>

        </label>

        <select

          value={selectedCareer}

          onChange={handleCareerChange}

        >

          <option value="">

            -- Select Career --

          </option>

          {

            careers.map((career) => (

              <option

                key={career}

                value={career}

              >

                {career}

              </option>

            ))

          }

        </select>

      </div>

      {

        selectedCareer && !quizStarted && (
      
          <div className="result-card">
      
            <h2>
      
              {selectedCareer}
      
            </h2>
      
            <p>
      
              Total Questions :
      
              {" "}
      
              {questions.length}
      
            </p>
      
            <button
      
              onClick={startQuiz}
      
            >
      
              Start Interview
      
            </button>
      
          </div>
      
        )
      
      }    

      {

        quizFinished && (
      
          <div className="result-card">
      
            <h2>🎉 Interview Completed</h2>
      
            <h3>
      
              Your Score : {score} / {questions.length}
      
            </h3>

            <p>

              Correct Answers :
            
              {score}
            
            </p>
            
            <p>
            
              Wrong Answers :
            
              {questions.length - score}
            
            </p>
            
            <p>
            
              Accuracy :
            
              {
            
                Math.round(
            
                  (score / questions.length) * 100
            
                )
            
              }%
            
            </p>
      
      
            {
      
              score === questions.length && (
      
                <p>🏆 Excellent! You answered every question correctly.</p>
      
              )
      
            }
      
            {
      
              score >= Math.ceil(questions.length * 0.7) &&
      
              score < questions.length && (
      
                <p>👍 Good job! Your fundamentals are strong.</p>
      
              )
      
            }
      
            {
      
              score >= Math.ceil(questions.length * 0.5) &&
      
              score < Math.ceil(questions.length * 0.7) && (
      
                <p>🙂 Fair attempt. Keep practicing to improve.</p>
      
              )
      
            }
      
            {
      
              score < Math.ceil(questions.length * 0.5) && (
      
                <p>📚 Needs Improvement. Practice more and try again.</p>
      
              )
      
            }

            <hr style={{ margin: "30px 0" }} />

            {(feedbackLoading || aiFeedback) && (
              <div className="ai-feedback">
                <h3>🤖 AI Interview Feedback</h3>
            
                {feedbackLoading ? (
                  <p>Generating personalized feedback...</p>
                ) : (
                  <div className="ai-feedback-text">
                    {aiFeedback.split('\n').map((line, index) => {
                      const trimmed = line.trim();
                  
                      const isHeading =
                        trimmed.endsWith(':') &&
                        !trimmed.startsWith('-');
                  
                      return isHeading ? (
                        <h4 key={index}>{trimmed}</h4>
                      ) : (
                        <p key={index}>{trimmed}</p>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            <h2>Review Answers</h2>
            
            {
            
              questions.map((question, index) => {
            
                const userAnswer = selectedAnswers[index];
            
                const isCorrect = userAnswer === question.answer;
            
                return (
            
                  <div

                    key={index}

                    className="review-card"

                  >
            
                    <h3>
            
                      Question {index + 1}
            
                    </h3>
            
                    <p>
            
                      {question.question}
            
                    </p>
            
                    <p>
            
                      <strong>Your Answer :</strong>
            
                      {" "}
            
                      {
            
                        userAnswer
            
                          ? userAnswer
            
                          : "Not Answered"
            
                      }
            
                    </p>
            
                    <p>
            
                      <strong>Correct Answer :</strong>
            
                      {" "}
            
                      {question.answer}
            
                    </p>
            
                    <p>
            
                      {
            
                        isCorrect
            
                          ? "✅ Correct"
            
                          : "❌ Incorrect"
            
                      }
            
                    </p>
            
                  </div>
            
                );
            
              })
            
            }
      
            <button
      
              onClick={() => {
      
                setQuizFinished(false);
      
                setQuizStarted(false);
      
                setCurrentQuestion(0);
      
                setSelectedAnswers({});
      
                setScore(0);
      
              }}
      
            >
      
              Retake Interview
      
            </button>
      
          </div>
      
        )
      
      }

      {

         quizStarted && !quizFinished && (
       
           <div style={{ marginTop: "30px" }}>

            <Timer
                duration={180}
                onTimeUp={handleTimeUp}
            />
            
            <ProgressBar
                current={currentQuestion}
                total={questions.length}
            />
       
            <div className="question-card">
              <div className="question-number">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            
              <h3 className="question-text">
                {question.question}
              </h3>
       
             {
       
                 question.options.map((option) => (
         
                   <div key={option} className="option-item">
         
                     <label>
         
                       <input
         
                         type="radio"
         
                         name="answer"
         
                         checked={
         
                           selectedAnswers[currentQuestion] === option
         
                         }
         
                         onChange={() =>
         
                           handleAnswer(option)
         
                         }
         
                       />
         
                       {" "}
         
                       {option}
         
                     </label>
         
                   </div>
         
                 ))
         
               }
         
               <div style={{ marginTop: "20px" }}>
         
                 <button
         
                   onClick={previousQuestion}
         
                   disabled={currentQuestion === 0}
         
                 >
         
                   Previous
         
                 </button>
         
                 {" "}
         
                 {

                 currentQuestion === questions.length - 1 ?
                 
                 (
                 
                 <button
                 
                   onClick={submitQuiz}
                 
                 >
                 
                 Submit Test
                 
                 </button>
                 
                 )
                 
                 :
                 
                 (
                 
                 <button
                 
                   onClick={nextQuestion}
                 
                 >
                 
                 Next
                 
                 </button>
                 
                 )
                 
                 }
         
               </div>
         
             </div>
             </div>
         
           )
         
         }

    </div>

  );

}

export default Interview;