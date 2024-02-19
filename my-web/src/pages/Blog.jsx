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

<section className='m-auto min-h-screen'>
<h1> En construcción...</h1>
<div className="inline-flex">
        
        <Lottie className='h-auto max-w-[35rem] tablet:max-w-[45rem] laptop:max-w-[50rem] desktop:max-w-[50rem]' animationData={animationData}
          loop={true}
          autoplay={true}
          />
      </div>
           
            </section>	

<footer>
<Footer/>	
</footer>


            </>
            )

            }

            export default Blog