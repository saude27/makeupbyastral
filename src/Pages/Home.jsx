import React from 'react'
import Services from '../components/Services'
import AboutPreview from '../components/AboutPreview'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row mt-10 mx-4 md:mx-10 items-center md:justify-center md:gap-x-30">
          <div className="flex flex-col text-center md:text-left max-w-md">
            <h1 className="text-5xl font-bold leading-tight ">
              Unleashing The Radiance Of Your <span className='text-darkred'>Natural Beauty</span>.
            </h1>
            <p className="text-xl py-5">
              I work with your vibe and vision to create a look that matches your mood whether it’s subtle elegance or bold expression.
            </p>
            <Link to="/booking">
              <button className="bg-darkred w-30 p-1 transition-all duration-200 hover:shadow-2xl shadow-red-800 cursor-pointer mx-auto md:mx-0">
                <span className="text-white">Book Now</span>
              </button>
            </Link>
        </div>
        <div className="mt-10 md:mt-0 md:ml-10 flex justify-center">
          <img
            src="/images/intro.png"
            alt="Header picture"
            className="w-64 min-w-[250px] h-auto md:w-100 rounded-lg shadow-lg object-cover p-5"
          />
        </div>
      </div>
      <AboutPreview />
      <Services />
      <Testimonials />
      <div className="flex justify-center my-6">
        <Link to="/booking">
          <button className="bg-darkred w-30 p-1 transition-all duration-200 hover:shadow-2xl shadow-red-800 cursor-pointer">
            <span className="text-white">Book Now</span>
          </button>
        </Link>
      </div>
      <Footer />
    </div>
    
  )
}

export default Home