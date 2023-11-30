import React from 'react'

const Button = ({name}) => {
    return (
      <div className='flex'>
      <button className='px-5 py-2 m-2 bg-slate-200 rounded-md'>{name}</button>
      </div>
    )
  }
  
export default Button
