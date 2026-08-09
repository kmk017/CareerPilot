function Header({

    name,

    email,

    phone,

    linkedin,

    github

}) {

    return (

        <div className="resume-header">

          <h1 className="resume-name">

            {name || "Your Name"}

          </h1>

          <div className="contact-info">

            <span>
              {email || "your@email.com"}
            </span>

            <span>|</span>

            <span>
              {phone || "+91 XXXXX XXXXX"}
            </span>

            <span>|</span>

            <span>
              {linkedin || "linkedin.com/in/username"}
            </span>

            <span>|</span>

            <span>
              {github || "github.com/username"}
            </span>

        </div>

        <hr />

    </div>

    );

}

export default Header;