import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div>
        <form action='/' method='post'>
        <div>
            <label htmlFor="email">Email:</label><br />
            <input type="text" id="username" name="username" required />
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