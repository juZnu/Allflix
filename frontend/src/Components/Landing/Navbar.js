import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Mycontext } from '../../Context/Mycontext';
import backend from '/Users/jishnuk/Documents/projects/Allflix/frontend/src/Variables.js'

export default function Navbar() {
    // eslint-disable-next-line no-unused-vars
    const [user,setUser] = useContext(Mycontext);
    const [name,setName] = useState('');
    const navigate = useNavigate();
    function onClickHandler(){
        setUser({status: false})
        navigate('/')
    }
    useEffect(() => {
    if (user && user.Token) {
      axios.get(backend + 'data/', {
        headers: {  
          'Authorization': `Token ${user.Token}` // Assuming the API expects a Bearer token
        }
      }).then(response => {
        
        setName(response.data.first_name); 
      }).catch(error => {
        console.error('Error fetching data', error );
      });
    }
  }, [user]);
  return (
    
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/movies'>movies</Link>
            </li>
            <li>
                <Link to='/about'>about</Link>
            </li>
            <h1>{name}</h1>
            <li>
                <button onClick={onClickHandler}>Logout</button>
            </li>
        </ul>

    </div>
  )
}
