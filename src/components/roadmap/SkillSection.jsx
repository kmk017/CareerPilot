import Accordion from "./Accordion";

function SkillSection({ skills }) {

  return (

    <Accordion title="Skills to Learn">

      <ul>

        {

          skills.map((skill) => (

            <li key={skill}>

              ✅ {skill}

            </li>

          ))

        }

      </ul>

    </Accordion>

  );

}

export default SkillSection;