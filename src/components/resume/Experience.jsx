function Experience({ experiences, setExperiences }) {

    function handleChange(index, field, value) {

        const updated = [...experiences];

        updated[index][field] = value;

        setExperiences(updated);

    }

    function addExperience() {

        setExperiences([
            ...experiences,
            {
                company: "",
                role: "",
                duration: "",
                description: "",
            },
        ]);

    }

    return (

        <div className="form-section">

            <h2>Experience</h2>

            {experiences.map((exp, index) => (

                <div
                    key={index}
                    className="form-card"
                >

                    <label>Company</label>

                    <input
                        value={exp.company}
                        onChange={(e)=>
                            handleChange(index,"company",e.target.value)
                        }
                    />

                    <label>Role</label>

                    <input
                        value={exp.role}
                        onChange={(e)=>
                            handleChange(index,"role",e.target.value)
                        }
                    />

                    <label>Duration</label>

                    <input
                        value={exp.duration}
                        onChange={(e)=>
                            handleChange(index,"duration",e.target.value)
                        }
                    />

                    <label>Description</label>

                    <textarea
                        value={exp.description}
                        onChange={(e)=>
                            handleChange(index,"description",e.target.value)
                        }
                    />

                </div>

            ))}

            <button
                type="button"
                onClick={addExperience}
            >
                + Add Experience
            </button>

        </div>

    );

}

export default Experience;