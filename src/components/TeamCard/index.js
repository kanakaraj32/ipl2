// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const Team = props => {
  const {details} = props
  const {name, image, id} = details
  return (
    <div className="cont">
      <Link to={`/team-matches/${id}`}>
        <li className="li">
          <img src={image} alt={name} className="img" />
          <p>{name}</p>
        </li>
      </Link>
    </div>
  )
}
export default Team
