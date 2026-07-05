import React from 'react';
import heroPic from '../assets/Pictures/one.jpg';

const Project = () => {
  return (
    <section className="py-5" id="projects">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Projects</h2>
          <p className="text-muted">Here are some of my recent projects.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow border-0 h-100">
              <img src={heroPic} className="card-img-top" alt="GitHub Finder" />
              <div className="card-body">
                <h4 className="card-title">GitHub Finder</h4>
                <p className="card-text text-muted">
                  Search GitHub users, view their profiles, repositories, and statistics. Built with React, TailwindCSS, and GitHub REST API.
                </p>
                <div>
                  <span className="badge bg-primary me-2">React</span>
                  <span className="badge bg-success">REST API</span>
                </div>
              </div>
              <div className="card-footer bg-white border-0 pb-3">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card shadow border-0 h-100">
              <img src={heroPic} className="card-img-top" alt="Keeper Notes App" />
              <div className="card-body">
                <h4 className="card-title">Bank Management System</h4>
                <p className="card-text text-muted">
                  Bank Management System is a simple application that helps manage bank operations digitally. It allows users to create customer accounts, deposit and withdraw money, check account details, and view account balances. The system stores customer information securely and makes banking tasks faster, more accurate, and easier to manage.
                </p>
                <div>
                  <span className="badge bg-success me-2">Rest</span>
                  <span className="badge bg-warning text-dark">MySQL</span>
                </div>
              </div>
              <div className="card-footer bg-white border-0 pb-3">
                <a
                  href="https://github.com/akaSachin/Bank_Management_System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card shadow border-0 h-100">
              <img src={heroPic} className="card-img-top" alt="E-Commerce Shop" />
              <div className="card-body">
                <h4 className="card-title">PortFolio Website</h4>
                <p className="card-text text-muted">
                Portfolio Website is a responsive personal portfolio built to showcase my skills, projects, education, and contact information. It provides a clean, modern, and user-friendly interface for visitors to learn more about me and my work.
                </p>
                <div>
                  <span className="badge bg-danger me-2">React</span>
                  <span className="badge bg-info text-dark">Bootstrap</span>
                </div>
              </div>
              <div className="card-footer bg-white border-0 pb-3">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;