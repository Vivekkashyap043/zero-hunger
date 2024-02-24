import React from 'react'
import {NavLink} from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <ul className="nav justify-content-end bg-dark p-3 fs-4">
    <li className="nav-item">
      <NavLink className="nav-link" to="">
        HOME
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link target" to="register">
        GET INVOLVED
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link "  to="login">
        LOGIN
      </NavLink>
    </li>
     <li className="nav-item">
      <NavLink className="nav-link "  to="contactus">
        CONTACT US
      </NavLink>
    </li>
  </ul>
  )
}

export default Header;
