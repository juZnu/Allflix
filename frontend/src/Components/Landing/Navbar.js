import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
                <Link to='/logout'>logout</Link>
            </li>
        </ul>

    </div>
  )
}
