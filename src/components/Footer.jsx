import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-white pt-5 shadow-sm pb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h3 className="fw-bold">DevPortfolio</h3>
            <p className="text-white-50">
              A modern portfolio website built using React and Bootstrap. Clean, responsive and easy to customize.
            </p>
          </div>
          <div className="col-lg-4 mb-4">
            <h4 className="mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#Home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white text-decoration-none">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h4 className="mb-3">Follow Me</h4>
            <a href="#" className="text-white fs-4 me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white fs-4 me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white fs-4 me-3">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="text-white fs-4">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">© 2026 DevPortfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;