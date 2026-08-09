import "./Roadmap.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import careers from "../data/careerData";

import OverviewCard from "../components/roadmap/OverviewCard";
import SkillSection from "../components/roadmap/SkillSection";
import ProjectSection from "../components/roadmap/ProjectSection";
import ResourceSection from "../components/roadmap/ResourceSection";
import TimelineSection from "../components/roadmap/TimelineSection";
import InterviewSection from "../components/roadmap/InterviewSection";
import PrerequisiteSection from "../components/roadmap/PrerequisiteSection";

function Roadmap() {

  const location = useLocation();

  const [selectedCareer, setSelectedCareer] = useState(null);

  useEffect(() => {

    if (location.state?.career) {

      setSelectedCareer(location.state.career);

    } else {

      setSelectedCareer(careers[0]);

    }

  }, [location]);

  function handleCareerChange(event) {

    const career = careers.find(

      (item) => item.title === event.target.value

    );

    setSelectedCareer(career);

  }

  if (!selectedCareer) {

    return <h2>Loading...</h2>;

  }

  console.log(selectedCareer);

  return (

    <div className="roadmap-page">

      <h1>Career Roadmap</h1>

      <div style={{ marginBottom: "20px" }}>

        <label>

          <strong>Select Career : </strong>

        </label>

        <select

          value={selectedCareer.title}

          onChange={handleCareerChange}

        >

          {

            careers.map((career) => (

              <option

                key={career.title}

                value={career.title}

              >

                {career.title}

              </option>

            ))

          }

        </select>

      </div>

      <OverviewCard career={selectedCareer} />

      <PrerequisiteSection
        prerequisites={selectedCareer.roadmap?.prerequisites || []}
      />

      <SkillSection

        skills={selectedCareer.roadmap?.skills || []}

      />

      <ProjectSection

        projects={selectedCareer.roadmap?.projects || []}

      />

      <ResourceSection

        resources={selectedCareer.roadmap?.resources || []}

      />

      <InterviewSection
        topics={selectedCareer.roadmap?.interviewTopics || []}
      />

      <TimelineSection

        timeline={selectedCareer.roadmap?.timeline || []}

      />

    </div>

  );

}

export default Roadmap;