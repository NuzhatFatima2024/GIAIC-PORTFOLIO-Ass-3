import Header from "../app/components/header"
import Footer from "../app/components/footer" 
import Image from "next/image"

export default function Home() {
  return (
    <main>
      
      <div className="homeContainer">
       
<div className="childContainer1">
<h1 className="welcome">Welcome to My Portfolio</h1>
        <h1 className="name">Nuzhat Fatima</h1> 
        <p>I'm  <span className="browncolor">Next JS Developer</span> </p>
          <p>          I'm also a <span className="pinkColor">WEB DEVELOPER</span>
          </p>
          <p>I'm learning<abbr title="Artificial Intelligence"> AI</abbr> from <abbr title="Governor Inititive Artificial Intelligence Certification">GIAIC</abbr></p>
<p>I have done <abbr title="Masters in Science">M.Sc</abbr> from <abbr title="University Of Karachi">UOK</abbr>
  </p>
  <p>I want to become a cloud Native Applied Generative AI Engineer</p>
 
          
        </div>
        <div className="childContainer2">
        <div className="image-frame">
        <Image
          className="mt-0"
          src="/nuzhat.jpg" 
          alt="Iffat image"
          width={800}
          height={400} 
          
         >
         </Image>
         </div>
      </div>
      </div>
 
         </main>
  );
};
        