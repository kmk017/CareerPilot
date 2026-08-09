import Accordion from "./Accordion";

function InterviewSection({ topics }) {

  return (

    <Accordion title="Interview Topics">

      {

        topics.length === 0 ? (

          <p>No interview topics available.</p>

        ) : (

          <ul>

            {

              topics.map((topic) => (

                <li key={topic}>

                  ✅ {topic}

                </li>

              ))

            }

          </ul>

        )

      }

    </Accordion>

  );

}

export default InterviewSection;