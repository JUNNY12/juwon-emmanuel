import React from 'react'
import {AiOutlineFolder} from "react-icons/ai"
import {BiLinkExternal} from  "react-icons/bi"

const Card = (props) => {
    console.log(props)
  return (
    <div className='bg-myTextColor p-4 cursor-pointer  hover:translate-y-2 hover:transition-all hover:ease-in'>
        <div className='flex justify-between items-center text-2xl mb-10'>
            <div><AiOutlineFolder/></div>
            <div><BiLinkExternal /></div>
        </div>

        <div className='leading-4 tracking-widest'>
            <h3 className='font-bold text-xl mb-3'>{props.item.title}</h3>
            <p className='mb-3'>{props.item.description}</p>
            <p className='text-gray-700 font-bold text-xl'>
                <span>{props.item.technology.tech1}</span>
                <span>{props.item.technology.tech2}</span>
                <span>{props.item.technology.tech3}</span>
            </p>
        </div>


    </div>
  )
}

export default Card