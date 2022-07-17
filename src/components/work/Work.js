import React from 'react'
import CardData from './CardData'



const Work = () => {
    
  return (
    <div className='px-8 md:px-24 h-screen pt-28 mb-6'>
         <div className='flex text-lg md:text-2xl lg:4xl gap-4
         items-center justify-center py-4 mb-6 text-center'>
            <div className='text-myTextColor font-bold '>03.</div>
            <h2 className='text-white border-b-2 border-b-myTextColor pb-2'>Some Things I have Built</h2>
        </div>

        <div>
            <CardData />
        </div>
    </div>
  )
}

export default Work