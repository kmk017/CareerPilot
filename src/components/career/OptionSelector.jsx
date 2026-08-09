function OptionSelector({

    title,

    selectedValue,

    onSelect

}) {

    return (

        <div className="skill-card">

            <p>{title}</p>

            <button

                className={
                    selectedValue === "HIGH"
                        ? "selected"
                        : ""
                }

                onClick={() => onSelect("HIGH")}

            >

                High

            </button>

            <button

                className={
                    selectedValue === "MEDIUM"
                        ? "selected"
                        : ""
                }

                onClick={() => onSelect("MEDIUM")}

            >

                Medium

            </button>

            <button

                className={
                    selectedValue === "LOW"
                        ? "selected"
                        : ""
                }

                onClick={() => onSelect("LOW")}

            >

                Low

            </button>

        </div>

    );

}

export default OptionSelector;