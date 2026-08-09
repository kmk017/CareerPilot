function SkillsSection({ skills }) {

    return (

        <>

            <h2>Skills</h2>

            <p>

                {
                    skills
                        .filter(skill => skill.trim() !== "")
                        .join(" • ")
                    || "Add your skills..."
                }

            </p>

            <hr />

        </>

    );

}

export default SkillsSection;