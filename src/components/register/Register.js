import React from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {

  let navigate=useNavigate();

  function onVolunteerRegister(){
    navigate('/volunteer-register')
  }

  function onDonarRegister(){
    navigate("/donar-register")
  }

  return (
    <div className='container'>
      <div className='cnt'>
        <div className='in'>
          <div className='head'>
        <h1 className='display-3'>Make a Difference in Your Community Today</h1><br></br>
        </div>
        <h8>
        At Feed the Need Missions, we want you to know that anyone is welcome! And yes, that goes for the folks we’re helping and also those who want to roll up their sleeves and volunteer.
        </h8><br></br>
        <h8 className='display-8'>You see, we’re not just about providing a hot meal, we are also about creating a community where people from all walks of life come together. It doesn’t matter where you’re from or what your story is if you’ve got a heart for helping, you’re exactly who we’re looking for!</h8>
        <br></br><br></br>
        <div className='exbt'>
        <button className='button-28' onClick={onVolunteerRegister}>Join us as a volunteer</button>
        <button className='button-28' onClick={onDonarRegister}>Join us as a donor</button>
        </div>
        </div>
        {/* <div>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-31e0a738395d7341f3b9b448385e8efc-lq" alt=""  className='don'/>
        </div> */}
      </div>
    </div>
  )
}

export default Register