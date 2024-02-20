import React from "react";

function Card ( {imageSrc, title, author, date, content}){

return(

<section className="h-full max-w-80 border-4 border-red-700 rounded-xl">
<div>
<img src={imageSrc} className="article-image" />    
<h1 className=" text-xl">{title}</h1>
<h2>{author}</h2>
<h3>{date}</h3>
<p className="text-blue">{content}</p>
</div> 
</section>
    
    )

}
export default Card;