import Accordion from "./Accordion";

function ResourceSection({ resources }) {

  return (

    <Accordion title="Learning Resources">

      {

        resources.length === 0 ? (

          <p>No resources available.</p>

        ) : (

          <ul>

            {

              resources.map((resource) => (

                <li key={resource.title}>

                  <a

                    href={resource.url}

                    target="_blank"

                    rel="noreferrer"

                  >

                    {resource.title}

                  </a>

                </li>

              ))

            }

          </ul>

        )

      }

    </Accordion>

  );

}

export default ResourceSection;