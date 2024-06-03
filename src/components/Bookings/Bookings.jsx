import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Providers/AuthProviders'
import BookingRow from './BookingRow'

const Bookings = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setBookings]=useState([])
 
    const handleDelete=(id)=>{
      const proceed=confirm("Are you want to delete")
      if(proceed){
        console.log(bookings)
        fetch(`http://localhost:30648/bookings/${id}`,{
          method:"DELETE"
        }
        )
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount>0){
            alert("DELETED SUCCESSFULLY")
            const remaining=bookings.filter(booking=>booking._id!=id)
            setBookings(remaining)
          }
          console.log(data)
        }
        
        
        )
      }
    }
    
    const handleConfirm=(id)=>{
      console.log("confirm clicked")
      fetch(`https://car-doctor-server-six-pi.vercel.app/bookings/${id}`,{
        method:"PATCH",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({status:'confirm'})
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount>0){
          //updated state
          const remaining=bookings.filter(booking=>booking._id!=id)
          const changed=bookings.find(booking=>booking._id===id)
          changed.status='confirm'
          const newBookings=[changed,...remaining]
          setBookings(newBookings)
        }
      })
    }
    
    const url=`https://car-doctor-server-six-pi.vercel.app/bookings?email=${user.email}`
 
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])
    return (
    <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
   
        {
            bookings.map(booking=><BookingRow
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
            handleConfirm={handleConfirm}
            ></BookingRow>)
        }
 
    </tbody>

    
  </table>
</div>
    </div>
  )
}

export default Bookings