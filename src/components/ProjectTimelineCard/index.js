import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div>
      <img src={imageUrl} alt="project" className="course-image" />
      <div className="flex-container">
        <h1 className="card-heading">{projectTitle}</h1>
        <div className="flex-container">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a
        href={projectUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="link"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
