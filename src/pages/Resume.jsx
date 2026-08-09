import { useState, useRef, useEffect } from "react";
import "./Resume.css";
import Accordion from "../components/Accordion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import PersonalInfo from "../components/resume/PersonalInfo";
import ResumePreview from "../components/resume/ResumePreview";
import Education from "../components/resume/Education";
import Skills from "../components/resume/Skills";
import Projects from "../components/resume/Projects";
import Experience from "../components/resume/Experience";

const API_BASE = "http://127.0.0.1:5000";

function Resume() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [summary, setSummary] = useState("");
  const [educations, setEducations] = useState([
    {
      institution:"",
      qualification:"",
      fieldOfStudy:"",
      cgpa:"",
      startYear:"",
      endYear:"",
    }
  ]);
  const [skills, setSkills] = useState([
      ""
  ]);
  const [projects, setProjects] = useState([
    {
      title: "",
      description: "",
      technologies: "",
      github: "",
    },
  ]);
  const [experiences, setExperiences] = useState([
    {
        company: "",
        role: "",
        duration: "",
        description: "",
    },
  ]);
  const resumeRef = useRef(null);

  async function downloadPDF() {

    const element = resumeRef.current;

    const canvas = await html2canvas(element, {
        scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight =
        (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight
    );

    pdf.save("Resume.pdf");

  }

  const [atsScore, setAtsScore] = useState(0);
  const [resumeLevel, setResumeLevel] = useState("");
  const [showATS, setShowATS] = useState(false);
  const [jobRole, setJobRole] = useState("Frontend");

  const [contentSuggestions, setContentSuggestions] = useState([]);
  const [skillSuggestions, setSkillSuggestions] = useState([]);
  const [overallSuggestions, setOverallSuggestions] = useState([]);
  const [resumeHistory, setResumeHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const [aiLoading, setAiLoading] = useState(false);

  async function checkATS() {

    const resumeData = {
      name,
      email,
      phone,
      linkedin,
      github,
      summary,
      educations,
      skills,
      projects,
      experiences,
      jobRole
    };
  
    try {
  
      const response = await fetch(
        `${API_BASE}/api/analyze`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(resumeData)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to analyze resume");
      }
  
      const data = await response.json();
  
      // Update the ATS result here
      setAtsScore(data.score);
      setResumeLevel(data.level);
      setContentSuggestions(data.contentSuggestions);
      setSkillSuggestions(data.skillSuggestions);
      setOverallSuggestions(data.overallSuggestions);
      setShowATS(true);
      loadResumeHistory();
  
    } catch (error) {
  
      console.error("Error:", error);
  
    }
  
  }

  async function enhanceSummary() {

    if (!summary.trim()) {
  
      alert("Please enter a summary first.");
  
      return;
  
    }
  
    setAiLoading(true);
  
    try {
  
      const response = await fetch(
        `${API_BASE}/api/enhance-summary`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ summary })
        }
      );
  
      const data = await response.json();
  
      if (data.enhancedSummary) {
        setSummary(data.enhancedSummary);
      }
  
    } catch (error) {
  
      console.error(error);
      alert("Failed to enhance summary.");
  
    } finally {
  
      setAiLoading(false);
  
    }
  }

  async function loadResumeHistory() {
  
    try {
  
      const response = await fetch(
        `${API_BASE}/api/resumes`
      );
      const data = await response.json();
  
      setResumeHistory(data);
  
    }
  
    catch (error) {
  
      console.error(error);
  
    }
  
  }

  useEffect(() => {

    loadResumeHistory();
  
  }, []);

  return (

    <div className="resume-container">

      <div className="resume-form">

        <Accordion title="Personal Information">

          <PersonalInfo

            name={name}
            setName={setName}

            email={email}
            setEmail={setEmail}

            phone={phone}
            setPhone={setPhone}

            linkedin={linkedin}
            setLinkedin={setLinkedin}

            github={github}
            setGithub={setGithub}

            summary={summary}
            setSummary={setSummary}

          />

          <button
              type="button"
              onClick={enhanceSummary}
              disabled={aiLoading}
            >
              {aiLoading ? "Enhancing..." : "✨ Enhance with AI"}
            </button>

        </Accordion>

        <Accordion title="Education">

        <Education

          educations={educations}

          setEducations={setEducations}

        />

        </Accordion>

        <Accordion title="Skills">

        <Skills

          skills={skills}

          setSkills={setSkills}

        />

        </Accordion>

        <Accordion title="Projects">

        <Projects
          projects={projects}
          setProjects={setProjects}
        />

        </Accordion>

        <Accordion title="Experience">

        <Experience

          experiences={experiences}

          setExperiences={setExperiences}

        />

        </Accordion>

      </div>

      <div className="preview-container">

        <div className="action-bar">

          <div className="job-role">

            <label>Target Role :</label>
          
            <select
          
              value={jobRole}
          
              onChange={(e) => setJobRole(e.target.value)}
          
            >
          
              <option>Frontend</option>
          
              <option>Backend</option>
          
              <option>AI/ML</option>
          
            </select>
          
          </div>

          <button onClick={checkATS}>
            📊 Check ATS Score
          </button>

          <button onClick={() => setShowHistory(!showHistory)}>
            {showHistory ? "Hide History" : "📜 Resume History"}
          </button>

          <button onClick={downloadPDF}>
            📄Download PDF
          </button>

          </div>

          {showATS && (
            <div className="ats-result">

              <h2>{resumeLevel}</h2>

              <h2>ATS Score : {atsScore}%</h2>

              <h3>📝 Resume Content</h3>

              {contentSuggestions.map((item, index) => (
              
                  <p key={index}>{item}</p>
              
              ))}
              
              <h3>💻 Technical Skills</h3>
              
              {skillSuggestions.map((item, index) => (
              
                  <p key={index}>{item}</p>
              
              ))}
              
              <h3>⭐ Overall</h3>
              
              {overallSuggestions.map((item, index) => (
              
                  <p key={index}>{item}</p>
              
              ))}

            </div>  

          )}

          {showHistory && (
          <div className="resume-history">

            <h2>Resume History</h2>

            {resumeHistory.length === 0 ? (
              <p>No resumes analyzed yet.</p>
            ) : (
          
            resumeHistory.map((resume) => (
          
              <div key={resume.id}>
          
                <p>
                  <strong>{resume.name}</strong>
                </p>

                <p>Score: {resume.score}%</p>
          
                <p>{resume.level}</p>
          
                <hr />
          
              </div>
          
            )))}
          
          </div>
          )}
        

        <ResumePreview
          ref={resumeRef}

          name={name}
          email={email}
          phone={phone}
          linkedin={linkedin}
          github={github}
          summary={summary}
          educations={educations}
          skills={skills}
          projects={projects}
          experiences={experiences}

        />

      </div>

    </div>

  );
}

export default Resume;