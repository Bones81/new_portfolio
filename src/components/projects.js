import {useState, useEffect} from 'react'
import axios from 'axios'
const Projects = () => {
  const [projects, setProjects] = useState([])
  const [showProject, setShowProject] = useState(false)
  const [showID, setShowID] = useState(null)

  const api_url = 'https://new-portfolio-back.onrender.com'
  // const api_url= 'http://localhost:8000'

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
      <h2>Projects</h2>
      {projects.map(proj => {
        return !showProject ? (
          <div className="project-card" key={proj.id} onClick={() => displayProject(proj.id)}>
            <img src={proj.img} alt={`a screen capture of ${proj.name}`}/>
            <h2 className='project-title'>{proj.name}</h2>
          </div>
        ) : showID === proj.id ? (
          <div className="project-display" key={"display_" + proj.id}>
            <img src={proj.img} alt={`a screen capture of ${proj.name}`}/>
            <h1>{proj.name}</h1>
            <p>{proj.blurb}</p>
            <button><a target="_blank" rel="noreferrer" href={proj.liveLink}>Live Link</a></button>
            <button><a target="_blank" rel="noreferrer" href={proj.githubLink}>The Code</a></button>
            <hr/>
            <button onClick={resetDisplay}>Back to All Projects</button>
          </div>
        ) : (
          <div className="project-card" key={proj.id} onClick={() => displayProject(proj.id)}>
            <img src={proj.img} alt={`a screen capture of ${proj.name}`}/>
            <h2 className='project-title'>{proj.name}</h2>
          </div>
        )
      })}
    </section>
  )
}

export default Projects