import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage (){

    return (
    <>
    <div className="text-4xl"> Page not found. Sorry!!</div>
    <div className="text-4xl"> <Link to='/'> Go back to home</Link></div>
    
    </>
    );
    

}





