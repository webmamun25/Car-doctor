import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,title, img, price, facility} = service;
    const [Details,setDetails]=useState([])
  useEffect(()=>{
    for( let i of facility){
      setDetails(i.details)
     }
  },[Details])
   console.log(Details)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt={title} className="rounded-xl w-96  object-cover" />
            </figure>
            <div className="card-body flex flex-col items-center text-center">
                <h2 className="card-title text-lg font-semibold mb-2">{title}</h2>
                <p className='text-xl text-orange-500 mb-2'>${price}</p>
                <p className='text-md text-gray-600 mb-4'>{Details}</p>
                <div className="card-actions mt-auto">
                    <button className="btn btn-primary">
                        <Link to={`/checkout/${_id}`}>Book Now</Link>

                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;