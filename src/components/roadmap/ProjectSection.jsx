import Accordion from "./Accordion";

function ProjectSection({ projects }) {

  return (

    <Accordion title="Projects">

      {

        projects.map((project) => (

          <div
            key={project.title}
            className="project-card"
          >

            <h3>{project.title}</h3>

            <p>

              <strong>Difficulty:</strong>

              {" "}

              {project.difficulty}

            </p>

            <p>

              {project.description}

            </p>

          </div>

        ))

      }

    </Accordion>

  );

}

export default ProjectSection;