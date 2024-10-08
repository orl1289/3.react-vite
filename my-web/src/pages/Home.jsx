import React from "react";
import "../App.css";
import NavBar2 from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

// !New component
// import Card from "../components/Card.jsx";

import Lottie from "lottie-react";
import animationData from "../assets/rocket.json";

function Blog() {
  return (
    <>
      <header>
        <NavBar2 />
      </header>

      <section className="m-auto min-h-screen">
        <h1> En construcción...</h1>

        <div className="inline-flex">
          <Lottie
            className="h-auto max-w-[35rem] tablet:max-w-[45rem] laptop:max-w-[50rem] desktop:max-w-[50rem]"
            animationData={animationData}
            loop={true}
            autoplay={true}
          />
        </div>
      </section>

      {/* 
  //! This section needs to be updated with the latest blog posts. */}
      {/* <Card
        imageSrc= {forest}
        title="Example Article 1"
        author="John Doe"
        date="February 20th, 2024"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lectus nec metus tristique sodales."
      /> */}

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Blog;
