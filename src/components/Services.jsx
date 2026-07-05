import React from 'react';

function Services() {
  return (
    <section className="py-5 bg-light" id="services">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Services</h2>
          <p className="text-muted">Services that I provide to my clients.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow h-100 text-center p-4">
              <div className="mb-3">
                <i className="bi bi-code-slash display-3 text-primary"></i>
              </div>
              <h4>Web Development</h4>
              <p className="text-muted">
                Build responsive and modern websites using HTML, CSS, Bootstrap and React.
              </p>
              <button className="btn btn-outline-primary mt-auto align-self-center">Learn More</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow h-100 text-center p-4">
              <div className="mb-3">
                <i className="bi bi-palette display-3 text-success"></i>
              </div>
              <h4>UI / UX Design</h4>
              <p className="text-muted">
                Design clean, attractive and user-friendly website interfaces.
              </p>
              <button className="btn btn-outline-success mt-auto align-self-center">Learn More</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mx-auto">
            <div className="card border-0 shadow h-100 text-center p-4">
              <div className="mb-3">
                <i className="bi bi-server display-3 text-danger"></i>
              </div>
              <h4>Backend Development</h4>
              <p className="text-muted">
                Create secure REST APIs using Node.js, Express.js and MySQL.
              </p>
              <button className="btn btn-outline-danger mt-auto align-self-center">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;