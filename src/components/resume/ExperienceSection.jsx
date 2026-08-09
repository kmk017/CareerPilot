function ExperienceSection({ experiences }) {

    const validExperiences = experiences.filter(
        (exp) =>
            exp.company.trim() !== "" ||
            exp.role.trim() !== "" ||
            exp.duration.trim() !== "" ||
            exp.description.trim() !== ""
    );

    if (validExperiences.length === 0) {
        return null;
    }

    return (

        <>

            <h2>Experience</h2>

            {validExperiences.map((exp, index) => (

                <div
                    key={index}
                    className="experience-preview"
                >

                    <h3>

                        {exp.role}

                    </h3>

                    <p>

                        <strong>{exp.company}</strong>

                    </p>

                    <p>

                        {exp.duration}

                    </p>

                    <p>

                        {exp.description}

                    </p>

                </div>

            ))}

            <hr />

        </>

    );

}

export default ExperienceSection;