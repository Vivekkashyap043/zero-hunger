import React from 'react'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'

function DonarLogin() {
  let {register,handleSubmit,formState:{errors}} = useForm()

  function onLoginFormSubmit(userCredentialsObject){
  
  }
  return (
    <div>
      <h1 className='text-info text-center'>User Login</h1>
      <form action="" className='w-25 mx-auto mt-5 bg-light p-4 shadow-lg' onSubmit={handleSubmit(onLoginFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" name="username" id="username" className='form-control mb-4' {...register("username",{required:true,minLength:4,maxLength:8})}/>
          {errors.username?.type==="required" && (<p className="text-danger">User Name is required</p>)}
          {errors.username?.type === "minLength" && (<p className='text-danger'>User Name minimum should contain 4 characters</p>)}
          {errors.username?.type === "maxLength" && (<p className='text-danger'>User Name maximum should contain 8 characters</p>)}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" id="password" className='form-control mb-4' {...register("password",{required:true})}/>
          {errors.password?.type==="required" && (<p className="text-danger">Password is required</p>)}
        </div>

        <button type='submit' className='btn btn-success text-light d-block mx-auto'>Login</button>
        <p className="lead text-center">
        Not registered yet? 
        <Link to="/register" className="fs-4 px-3">
          Register
        </Link>
        here
      </p>
      </form>

    </div>
  )
}

export default DonarLogin