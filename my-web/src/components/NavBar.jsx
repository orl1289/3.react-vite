import React from 'react';
import Lottie from 'lottie-react'
import animationData from "../assets/bg-logo.json"
import { Link } from 'react-router-dom'; // Import Link from React Router

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
              <p class=" text-7xl font-bold bg-gradient-to-br from-blue-700 to-green-400 bg-clip-text text-transparent">
	            OMM
	           </p>
            </div>


            <div className="hidden md:block">
              <ul className="flex space-x-6">
                
                <Link to="/" className="text-white hover:text-orange-500">
                <button class='bg-blue-900 rounded-full w-30 border-white'>CV</button>
                </Link>
                
                <Link to="/resume" className="text-white hover:text-orange-500">
                <button class='bg-blue-900 rounded-full w-30 border-white'>Resume</button>
                </Link>
                <Link to="/" className="text-white hover:text-orange-500">
                <button class='bg-blue-900 rounded-full w-30 border-white'>Blog</button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
   
    );
  }
export default Navbar;
