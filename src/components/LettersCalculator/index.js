// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
    count: 0,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
      count: event.target.value.length,
    })
  }

  render() {
    const {searchInput, count} = this.state
    return (
      <div className="letters-app">
        <div className="cl">
          <div className="Card1">
            <h1 className="head">Calculate the Letters You Enter</h1>
            <div>
              <label htmlFor="inputElement">Enter the phrase</label>
              <input
                type="text"
                value={searchInput}
                className="inputElement"
                id="inputElement"
                placeholder="Enter the phrase"
                onChange={this.onChangeSearchInput}
              />
              <div>
                <p className="button">No.of letters: {count}</p>
              </div>
            </div>
          </div>
          <div className="Card2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
              alt="letters calculator"
              className="image-icon"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
