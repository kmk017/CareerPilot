import Accordion from "./Accordion";

function TimelineSection({ timeline }) {

  return (

    <Accordion title="Learning Timeline">

      {

        timeline.length === 0 ? (

          <p>No timeline available.</p>

        ) : (

          <ol>

            {

              timeline.map((step) => (

                <li key={step}>

                  {step}

                </li>

              ))

            }

          </ol>

        )

      }

    </Accordion>

  );

}

export default TimelineSection;