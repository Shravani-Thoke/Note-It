import React from 'react'
import Card from './Card'

const Foreground = ({ searchQuery }) => {
  return (
    <div className='absolute top-24 left-0 right-0 bottom-0 overflow-auto w-full z-10'>
        <Card searchQuery={searchQuery} />
    </div>
  )
}

export default Foreground
