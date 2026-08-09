import Header from "./Header";
import SummarySection from "./SummarySection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";

import { forwardRef } from "react";
const ResumePreview = forwardRef(({
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
}, ref) =>  {
  return (
    <div 
      className="resume-preview"
      ref={ref}>

      <Header

        name={name}
        email={email}
        phone={phone}
        linkedin={linkedin}
        github={github}
      
      />

      <SummarySection
        summary={summary}
      />

      <EducationSection
        educations={educations}
      />

      <SkillsSection

        skills={skills}

      />


      <ProjectsSection

        projects={projects}

      />

      <ExperienceSection

        experiences={experiences}

      />

    </div>
  );
});

export default ResumePreview;