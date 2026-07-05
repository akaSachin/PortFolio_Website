import React from 'react';

function Skills() {
  return (
    <section className="py-5" id="skills">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Skills</h2>
          <p className="text-muted">Technologies and tools I work with.</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 p-4">
              <h4 className="mb-4">Frontend Skills</h4>
              <p className="mb-1">HTML</p>
              <div className="progress mb-3" style={{ height: '20px' }}>
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                  95%
                </div>
              </div>
              <p className="mb-1">CSS</p>
              <div className="progress mb-3" style={{ height: '20px' }}>
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                  85%
                </div>
              </div>
              <p className="mb-1">JavaScript</p>
              <div className="progress mb-3" style={{ height: '20px' }}>
                <div className="progress-bar bg-warning text-dark" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                  95%
                </div>
              </div>
              <p className="mb-1">React</p>
              <div className="progress" style={{ height: '20px' }}>
                <div className="progress-bar bg-info text-dark" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                  90%
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="card shadow-sm border-0 p-4">
              <h4 className="mb-4">Backend Skills</h4>
              <p className="mb-1">Node.js</p>
              <div className="progress mb-3" style={{ height: '20px' }}>
                <div className="progress-bar bg-dark" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                  90%
                </div>
              </div>
              <p className="mb-1">Express.js</p>
              <div className="progress mb-3" style={{ height: '20px' }}>
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '78%' }} aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}>
                  88%
                </div>
              </div>
              <p className="mb-1">MySQL</p>
              <div className="progress mb-3" style={{ height: '20px' }}>
                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '82%' }} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100}>
                  92%
                </div>
              </div>
              <p className="mb-1">Git & GitHub</p>
              <div className="progress" style={{ height: '20px' }}>
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '88%' }} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}>
                  88%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;