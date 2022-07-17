import {useState, useEffect} from 'react'
import axios from 'axios'
const Projects = () => {
  const [projects, setProjects] = useState([])
  const [showProject, setShowProject] = useState(false)
  const [showID, setShowID] = useState(null)

  const getProjects = () => {
    axios.get('http://localhost:8000/api/projects')
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
      {projects.map(proj => {
        return !showProject ? (
          <div className="project-card" key={proj.id} onClick={() => displayProject(proj.id)}>
            <img src={proj.img} alt={`a screen capture of ${proj.name}`}/>
            <h2>{proj.name}</h2>
            <p>{proj.blurb}</p>
            <button><a target="_blank" href={proj.liveLink}>Live Link</a></button>
            <button><a target="_blank" href={proj.githubLink}>The Code</a></button>
          </div>
        ) : showID === proj.id ? (
          <div className="project-display" key={"display_" + proj.id}>
            <h1>{proj.name}</h1>
            <p>{proj.blurb}</p>
            <button><a target="_blank" href={proj.liveLink}>Live Link</a></button>
            <button><a target="_blank" href={proj.githubLink}>The Code</a></button>
            <button onClick={resetDisplay}>Back to All Projects</button>
          </div>
        ) : null
      })}
    </section>
  )
}

export default Projects