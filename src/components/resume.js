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
import { SiTypescript } from "react-icons/si"
import { SiBootstrap } from "react-icons/si"

const Resume = () => {
  return (
    <section id="resume">
      <h2 className="section-title">Resume Highlights</h2>
      <div>
        <h3>Technical Skills</h3>
        <div className="tech-skills">
          <div className="tech-skill-item">
            <FaHtml5 title="HTML5" />
            <p className="skill-name">HTML 5</p>
          </div>
          <div className="tech-skill-item">
            <SiCss3 title="CSS3" />
            <p className="skill-name">CSS 3</p>
          </div>
          <div className="tech-skill-item">
            <FaJs title="JavaScript" />
            <p className="skill-name">JavaScript</p>
          </div>
          <div className="tech-skill-item">
            <SiTypescript title="TypeScript" />
            <p className="skill-name">TypeScript</p>
          </div>
          <div className="tech-skill-item">
            <SiBootstrap title="Bootstrap" />
            <p className="skill-name">Bootstrap</p>
          </div>
          <div className="tech-skill-item">
            <SiJquery title="jQuery" />
            <p className="skill-name">jQuery</p>
          </div>
          <div className="tech-skill-item">
            <FaNode title="Node.js" />
            <p className="skill-name">Node.js</p>
          </div>
          <div className="tech-skill-item">
            <SiExpress title="Express.js" />
            <p className="skill-name">Express.js</p>
          </div>
          <div className="tech-skill-item">
            <FaGit title="Git" />
            <p className="skill-name">Git</p>
          </div>
          <div className="tech-skill-item">
            <FaReact title="React.js" />
            <p className="skill-name">React.js</p>
          </div>
          <div className="tech-skill-item">
            <FaAngular title="Angular" />
            <p className="skill-name">Angular</p>
          </div>
          <div className="tech-skill-item">
            <FaPython title="Python" />
            <p className="skill-name">Python</p>
          </div>
          <div className="tech-skill-item">
            <DiDjango title="Django" />
            <p className="skill-name">Django</p>
          </div>
          <div className="tech-skill-item">
            <SiPostgresql title="PostgreSQL" />
            <p className="skill-name">PostgreSQL</p>
          </div>
          <div className="tech-skill-item">
            <SiMongodb title="MongoDB" />
            <p className="skill-name">MongoDB</p>
          </div>
          <div className="tech-skill-item">
            <SiHeroku title="Heroku" />
            <p className="skill-name">Heroku</p>
          </div>
          <div className="tech-skill-item">
            <FaSlack title="Slack" />
            <p className="skill-name">Slack</p>
          </div>
          <div className="tech-skill-item">
            <SiNestjs title="NestJS" />
            <p className="skill-name">NestJS</p>
          </div>
          <div className="tech-skill-item">
            <SiGooglemaps title="Google Maps API" />
            <p className="skill-name">Google Maps API</p>
          </div>
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
  );
}

export default Resume