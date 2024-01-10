import React, { Component } from 'react'

export class Signup extends Component {
    onFormSubmit  = (event) => {
        event.preventDefault()
        
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
        <div>
            <label htmlFor="email" >Email:</label><br />
            <input type='mail' id='email' name='email'/>
        </div>
        <div>
            <label htmlFor='username'>Username:</label><br />
            <input type='text' id='username' name='username'/>
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