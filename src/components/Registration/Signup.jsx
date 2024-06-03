
import { useContext } from 'react'
import login from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProviders'
const Signup = () => {
    const {createUser}=useContext(AuthContext)
    const handlesignup=(e)=>{
        e.preventDefault()
        const form=e.target 
        const name=form.name.value 
        const email=form.email.value 
        const password=form.password.value 
        const confirm=form.confirm.value 
        console.log(name,email,password,confirm)
        createUser(email,password)
        .then(result=>{
            const user=result.user 
            console.log(user)
            fetch('https://car-doctor-server-six-pi.vercel.app/users',{
          method:'POST',
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
        })

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
    <div className="card  mx-auto w-full max-w-sm shadow-2xl bg-base-100">
     <h3 className='text-5xl text-center'>Sign up!</h3>
      <form onSubmit={handlesignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
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
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name='confirm' placeholder="again password" className="input input-bordered" required />
          <label className="label flex-col">
            
            <p className="label-text ">already have an account? <Link className='text-blue-500' to='/login'>Login</Link></p>
          </label>
        </div>
        <div className="mt-6">

          <button type='submit' className="btn btn-primary">
           Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Signup