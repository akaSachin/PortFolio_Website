import React from 'react';

function Contact() {
  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Me</h2>
          <p className="text-muted">Have a question or want to work together? Feel free to contact me.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <h4 className="mb-4">Get In Touch</h4>
                <p>
                  <i className="bi bi-geo-alt-fill text-primary me-2"></i>Lucknow, Uttar Pradesh
                </p>
                <p>
                  <i className="bi bi-envelope-fill text-primary me-2"></i>akasachin@gmail.com
                </p>
                <p>
                  <i className="bi bi-telephone-fill text-primary me-2"></i>+91 6306092542
                </p>
                <p>
                  <i className="bi bi-globe2 text-primary me-2"></i>www.portfolio.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-control" placeholder="Enter subject" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea rows={5} className="form-control" placeholder="Write your message..."></textarea>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    <i className="bi bi-send-fill me-2"></i>Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;