import { faAngular } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faCss3 } from "@fortawesome/free-brands-svg-icons"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faJs } from "@fortawesome/free-brands-svg-icons"
import { faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faPython } from "@fortawesome/free-brands-svg-icons"
import { faGit } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Resume = () => {
  return (
    <section id="resume">
      <div>
        <h3>Resume Highlights</h3>
        <h4>Technical Skills</h4>
        <div className="tech-skills">
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faNodeJs} />
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faAngular} />
          <FontAwesomeIcon icon={faPython} />
          <FontAwesomeIcon icon={faGit} />
        </div>

        <details>
          <summary>Technical Experience</summary>
          <h3>General Assembly</h3>
          <h5>April 2022 - July 2022</h5>
          <h4>Instructional Associate, Belcher cohort</h4>
        </details>
      </div>
    </section>
  )
}

export default Resume