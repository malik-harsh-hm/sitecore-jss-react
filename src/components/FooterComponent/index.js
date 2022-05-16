import React from 'react';

const FooterComponent = (props) => (
  <React.Fragment>
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-top">
      <div className="col-sm-4 col-md-3">
        <h3>Services</h3>
        <ul>
          <li>
            <a className="p-2 text-dark" href="#">
              Web design
            </a>
          </li>
          <li>
            <a className="p-2 text-dark" href="#">
              Development
            </a>
          </li>
          <li>
            <a className="p-2 text-dark" href="#">
              Hosting
            </a>
          </li>
        </ul>
      </div>
      <div className="col-sm-4 col-md-3">
        <h3>About</h3>
        <ul>
          <li>
            <a className="p-2 text-dark" href="#">
              Company
            </a>
          </li>
          <li>
            <a className="p-2 text-dark" href="#">
              Team
            </a>
          </li>
          <li>
            <a className="p-2 text-dark" href="#">
              Legacy
            </a>
          </li>
        </ul>
      </div>
      <div className="col-sm-4 col-md-3">
        <h3>Careers</h3>
        <ul>
          <li>
            <a className="p-2 text-dark" href="#">
              Job openings
            </a>
          </li>
          <li>
            <a className="p-2 text-dark" href="#">
              Employee success
            </a>
          </li>
          <li>
            <a className="p-2 text-dark" href="#">
              Benefits
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3">
        <p className="copyright">Company Name © 2022</p>
      </div>
    </div>
  </React.Fragment>
);

export default FooterComponent;
