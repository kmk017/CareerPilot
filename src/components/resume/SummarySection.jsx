function SummarySection({ summary }) {

    return (

        <>

            <h2>Professional Summary</h2>

            <p>
                {summary || "Write your professional summary here..."}
            </p>

            <hr />

        </>

    );

}

export default SummarySection;