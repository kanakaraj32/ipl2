// Write your code here
import {Component} from 'react'

import Data from '../MatchCard'

import './index.css'

class Welcome extends Component {
  state = {content: {}}

  componentDidMount() {
    this.raju()
  }

  raju = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const method = data.latest_match_details.map(each => ({
      id: each.id,
      competingTeam: each.competing_team,
    }))
    this.setState({content: method})

    console.log(data)
  }

  render() {
    // eslint-disable-next-line
    const {content} = this.state
    console.log(content)
    return (
      <div className="con">
        <ul>
          {content.map(each => (
            <Data detail={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Welcome
