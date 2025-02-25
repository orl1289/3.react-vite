import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/bg-logo.json";
import { Link } from "react-router-dom"; // Import Link from React Router

function NavBar() {
  return (
    <nav className=" bg-current sticky z-10 top-0 left-0 right-0 box-border w-full">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/*  Inserting the animation*/}
          <div className="h-full grid items-center tablet:inline-flex">
            <Lottie
              className="max-w-[3rem] tablet:max-w-[5rem] laptop:max-w-[7rem]"
              animationData={animationData}
              loop={1}
              autoplay={true}
            />

            <p class=" text-2xl tablet:text-3xl laptop:text-6xl font-bold bg-gradient-to-br from-blue-700 to-green-400 bg-clip-text text-transparent">
              OMM
            </p>
          </div>

          <div>
            <ul className="flex space-x-6 desktop:">
              <Link to="/" className="text-white hover:text-orange-500">
                <button class="text-sm tablet:text-base laptop:text-lg desktop:text-xl bg-inherit rounded-full w-30 border-white">
                  Español
                </button>
              </Link>

              {/*//! This needs to be updated as soon as the French section is ready  */}
              <Link to="/english" className="text-white hover:text-orange-500">
                <button class="text-sm tablet:text-base laptop:text-lg desktop:text-xl bg-inherit rounded-full w-30 border-white">
                  English
                </button>
              </Link>

              <Link to="/french" className="text-white hover:text-orange-500">
                <button class="text-sm tablet:text-base laptop:text-lg desktop:text-xl bg-inherit rounded-full w-30 border-white">
                  Français
                </button>
              </Link>
              {/*//! This needs to be updated as soon as the Blog section is ready  */}
              {/*<Link to="/blog" className="text-white hover:text-orange-500">
                <button class="text-sm tablet:text-base laptop:text-lg desktop:text-xl bg-inherit rounded-full w-30 border-white">
                  Blog
                </button>
              </Link>*/}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
