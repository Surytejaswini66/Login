// Write your code here
import './index.css'
import {Component} from 'react'
class Home extends Component {
  state = {islogged: true}

  isloggedIn = () => {
    this.setState(prev => ({
      islogged: !prev.islogged,
    }))
  }
  render() {
    const {islogged} = this.state
    const result = islogged ? 'Please Login' : 'Welcome User'
    const buttonText = islogged ? 'Login' : 'Logout'
    return (
      <div className="container">
        <h1 className="heading">{result}</h1>
        <div className="btnContainer">
          <button className="buttoon" onClick={this.isloggedIn}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
