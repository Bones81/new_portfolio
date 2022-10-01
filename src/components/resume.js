import { FaAngular } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaJs } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { FaGit } from "react-icons/fa"
import { SiExpress, SiGooglemaps } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { FaNode } from "react-icons/fa"
import { SiJquery } from "react-icons/si"
import { DiDjango } from "react-icons/di"
import { SiMongodb } from "react-icons/si"
import { SiPostgresql } from "react-icons/si"
import { SiHeroku } from "react-icons/si"
import { FaSlack } from "react-icons/fa"
import { SiNestjs } from "react-icons/si"

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume Highlights</h2>
      <div>
        <h3>Technical Skills</h3>
        <div className="tech-skills">
          <FaHtml5 />
          <SiCss3/>
          <FaJs />
          <SiJquery />
          <FaNode />
          <SiExpress />
          <FaGit />
          <FaReact />
          <FaAngular />
          <FaPython />
          <DiDjango />
          <SiPostgresql />
          <SiMongodb />
          <SiHeroku />
          <FaSlack />
          <SiNestjs />
          <SiGooglemaps />
          <img src='./img/mongoose.png' alt="mongoose logo"/>
        </div>

        <details>
          <summary>Technical Experience</summary>
          <div className="resume-item">
            <h3>General Assembly</h3>
            <h5>April 2022 - July 2022</h5>
            <h4>Instructional Associate, Belcher cohort</h4>
          </div>
          <div className="resume-item">
            <h3>General Assembly</h3>
            <h5>January 2022 - April 2022</h5>
            <h4>Software Engineering Fellow</h4>
          </div>
          
        </details>
      </div>
    </section>
  )
}

export default Resume