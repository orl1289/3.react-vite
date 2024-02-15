import React from 'react';


function Navbar() {
    return (
       
    
      <nav className='bg-blue-900 sticky top-0 left-0 right-0 w-full'>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <img className="h-8" src="/path/to/logo.png" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <ul className="flex space-x-6">
                <button class='bg-blue-900 rounded-full w-20 border-white'>
                    <a href="#" className="text-white hover:text-orange-500">CV</a>
                </button>
                <button class='bg-blue-900 rounded-full w-20 border-white text-center'>
                    <a href="#" className="text-white hover:text-orange-500">Resume</a>
                </button>
                <button class='bg-blue-900 rounded-full w-20 border-white'>
                    <a href="#" className="text-white hover:text-orange-500">Blog</a>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
   
    );
  }
export default Navbar;
