import React from 'react';
import Lottie from 'lottie-react'
import animationData from "../assets/bg-logo.json"

function Navbar() {
    return (
       
    
      <nav className='bg-blue-900 sticky top-0 left-0 right-0 w-full'>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">

            {/*  Inserting the animation*/}
            <div className="inline-flex">
        
              <Lottie animationData={animationData}
                loop={1}
                autoplay={true}
                style={{ width: 90, height: 90 }}/>
            </div>


            <div className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                    <a href="#" className="text-white hover:text-orange-500">CV</a>
                </li>
                <li class='bg-blue-900 rounded-full w-30 border-white text-center'>
                    <a href="#" className="text-white hover:text-orange-500">Resume</a>
                </li>
                <li class='bg-blue-900 rounded-full w-30 border-white'>
                    <a href="#" className="text-white hover:text-orange-500">Blog</a>
                </li>
                <li className='text-white'> Todos los derechos reservados</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
   
    );
  }
export default Navbar;
