import React from 'react'
import {Link} from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>
      <ul className='list-unstyled d-flex gap-2'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
