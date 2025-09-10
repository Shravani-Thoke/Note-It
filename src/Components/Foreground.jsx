import React from 'react'
import Card from './Card'

const Foreground = ({searchQuery}) => {
  return (
    <div className='fixed w-full h-full top-24 left-5 right-20 z-[3]'>
        <Card searchQuery={searchQuery}/>
    </div>
  )
}

export default Foreground