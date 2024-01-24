import React, { useContext } from 'react'
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import {Link, useLocation } from 'react-router-dom'
import { Mycontext } from '../Context/Mycontext';
import Home from './Landing/Home';
import Navbar from './Landing/Navbar';
import Movies from './Landing/Movies';
import About from './Landing/About';


export default function Landing({active}) {
  const [activation,setActivation] = useState(active)
  const [user] = useContext(Mycontext)
  const onClickHandler = () =>{
    setActivation(preactivation => !preactivation);
  }
  const location = useLocation()
  let content;
  switch(location.pathname){
      case '/movies':
      content = <Movies />;
      break;
      case '/about':
      content = <About />;
      break;
      default:
      content = <Home />;

    }
      if (user.status) {
    return <>
    <Navbar />
    {content}
    </>; // Assuming Home is the component for the '/' route
  }
        return (
        <div>
        <div>
          <div>
            {!activation ? <Link to='/' className={`button ${activation ? "active" : ""}`} onClick={onClickHandler}>Login</Link> : <span className="button disabled">Login</span>}
            {activation ? <Link to='/signup' className={`button ${activation ? "" : "activate" }`} onClick={onClickHandler}>Signup</Link> :  <span className="button disabled">Signup</span>}
          </div>
          <div>
            {activation ? <Login /> : <Signup />}
          </div>
        </div>
    </div>
  );
}
