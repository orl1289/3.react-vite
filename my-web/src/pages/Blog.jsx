import React from 'react';
import '../App.css'
import Navbar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'

import Lottie from 'lottie-react'
import animationData from "../assets/rocket.json"


function Blog (){

return(
	<>

<header>
<Navbar/>
</header>

<section className='b-container m-auto'>
<h1> En construcción...</h1>
<div className="inline-flex">
        
        <Lottie animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: 700, height: 700 }}/>
      </div>
           
            </section>	

<footer>
<Footer/>	
</footer>


            </>
            )

            }

            export default Blog