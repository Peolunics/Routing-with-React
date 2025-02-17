import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userID} = useParams()
  return (
    <div className='bg-gray-400 text-center text-grey-500 border-none text-3xl py-4' >User : {userID}</div>
  )
}

export default User