import OptionSelector from "./OptionSelector";

function Questionnaire({ answers, setAnswers, onSubmit }) {

    const skills = [

        "Python",

        "Java",

        "SQL",

        "JavaScript"

    ];

    const interests = [

      "Backend",

      "Frontend",

      "Artificial Intelligence",

      "Cybersecurity",

      "Cloud Computing"

    ];

    function handleSkillChange(skill, level) {

        setAnswers((previousAnswers) => ({

            ...previousAnswers,

            requiredSkills: {

                ...previousAnswers.requiredSkills,

                [skill]: level,

            },

        }));

    }

    function handleInterestChange(interest, level) {

      setAnswers((previousAnswers) => ({

           ...previousAnswers,

          interests: {

              ...previousAnswers.interests,

              [interest]: level,

          },

      }));
    }

    return (

        <div>

            <h2>Career Questionnaire</h2>

            <h3>Skills</h3>

            {

              skills.map((skill) => (

                <OptionSelector

                  key={skill}

                  title={skill}

                  selectedValue={answers.requiredSkills[skill]}

                  onSelect={(level) =>

                    handleSkillChange(skill, level)

                  }

                />

              ))

            }

          <h3>Interests</h3>

          {
            interests.map((interest) => (

              <OptionSelector

                key={interest}

                title={interest}

                selectedValue={answers.interests[interest]}

                onSelect={(level) =>

                  handleInterestChange(interest, level)

                }
              />
            ))
          }

          <button
            onClick={onSubmit}
          >

            Find My Career

          </button>

        </div>

    );

}

export default Questionnaire;