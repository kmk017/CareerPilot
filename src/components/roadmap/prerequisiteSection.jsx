import Accordion from "./Accordion";

function PrerequisiteSection({ prerequisites }) {

  return (

    <Accordion title="Prerequisites">

      <ul>

        {

          prerequisites.map((item) => (

            <li key={item}>

              ✅ {item}

            </li>

          ))

        }

      </ul>

    </Accordion>

  );

}

export default PrerequisiteSection;