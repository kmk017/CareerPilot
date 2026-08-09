function Education({ educations, setEducations }) {

    function handleChange(index, field, value) {

        const updated = [...educations];

        updated[index][field] = value;

        setEducations(updated);

    }

    function addEducation() {

        setEducations([
            ...educations,
            {
                institution:"",
                qualification:"",
                fieldOfStudy:"",
                cgpa:"",
                startYear:"",
                endYear:""
            }
        ]);

    }

    return (

        <div className="form-section">

            <h2>Education</h2>

            {educations.map((edu,index)=>(

                <div
                    key={index}
                    className="form-card"
                >

                    <label>Institution</label>

                    <input
                        type="text"
                        value={edu.institution}
                        onChange={(e)=>
                            handleChange(index,"institution",e.target.value)
                        }
                    />

                    <label>Qualification</label>

                    <input
                        type="text"
                        value={edu.qualification}
                        onChange={(e)=>
                            handleChange(
                                index,
                                "qualification",
                                e.target.value
                            )
                        }
                    />

                    <label>Field of Study</label>

                    <input
                        value={edu.fieldOfStudy}
                        onChange={(e)=>
                            handleChange(
                                index,
                                "fieldOfStudy",
                                e.target.value
                            )
                        }
                    />

                    <label>CGPA / Percentage</label>

                    <input
                        value={edu.cgpa}
                        onChange={(e)=>
                            handleChange(
                                index,
                                "cgpa",
                                e.target.value
                            )
                        }
                    />

                    <label>Start Year</label>

                    <input
                        value={edu.startYear}
                        onChange={(e)=>
                            handleChange(
                                index,
                                "startYear",
                                e.target.value
                            )
                        }
                    />

                    <label>End Year</label>

                    <input
                        value={edu.endYear}
                        onChange={(e)=>
                            handleChange(
                                index,
                                "endYear",
                                e.target.value
                            )
                        }
                    />

                </div>

            ))}

            <button
                type="button"
                onClick={addEducation}
            >
                + Add Education
            </button>

        </div>

    );

}

export default Education;