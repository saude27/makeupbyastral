import React from 'react'
import { servicePreview } from '../Data'

const Services = () => {
  return (
    <div className='px-10 mt-30'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-darkred tracking-wide drop-shadow'>
          Our Services
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servicePreview.map((services, index) => (
                <div key={index} className='flex flex-col items-center mt-5'>
                    <img src={services.img} alt={services.label} className='w-72 h-80 object-cover rounded-lg shadow-lg'/>
                    <h3 className='align-center mt-4 text-lg font-semibold text-darkred tracking-wide'>{services.label}</h3>
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default Services
