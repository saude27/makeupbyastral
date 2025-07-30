import React from 'react'

const AboutPreview = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-30 px-10 mt-30 mb-10'>
      <img src="images/logo.png" alt="About Makeupbyastral" className='w-72 h-80 object-cover rounded-xl shadow-lg mb-6 md:mb-0'/>
      <div className='max-w-xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-darkred mb-4 tracking-wide drop-shadow'>About Us</h2>
        <p className='text-lg text-gray-700 leading-relaxed max-w-100'>
          At <span className='font-semibold text-darkred'>Makeupbyastral</span>, we specialize in providing customized makeup applications for a variety of occasions, including glamorous events, bridal looks, and special photoshoots. Our services are tailored to reflect each client's unique style and personality.
        </p>
        
      </div>
    </div>
  )
}

export default AboutPreview
