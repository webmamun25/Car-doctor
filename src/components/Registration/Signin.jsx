import React, { useContext } from 'react'
import login from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProviders'
const Signin = () => {
    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const handlelogin=(e)=>{
        e.preventDefault()
        const form=e.target 
   
        const email=form.email.value 
        const password=form.password.value 
     
  
        signIn(email,password)
        .then(result=>{
            const user=result.user 
            console.log(user)
            navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
            console.log(error)
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col  lg:flex-row">
    <div className="text-center lg:text-left w-1/2">
     <img src={login} alt="" />
    </div>
    <div className="card h-[500px] mx-auto w-full max-w-sm shadow-2xl bg-base-100">
     <h3 className='text-5xl text-center'>Log In!</h3>
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label flex-col">
            <p  className="label-text ">Forgot password?</p>
            <p className="label-text ">Do you have any account? <Link className='text-blue-500' to='/signup'>Sign up</Link></p>
          </label>
        </div>
        <div className="mt-6">

          <button type='submit' className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Signin