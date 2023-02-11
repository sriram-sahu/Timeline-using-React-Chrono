import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  const createTag = eachTag => {
    const {name, id} = eachTag

    return (
      <li className="tag-item" key={id}>
        <p className="tag-item">{name}</p>
      </li>
    )
  }

  return (
    <div>
      <div className="flex-container">
        <h1 className="card-heading">{courseTitle}</h1>
        <div className="flex-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-container">
        {tagsList.map(eachTag => createTag(eachTag))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
