import React from 'react';

function Experience() {
  return (
    <section className="py-5 bg-light" id="experience">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Work Experience</h2>
          <p className="text-muted">My professional journey and experience.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-0 shadow h-100">
              <div className="card-body">
                <span className="badge bg-primary mb-3">2026 - Present</span>
                <h4>Full Stack Developer</h4>
                <h6 className="text-primary">working on my own projects </h6>
                <p className="text-muted">
                  Developed responsive web applications using React, Node.js and MySQL. Worked on REST APIs and dashboard development.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow h-100">
              <div className="card-body">
                <span className="badge bg-success mb-3">2022 - 2024</span>
                <h4>Mastering Frontend </h4>
                <h6 className="text-success"></h6>
                <p className="text-muted">
                  Designed modern user interfaces using HTML, CSS, Bootstrap, Tailwind CSS and React.
                </p>
              </div>
            </div>
          </div>

           <div className="col-md-6"> 
            <div className="card border-0 shadow h-100">
              <div className="card-body">
                <span className="badge bg-warning text-dark mb-3">2025 - 2026</span>
                <h4>Backend Development Journey</h4>
                <h6 className="text-warning"></h6>
                <p className="text-muted">
                  Created responsive websites and landing pages using Bootstrap, TailwindCSS ,React ,Node ,Express ,MongoDB ,MySql ,Zustang ,Docker ,Kuberneties.
                </p>
              </div>
            </div>
          </div> 

          <div className="col-md-6">
            <div className="card border-0 shadow h-100">
              <div className="card-body">
                <span className="badge bg-danger mb-3">2026</span>
                <h4>Currently interning</h4>
                <h6 className="text-danger">SRDT (College Internship)</h6>
                <p className="text-muted">
                  Learned frontend development, debugging and website maintenance while working on live projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;