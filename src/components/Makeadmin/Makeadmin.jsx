import React, { useEffect, useState } from 'react'

const Makeadmin = () => {
    
    const handleAdmin=(e)=>{
        e.preventDefault()
        const form=e.target 
        const email=form.admin.value
       
        fetch(`https://car-doctor-server-six-pi.vercel.app/users/${email}`,{
        method:"PATCH",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({role:'admin'})
      })
      .then(res=>res.json())
      .then(err=>console.log(err))

    }

  return (
    <div className='flex justify-center items-center h-screen' >



        <form  onSubmit={handleAdmin} action="">
        <input type="email" placeholder="Enter email" name='admin' className="input input-bordered w-[600px]" /> 
        <br />
        <button className="btn btn-outline btn-primary text-center mt-3" type='submit'>Make as admin</button>

        </form>
    </div>
  )
}

export default Makeadmin