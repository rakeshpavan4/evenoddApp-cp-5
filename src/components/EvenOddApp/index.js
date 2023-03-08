import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  countButton = () => {
    const randomNumber = Math.floor(Math.random() * 100)

    this.setState(prevstate => ({count: prevstate.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const value = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <h1 className="heading">count {count}</h1>
        <p className="para">Count is {value}</p>
        <button type="button" className="button" onClick={this.countButton}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
