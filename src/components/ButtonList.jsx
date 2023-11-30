import Button from './Button'
import React from 'react'
const list = ["All","Gaming","News","sports","React","Bikes","cricket","Harry"];
const ButtonList = () => {
  return (
    <div className='flex'>
      {
        list.map((item) => <Button key={crypto.randomUUID()} name={item}/>)
      }
    </div>
  )
}

export default ButtonList
