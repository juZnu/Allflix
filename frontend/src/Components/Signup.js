import React, { Component } from 'react'
import axios from 'axios'
import backend from '../Variables'
export class Signup extends Component {
    onFormSubmit  = (event) => {
          event.preventDefault()
          
          const data = new FormData(event.target)
          axios.post(backend+'signup/',data)
            .then(response => {
              console.log(data,response)
            })
            .catch(response => {
              console.log(data,response)
            })

    }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
        <div>
            <label htmlFor="email" >Email:</label><br />
            <input type='email' id='email' name='email'/>
        </div>
        <div>
            <label htmlFor='username'>Username:</label><br />
            <input type='text' id='username' name='username'/>
        </div>
        <div>
            <label htmlFor='password'>Password:</label><br />
            <input type='password' id='password' name='password'/>
        </div>
        <div>
            <label htmlFor="first_name">First Name:</label><br />
            <input type='text' name='first_name' id='first_name'/>
        </div>
        <div>
            <label htmlFor='last_name'>Last Name:</label><br />
            <input type='text' id='last_name' name='last_name'/>
        </div>
        <div>
            <label htmlFor='DOB'>Date of Birth:</label><br />
            <input type='date' id='DOB' name='DOB'/>
        </div>
        <div>
            <input type='submit' value='Signup'/>
        </div>
        </form>
      </div>
    )
  }
}

export default Signup