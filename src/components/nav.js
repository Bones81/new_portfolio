import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <nav id="nav">
      <ul className="lg nav-ul">
        <a href="#hero" className="nav-li home-link"><li >&lt;Nate Codes&gt;</li></a>
        <li className="nav-li common-link"><a href="#about">About</a></li>
        <li className="nav-li common-link"><a href="#projects">Projects</a></li>
        <li className="nav-li common-link"><a href="#resume">Resume</a></li>
        <li className="nav-li common-link"><a href="#links">Links</a></li>
        <li className="nav-li common-link"><a href="#contact">Contact</a></li>
      </ul>
      <ul className="sm mini-nav-ul">
        <a href="#hero" className="nav-li home-link"><li >&lt;Nate Codes&gt;</li></a>
        <div className="hamburger-menu">
          <GiHamburgerMenu onClick={toggleMenu}/>
        </div>
      </ul>
      {openMenu ? <div className="open-menu">This would be the open hamburger menu.</div> : null}
    </nav>
  )
}

export default Nav