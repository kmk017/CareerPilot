function ProjectsSection({ projects }) {

    return (

        <>

            <h2>Projects</h2>

            {

                projects.map((project, index) => (

                    <div
                        key={index}
                        className="project-preview"
                    >

                        <h3>

                            {project.title || "Project Title"}

                        </h3>

                        <p>

                            {project.description}

                        </p>

                        <p>

                            <strong>Technologies:</strong>{" "}

                            {project.technologies}

                        </p>

                        <p>

                            <strong>GitHub:</strong>{" "}

                            {project.github}

                        </p>

                    </div>

                ))

            }

            <hr />

        </>

    );

}

export default ProjectsSection;