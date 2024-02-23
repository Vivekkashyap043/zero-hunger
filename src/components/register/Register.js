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
        <div>
        <h4 className='inv'>Make a Difference in Your Community Today</h4>
        <p>
        At Feed the Need Missions, we want you to know that anyone is welcome! And yes, that goes for the folks we’re helping and also those who want to roll up their sleeves and volunteer.
        </p>
        <p>You see, we’re not just about providing a hot meal, we are also about creating a community where people from all walks of life come together. It doesn’t matter where you’re from or what your story is – if you’ve got a heart for helping, you’re exactly who we’re looking for.</p>
        <button className='btn  btn-outline-info ms-2' onClick={onVolunteerRegister}>Join us as a volunteer</button>
        <button className='btn  btn-outline-info ms-3' onClick={onDonarRegister}>Join us as a donar</button>
        </div>
        <div>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-31e0a738395d7341f3b9b448385e8efc-lq" alt=""  className='don'/>
        </div>
      </div>
    </div>
  )
}

export default Register
