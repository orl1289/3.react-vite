import React from 'react';
import Lottie from 'lottie-react'
import animationData from "../assets/bg-logo.json"
import { Link } from 'react-router-dom'; // Import Link from React Router

function Navbar() {
    return (
       
    
      <nav className='bg-blue-900 sticky top-0 left-0 right-0 w-full'>
        <div className=" mx-auto px-4">
          <div className="flex justify-between items-center py-4">

            {/*  Inserting the animation*/}
            <div className="inline-grid">
        
            <Lottie className='h-auto max-w-[5rem] tablet:max-w-[8rem] laptop:max-w-[10rem] desktop:max-w-[13rem]' animationData={animationData}
                loop={1}
                autoplay={true}
                />

              <p className='text-sm text-white tablet:text-base laptop:text-lg desktop:text-xl'> Todos los derechos reservados</p>
            </div>


            <div className="md:block">
              <ul className="flex space-x-6">
              <a href="/" className="text-sm text-white hover:text-orange-500 tablet:text-base laptop:text-lg desktop:text-xl">
                CV
              </a>
              <a href="/resume" className="text-sm text-white hover:text-orange-500 tablet:text-base laptop:text-lg desktop:text-xl">
               Resume
              </a>
              <a href="/blog" className="text-sm text-white hover:text-orange-500 tablet:text-base laptop:text-lg desktop:text-xl">
                Blog
              </a>

              </ul>
            </div>
          </div>
        </div>
      </nav>
   
    );
  }
export default Navbar;
