import React from 'react'
import Data from '../../data/Data'
import Card from './card/Card'

const CardData = () => {


    const Items = Data.map((item) => {
        return <Card 
        key={item.id}
        item={item}
         />
    })

  return (
    <div className='grid grid-cols-1 md:grid-cols-1 xmd:grid-cols-2 lg:grid-cols-3 gap-4 xmd:px-20'>
        {Items}
    </div>
  )
}

export default CardData