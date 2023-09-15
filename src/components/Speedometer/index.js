// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div className="image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
        </div>
        <h1 className="heading2">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button1" onClick={this.onAccelerate} type="button">
            Accelerate
          </button>
          <button className="button2" onClick={this.onBrake} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
