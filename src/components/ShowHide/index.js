import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="show-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="main-container">
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {firstName ? (
              <div className="joe-container">
                <p>Joe</p>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="main-container">
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>

            {lastName ? (
              <div className="joe-container">
                <p>Jonas</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
