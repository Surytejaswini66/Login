// Write your code here
// Write your code here
import './index.css'
import {Component} from 'react'
class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome User</h1>
        <div className="btnContainer">
          <button className="buttoon">Logout</button>
        </div>
      </div>
    )
  }
}
export default Home
