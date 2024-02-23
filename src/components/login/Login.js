import React from 'react'

import {Outlet,NavLink} from 'react-router-dom'

function Login() {
  return (
    <div className='row'>
      <div className='col-lg-8'>
          <Outlet/>
      </div>
      <div className='col-lg-6'>
                
      <ul className="nav justify-content-center bg-dark mt-5">
      <li className="nav-item">
        <NavLink className="nav-link" to="">
          Home
        </NavLink>
      </li>
      </ul>
      </div>
     
    </div>
  )
}

export default Login