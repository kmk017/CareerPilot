import { useState } from "react";

function Accordion({ title, children }) {

  const [isOpen, setIsOpen] = useState(true);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (

    <div className="accordion">

      <div
        className="accordion-header"
        onClick={toggleAccordion}
      >

        <h2>

          {isOpen ? "▼" : "▶"} {title}

        </h2>

      </div>

      {

        isOpen && (

          <div className="accordion-body">

            {children}

          </div>

        )

      }

    </div>

  );

}

export default Accordion;