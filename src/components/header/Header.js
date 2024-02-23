import React from 'react'
import {NavLink} from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <ul className="nav justify-content-end bg  p-3 fs-5">
    <li className="nav-item">
      <NavLink className="nav-link target" to=" ">
        HOME
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link target" to=" ">
        GET INVOLVED
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link target"  to="contactus">
        LOGIN
      </NavLink>
    </li>
     <li className="nav-item">
      <NavLink className="nav-link target"  to="contactus">
        CONTACT US
      </NavLink>
    </li>
  </ul>
  )
}

export default Header
