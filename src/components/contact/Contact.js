import React from 'react'
import { useState } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({
    email:"",
    name:"",
    message:""
  })

  const handleFormData = (event) => {
    event.preventDefault()

    const {name, value} = event.target

    setFormData(prevData => {
      return{
        ...prevData,
        [name]:value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormData({
      email:"",
      name:"",
      message:""
    })
    console.log(formData)

  }






  return (
    <div className='px-8 md:px-24 h-screen pt-28'>
      <div className='flex text-xl md:text-2xl lg:4xl gap-4
      items-center justify-center py-4 mb-6
      '>
        <div className='text-myTextColor font-bold ' >04.</div>
        <h2 className='text-white border-b-2 border-b-myTextColor pb-2 text-center'>Get In Touch</h2>
      </div>

      <div className='px-8 xmd:px-20'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='font-bold text-gray-700 text-xl'>Email</label> <br />
            <input 
            className='w-full h-10 outline-none focus:shadow-md focus:shadow-gray-700'
            name = 'email'
            type={`email`}
            value={formData.email}
            onChange={handleFormData}
            />
          </div>

          <div className='mb-3'>
            <label className='font-bold text-gray-700 text-xl'>Name</label> <br />
            <input 
             className='w-full h-10 outline-none focus:shadow-md focus:shadow-gray-700'
              name='name'
              type={`text`}
              value={formData.name}
              onChange={handleFormData}
            />
          </div>

          <div className='mb-3'>
            <label className='font-bold text-gray-700 text-xl'>Message</label> <br />
            <textarea
             rows={3}
             className="w-full outline-none focus:shadow-md focus:shadow-gray-700"
             name='message'
             type={`text`}
             value={formData.message}
             onChange={handleFormData}
             />
          </div>

          <button 
          className='w-full border p-2 text-gray-700
           font-bold text-xl border-myTextColor rounded-lg'>Send Message</button>

        </form>
      </div>


    </div>

  )
}

export default Contact