import React, { useEffect, useState } from 'react'

const TotalUser = () => {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch('http://localhost:30648/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
  return (
    <div>TotalUser:{users.length}</div>
  )
}

export default TotalUser