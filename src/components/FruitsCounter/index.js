// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mCount: 0, bCount: 0}

  incMango = () => {
    this.setState(preCount => ({mCount: preCount.mCount + 1}))
  }

  incBanana = () => {
    this.setState(preCount => ({bCount: preCount.bCount + 1}))
  }

  render() {
    const {mCount, bCount} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div>
            <h1>
              Raghu ate <span>{mCount}</span> mangoes <span>{bCount}</span>
              bananas
            </h1>

            <div className="bottomContainer">
              <div className="imageCard">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                />
                <button type="button" onClick={this.incMango}>
                  Eat Mango
                </button>
              </div>
              <div className="imageCard">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="mango"
                />
                <button type="button" onClick={this.incBanana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
