import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams();
  return (
    <div className='bg-green-400 text-2xl flex justify-center m-10' >User: {userId}</div>
  )
}

export default User