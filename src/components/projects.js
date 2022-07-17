import {useState, useEffect} from 'react'
import axios from 'axios'
const Projects = () => {
  const [projects, setProjects] = useState([])

  const getProjects = () => {
    axios.get('http://localhost:8000/api/projects')
    .then( (response) => {
      setProjects(response.data)
    })
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <section id="projects">
      Projects go here:
      {projects.map(proj => {
        return(
          <div className="project-card" key={proj.id}>
            <img src={proj.img} />
            <h2>{proj.name}</h2>
            <p>{proj.blurb}</p>
            {/* Add Links when map is working */}

          </div>
        )
      })}
    </section>
  )
}

export default Projects

// (
//   <div key={proj.id} className='project-card'>
//     <img src={proj.img} alt={`a screen capture of ${proj.name}`} />
//     <h2 className="project-name">{proj.name}</h2>

//   </div>
// )