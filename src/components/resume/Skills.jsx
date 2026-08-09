function Skills({ skills, setSkills }) {

    function handleChange(index, value){

        const updated = [...skills];

        updated[index] = value;

        setSkills(updated);

    }

    function addSkill(){

        setSkills([

            ...skills,

            ""

        ]);

    }

    return(

        <div className="form-section">

            <h2>Skills</h2>

            {

                skills.map((skill,index)=>(

                    <input

                        key={index}

                        type="text"

                        placeholder="Enter Skill"

                        value={skill}

                        onChange={(e)=>

                            handleChange(

                                index,

                                e.target.value

                            )

                        }

                    />

                ))

            }

            <button

                type="button"

                onClick={addSkill}

            >

                + Add Skill

            </button>

        </div>

    );

}

export default Skills;