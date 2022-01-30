import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {loggedIn: false}

  isLoggedIn = () => {
    console.log(this.state)
    this.setState(prevState => ({loggedIn: !prevState.loggedIn}))
  }

  render() {
    const {loggedIn} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <Message isLoggedIn={loggedIn} />
          {loggedIn ? (
            <Logout isLoggedIn={this.isLoggedIn} />
          ) : (
            <Login isLoggedIn={this.isLoggedIn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
