function Projects({ projects, setProjects }) {

  function handleChange(index, field, value) {

    const updated = [...projects];

    updated[index][field] = value;

    setProjects(updated);

  }

  function addProject() {

    setProjects([
      ...projects,
      {
        title: "",
        description: "",
        technologies: "",
        github: "",
      },
    ]);

  }

  return (

    <div className="form-section">

      <h2>Projects</h2>

      {projects.map((project, index) => (

        <div key={index} className="form-card">

          <label>Project Title</label>

          <input
            value={project.title}
            onChange={(e) =>
              handleChange(index, "title", e.target.value)
            }
          />

          <label>Description</label>

          <textarea
            placeholder="Write Project Description here"
            value={project.description}
            onChange={(e) =>
              handleChange(index, "description", e.target.value)
            }
          />

          <label>Technologies</label>

          <input
            value={project.technologies}
            onChange={(e) =>
              handleChange(index, "technologies", e.target.value)
            }
          />

          <label>GitHub Link</label>

          <input
            value={project.github}
            onChange={(e) =>
              handleChange(index, "github", e.target.value)
            }
          />

        </div>

      ))}

      <button
        type="button"
        onClick={addProject}
      >
        + Add Project
      </button>

    </div>

  );

}

export default Projects;