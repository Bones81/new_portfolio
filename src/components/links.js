import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons"

const Links = () => {
  return (
    <section id="links">
      <ul id="links-ul">
        <li className="link-li"><a href="https://www.linkedin.com/in/nathanfreeman6">LinkedIn</a></li>
        <li className="link-li"><a href="https://github.com/Bones81">Github</a></li>
        <li className="link-li"><a href="https://www.instagram.com/nate.is.free/">Instagram</a></li>
      </ul>

      <div className="icon-testing">
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-linkedin"></i>
        <i className="fa-solid fa-instagram"></i>
        <FontAwesomeIcon icon={faBirthdayCake}/>

      </div>
    </section>
  )
}

export default Links

