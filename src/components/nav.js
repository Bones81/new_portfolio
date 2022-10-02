import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdArrowCircleUp } from "react-icons/md"

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
        <li className="nav-li common-link"><a href="#connect">Connect</a></li>
        <li className="nav-li common-link"><a href="https://bones81.github.io/actor_site/" target="_blank" rel="noreferrer">Nate Acts</a></li>
      </ul>
      <ul className="sm mini-nav-ul-closed">
        <a href="#hero" className="nav-li home-link"><li >&lt;Nate Codes&gt;</li></a>
        <div className="hamburger-menu">
          <GiHamburgerMenu onClick={toggleMenu}/>
        </div>
      </ul>
      {openMenu ? 
        <div className="open-menu">
          <div className="hamburger-menu">
            <MdArrowCircleUp onClick={toggleMenu}/>
          </div>
          <ul className="mini-nav-ul-open">
            <a href="#hero" className="nav-li home-link" onClick={toggleMenu}><li >&lt;Nate Codes&gt;</li></a>
            <li className="nav-li common-link"><a href="#about" onClick={toggleMenu}>About</a></li>
            <li className="nav-li common-link"><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li className="nav-li common-link"><a href="#resume" onClick={toggleMenu}>Resume</a></li>
            <li className="nav-li common-link"><a href="#connect" onClick={toggleMenu}>Connect</a></li>
            <li className="nav-li common-link"><a href="https://bones81.github.io/actor_site/" target="_blank" rel="noreferrer">Nate Acts</a></li>

          </ul>
        </div> 
      : null}
    </nav>
  )
}

export default Nav