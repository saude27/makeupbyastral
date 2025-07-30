import React from 'react'
import { testimonialContent } from '../Data'

const Testimonials = () => {
  return (
    <div className='px-10 mt-20 mb-10'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-darkred tracking-wide drop-shadow'>
        Client Testimonials
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {testimonialContent.map((testimonial, index) => (
          <div key={index} className='bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300'>
            <h3 className='text-lg font-semibold text-darkred mb-2'>{testimonial.name}</h3>
            <p className='text-gray-700 text-base text-center italic'>"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
