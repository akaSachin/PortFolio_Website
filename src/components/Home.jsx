import React from 'react';
import heroPic from '../assets/Pictures/two.jpg';

function Home() {
  return (
    <>
       <section class="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
           <p class="text-primary fw-bold">HELLO, I'M</p>
           <h1 class="display-3 fw-bold">Sachin Singh</h1>
            <h2 class="display-3">Full Stack Developer</h2>
           <p>Hi, I'm a passionate Full Stack Developer who enjoys building responsive, user-friendly, and efficient web applications. I work with both front-end and back-end technologies to create complete websites and web solutions.</p>
           <button className="btn btn-primary">Contact Me</button>
           <button className="btn btn-secondary">Download My CV</button>
          </div>

          <div className="col-lg-6">
            
        <img class="img-fluid rounded-circle shadow-lg" alt="Profile" src={heroPic}></img>
         </div>
        </div>
         </section>
    </>
  )
}

export default Home