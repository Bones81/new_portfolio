import {useState, useEffect} from 'react'
const Projects = (props) => {
  const [projects, setProjects] = useState([...props.projects])

  return (
    <section id="projects">
      Projects go here:
      {projects.map(proj => {
        return (
          <div key={proj.id} className='project-card'>
            
          </div>
        )
      })}
    </section>
  )
}

export default Projects