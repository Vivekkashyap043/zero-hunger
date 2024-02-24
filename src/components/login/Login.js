import React from 'react'
import './Login.css'
import { NavLink, Outlet } from 'react-router-dom'

function Login() {
  return (
    <div className='container cnt'>
        <div className="ch1">
            <h3 className='fs-1 mt-5'>Welcome back,</h3>
            <h4>We are excited to see you again</h4>
            <div className="">
              <button className='bt'><NavLink className='nav-link' to="admin">Login as Admin</NavLink></button>
              <button className='bt'> <NavLink className='nav-link' to="volunteer">Login as Volunteer</NavLink></button>
              <button className='bt'><NavLink className='nav-link' to="">Login as Donar</NavLink></button>
            </div>
            <div>
              <p>We are always looking for volunteers at our weekly sites, special events, and different programs we run in various locations. If you want to know what’s specifically needed in your area, just reach out to your local site coordinator. Or if you’re up for it, swing by one of our weekly gatherings and join right in! </p>

              <p>A big thanks to all our volunteers – you are making a huge impact across our communities!</p>
          </div>
        </div>
        <div className="ch2">
          <Outlet />
        </div>

    </div>
  )
}

export default Login
