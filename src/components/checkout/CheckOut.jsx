import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProviders'
import axios from 'axios'

const CheckOut = () => {
    const Checkout=useLoaderData()
    const {user}=useContext(AuthContext)
    const {title,_id,price,img}=Checkout
    const handleCheckout=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value 
        const date=form.date.value 

        const order={
            customerName:name ,
            date:date,
            img,
            title,
            service_id:_id,
            email:user?.email,
            price:price

        }
        console.log(order)
        fetch('https://car-doctor-server-six-pi.vercel.app/bookings',{
          method:'POST',
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order)
        })
        
    }
  return (
    <div>


<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-3  justify-items-center items-center ">
      

      <div className="rounded-lg bg-white  shadow-lg lg:col-span-3 w-3/4 lg:p-12">
        <form onSubmit={handleCheckout} action="#" className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" name='name' className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date'  className="input input-bordered" required />
        </div> 
    
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={'$'+price}  className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        </div> 
    
          </div>

        

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea placeholder="Your message" className="textarea textarea-bordered textarea-sm h-96 w-full max-w-full" ></textarea>
          </div>

          <div className="mt-4">
          <button type="submit" className="btn btn-block bg-orange-500">Order Confirm</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default CheckOut