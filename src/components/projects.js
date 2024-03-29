import {useState, useEffect} from 'react'
import axios from 'axios'

const Projects = () => {
  const mainProjects = [ // hardcoded primary projects that should always appear and don't need to wait for ElephantSQL to spin up.
    {
      id: 0, 
      name: 'Nathan Freeman Developer Portfolio',
      img: 'img/Portfolio_Cover.jpg',
      liveLink: 'http://www.nathanfreeman.com',
      githubLink: 'https://github.com/Bones81/new_portfolio',
      blurb: 'The current site you are enjoying! Tech Stack: React, Python, Django, PostgreSQL'
    },
    {
      id: 1, 
      name: 'The Fortnightly Film Society',
      img: 'img/FFS_Web_App_Thumb.jpg',
      liveLink: 'https://ffs.fly.dev',
      githubLink: 'https://github.com/Bones81/FFS',
      blurb: 'The official web app of the Fortnightly Film Society. Tech Stack: Node | Express | MongoDB | EJS'
    },
    {
      id: 2, 
      name: 'SAG Background Pay Calculator',
      img: 'img/SAGVouchers.png',
      liveLink: 'https://bones81.github.io/SAGVouchers-Front-End/vouchers',
      githubLink: 'https://github.com/Bones81/SAGVouchers-Front-End',
      blurb: 'Calculates and records how much an extra earns under a SAG pay schedule. Tech Stack: Angular | Node | Express | MongoDB'
    },
    {
      id: 3, 
      name: 'HKDL Caroler Info',
      img: 'img/HKDLCarolerInfo.jpg',
      liveLink: 'https://bones81.github.io/hkdl_2022/',
      githubLink: 'https://github.com/Bones81/hkdl_2022',
      blurb: 'Built in 2022 as a guide for Hong Kong Disneyland Christmas season singers. Built with: React'
    },
    {
      id: 4, 
      name: 'Futurama Fan App',
      img: 'img/Futurama.png',
      liveLink: 'https://bones81.github.io/Futurama-FE/',
      githubLink: 'https://github.com/Bones81/Futurama-FE',
      blurb: 'A database of characters and episodes from Futurama, with a Google Map of fan locations. Tech Stack: MERN | Google Maps API | 3rd Party API'
    }
  ]
  const [projects, setProjects] = useState([])
  const [showProject, setShowProject] = useState(false)
  const [showID, setShowID] = useState(null)

  const api_url = 'https://new-portfolio-back-2.onrender.com'
  // const api_url = 'http://localhost:8000'

  const getProjects = () => {
    axios.get(`${api_url}/api/projects`)
    .then( (response) => {
      setProjects(response.data)
    })
  }

  const displayProject = (projectID) => {
    setShowID(projectID)
    setShowProject(true)
  }

  const resetDisplay = () => {
    setShowID(null)
    setShowProject(false)
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <section id="projects">
      <h2 className='section-title'>Projects</h2>
      <div className="projects-container">
        { mainProjects.map( proj => {
          return showProject ? (
            showID === proj.id ? (
              <div className="project-display" key={"display_" + proj.id}>
                <img src={proj.img} alt={`a screen capture of ${proj.name}`}/>
                <div className="project-info">
                  <h1>{proj.name}</h1>
                  <p>{proj.blurb}</p>
                  <button className='live-link-btn'><a target="_blank" rel="noreferrer" href={proj.liveLink}>The Site</a></button>
                  <button className='github-link-btn'><a target="_blank" rel="noreferrer" href={proj.githubLink}>The Code</a></button>
                  <hr/>
                  <button className="close-btn" onClick={resetDisplay}>Close</button>
                </div>
              </div>
            ) : (
              <div className="project-card" key={proj.id} onClick={() => displayProject(proj.id)}>
                <img src={proj.img} alt={`a screen capture of ${proj.name}`}/>
                <h2 className='project-title'>{proj.name}</h2>
              </div>
            )) : (
              <div className="project-card" key={proj.id} onClick={() => displayProject(proj.id)}>
                <img src={proj.img} alt={`a screen capture of ${proj.name}`}/>
                <h2 className='project-title'>{proj.name}</h2>
              </div>
            )
        })}
        { projects.length !== 0 ? projects.map(proj => {
            return !showProject ? (
              <div className="project-card" key={proj.id} onClick={() => displayProject(proj.id)}>
                <img src={proj.img} alt={`a screen capture of ${proj.name}`}/>
                <h2 className='project-title'>{proj.name}</h2>
              </div>
            ) : showID === proj.id ? (
              <div className="project-display" key={"display_" + proj.id}>
                <img src={proj.img} alt={`a screen capture of ${proj.name}`}/>
                <div className="project-info">
                  <h1>{proj.name}</h1>
                  <p>{proj.blurb}</p>
                  <button className='live-link-btn'><a target="_blank" rel="noreferrer" href={proj.liveLink}>The Site</a></button>
                  <button className='github-link-btn'><a target="_blank" rel="noreferrer" href={proj.githubLink}>The Code</a></button>
                  <hr/>
                  <button className="close-btn" onClick={resetDisplay}>Close</button>
                </div>
              </div>
            ) : (
              <div className="project-card" key={proj.id} onClick={() => displayProject(proj.id)}>
                <img src={proj.img} alt={`a screen capture of ${proj.name}`}/>
                <h2 className='project-title'>{proj.name}</h2>
              </div>
            )
          }) : (
            <div className='loading-div'>
              <h2 className='loading-text'>Loading more projects... <br/><span className='loading-caption'>(May take up to 30s)</span></h2>  
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Projects