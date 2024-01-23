import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Mycontext } from '../../Context/Mycontext';

export default function Navbar() {
    // eslint-disable-next-line no-unused-vars
    const [user,setUser] = useContext(Mycontext);
    const navigate = useNavigate();
    function onClickHandler(){
        setUser({status: false})
        navigate('/')
    }
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
            <li>
                <button onClick={onClickHandler}>Logout</button>
            </li>
        </ul>

    </div>
  )
}
