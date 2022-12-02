import {Component} from 'react'

import {Loader} from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Team from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {check: false, matter: []}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updata = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      image: each.team_image_url,
    }))
    this.setState({matter: updata})
    console.log(data)
  }

  render() {
    const {check, matter} = this.state
    return (
      <div className="container">
        <div className="con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="image"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
        <div>
          {check ? (
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          ) : (
            <ul className="blogs-list">
              {matter.map(each => (
                <Team details={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
