/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch('https://car-doctor-server-six-pi.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
  return (
    <div>
        <div className='text-center mt-4'>
            <h3 className='text-orange-600'>Services</h3>
            <h2 className='text-5xl'>Our Service Area</h2>
            <p className='w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                services.map(service=><ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
        </div>
    </div>
  )
}

export default Services