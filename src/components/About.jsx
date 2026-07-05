import React from 'react';
import heroPic from '../assets/Pictures/three.jpg';

function About() {
  return (
    <section className="py-5 bg-light" id="About">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">About Me</h2>
          <p className="text-muted">Learn more about my background and experience.</p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src={heroPic}
              alt="Profile"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '400px', width: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-lg-7">
            <h3 className="fw-bold mb-3">Full Stack Web Developer</h3>
            <p className="text-muted">
              Passionate developer with experience in building responsive websites and web applications using modern technologies like HTML, CSS, JavaScript, React, Node.js and MySQL.
            </p>
            <div className="row mt-4">
              <div className="col-md-6">
                <p>
                  <strong>Name :</strong> Sachin Singh
                </p>
                <p>
                  <strong>Email :</strong> akasachin@gmail.com
                </p>
                <p>
                  <strong>Phone :</strong> +91 6306092542
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Experience :</strong> Fresher
                </p>
                <p>
                  <strong>Location :</strong> Uttar Pradesh
                </p>
                <p>
                  <strong>Freelance :</strong> Available
                </p>
              </div>
            </div>
            <button className="btn btn-primary mt-3">Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;