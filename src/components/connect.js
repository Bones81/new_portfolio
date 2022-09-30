import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


const Connect = () => {
  return (
    <section id="connect">
      <ul id="links-ul">
        <li className="link-li">
        <a href="mailto:nathanlfreeman@gmail.com" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faEnvelope} /></a>
        </li>
        <li className="link-li">
          <a href="https://www.linkedin.com/in/nathanfreeman6" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faLinkedin}/></a>
        </li>
        <li className="link-li">
          <a href="https://github.com/Bones81" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub}/>
          </a>
        </li>
        <li className="link-li">
          <a href="https://www.instagram.com/nate.is.free/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faInstagram}/></a>
        </li>
      </ul>
    </section>
  )
}

export default Connect

