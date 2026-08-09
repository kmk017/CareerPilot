function EducationSection({ educations }) {

    return (

        <>

            <h2>Education</h2>

            {educations.map((edu, index) => (

                <div
                    key={index}
                    className="education-preview"
                >

                    <h3>{edu.qualification}</h3>

                    <p>{edu.institution}</p>

                    <p>{edu.fieldOfStudy}</p>

                    <p>
                        {edu.cgpa}
                    </p>

                    <p>
                        {edu.startYear} - {edu.endYear}
                    </p>

                </div>

            ))}


        </>

    );

}

export default EducationSection;