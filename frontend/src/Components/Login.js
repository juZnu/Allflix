
import axios from 'axios'
import React, { Component } from 'react'
import backend from '../Variables'
// import { Myprovider } from '../Context/Myprovider';
import { Mycontext } from '../Context/Mycontext';

export class Login extends Component {
  static contextType = Mycontext
  constructor(props){
    super(props);
    this.state = {
      isValidUser : false 
    }
  }

  onFormSubmit = (event) =>{
    event.preventDefault()
    const [user,setUser] = this.context
    const data = new FormData(event.target)
    axios.post(backend+'login/',data)
    .then(response =>{
        setUser({ status: true, ...response.data });
        console.log(user)
 
    })
    .catch(error => {
      // this.setState(error);
      this.setState({ isValidUser: true });
        console.error(error);
    } )
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
        {
          this.state.isValidUser ? <div style={{ color: 'red' }}>Invalid Credentials</div>: <></>
        }
        <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required />
        </div>
        <div>
            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name="password" required />
        </div>
        <div>
            <input type="submit" value="Login" />
        </div>
        </form>
      </div>
    )
  }
}

export default Login