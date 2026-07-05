import React from 'react';
import certPic from '../assets/Pictures/one.jpg';

function Certificates() {
  return (
    <section className="py-5" id="certificates">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Certificates</h2>
          <p className="text-muted">Professional certifications and achievements.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow border-0 h-100">
              <img src={certPic} className="card-img-top" alt="Certificate" />
              <div className="card-body">
                <h5 className="card-title">Full Stack Web Development</h5>
                <p className="text-muted text-secondary mb-0">Issued by ABC Academy</p>
              </div>
              <div className="card-footer bg-white border-0 pb-3">
                <button className="btn btn-primary w-100">View Certificate</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card shadow border-0 h-100">
              <img src={certPic} className="card-img-top" alt="Certificate" />
              <div className="card-body">
                <h5 className="card-title">React Development</h5>
                <p className="text-muted text-secondary mb-0">Issued by XYZ Institute</p>
              </div>
              <div className="card-footer bg-white border-0 pb-3">
                <button className="btn btn-success w-100">View Certificate</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card shadow border-0 h-100">
              <img src={certPic} className="card-img-top" alt="Certificate" />
              <div className="card-body">
                <h5 className="card-title">JavaScript Programming</h5>
                <p className="text-muted text-secondary mb-0">Issued by Tech Learning</p>
              </div>
              <div className="card-footer bg-white border-0 pb-3">
                <button className="btn btn-warning w-100 text-dark">View Certificate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;