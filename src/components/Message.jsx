import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Message = ({name,message,user}) => {
  return (
    <div className={`flex items-center gap-4 ${user?'bg-green-100':null}`}>
      <FontAwesomeIcon icon={faUser} className='p-2 bg-gray-300 rounded-full'/>
      <div className='flex flex-col'>
        <p className='font-semibold'>{name}</p>
        <p className='text-gray-600'>{message}</p>
      </div>
    </div>
  )
}

export default Message