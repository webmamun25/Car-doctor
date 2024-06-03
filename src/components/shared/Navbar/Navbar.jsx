import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/icons/logo.svg'
import { AuthContext } from '../../Providers/AuthProviders'
const Navbar = () => {
    const {logOut,user,loading}=useContext(AuthContext)
    const [loggeduser,setLoggeduser]=useState(null)

    useEffect(()=>{
      
        fetch(`https://car-doctor-server-six-pi.vercel.app/users`)
        .then(res=>res.json())
        .then(data=>{
          setLoggeduser(data)
        }
          
        )
     
       
  

    },[])

     const admin=loggeduser?.find(log=>user?.email=='mama@mami.com' && log?.role=='admin')
     console.log(admin)
  
    const handleSignout=()=>{
      logOut()
      .then(err=>{
        console.log(err)
      })
    }
    const Navitem=<>
    
    <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/order'>Order</Link></li>
          
            {
              admin? <li><Link to='/order'>My dashboard</Link></li>:''
            }
          
           {user?.email ? <>
            <li><Link to='/bookings'>My Bookings</Link></li>
            <li><button onClick={handleSignout}>Logout</button></li>
           </>: <li><Link to='/login' >Login</Link></li>}
            
    </>
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {Navitem}
      </ul>
    </div>
    <a className="btn btn-ghost">
        <img src={logo} className='w-12' alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {Navitem}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
  )
}

export default Navbar