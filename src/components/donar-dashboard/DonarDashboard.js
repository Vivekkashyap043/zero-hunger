import React from 'react'
import { useLocation } from 'react-router-dom';
import './DonarDashboard.css'

function DonarDashboard() {
  let {state} = useLocation();
  return (
    <div className='container d-flex'>
      <div className='leftcmp'>
        <h1>Welcome back {state.username}</h1>
      </div>
      <div className='rightcmp'>
        Hello
      </div>
    </div>
  )
}

export default DonarDashboard
