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
            <div className="grid items-center tablet:inline-flex">
        
              <Lottie className='h-auto max-w-[5rem] tablet:max-w-[8rem] laptop:max-w-[10rem] desktop:max-w-[13rem]' animationData={animationData}
                loop={1}
                autoplay={true}
                />
            
              <p class=" text-2xl tablet:text-4xl laptop:text-6xl desktop:text-8xl font-bold bg-gradient-to-br from-blue-700 to-green-400 bg-clip-text text-transparent">
	            OMM
	           </p>
            </div>


            <div>
              <ul className="flex space-x-6 desktop:">
                
                <Link to="/" className="text-white hover:text-orange-500">
                <button class='text-sm tablet:text-base laptop:text-lg desktop:text-xl bg-blue-900 rounded-full w-30 border-white'>CV</button>
                </Link>
                
                <Link to="/resume" className="text-white hover:text-orange-500">
                <button class='text-sm tablet:text-base laptop:text-lg desktop:text-xl bg-blue-900 rounded-full w-30 border-white'>Resume</button>
                </Link>
                <Link to="/blog" className="text-white hover:text-orange-500">
                <button class='text-sm tablet:text-base laptop:text-lg desktop:text-xl bg-blue-900 rounded-full w-30 border-white'>Blog</button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
   
    );
  }
export default Navbar;
