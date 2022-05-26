import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/sc_logo.svg';

const HeaderComponent = (props) => (
  <React.Fragment>
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <NavLink to="/" className="text-dark">
          <img src={logo} alt="Sitecore" />
        </NavLink>
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a
          className="p-2 text-dark"
          href="https://jss.sitecore.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
        <NavLink to="/articles" className="p-2 text-dark">
          Articles
        </NavLink>
      </nav>
    </div>
  </React.Fragment>
);

export default HeaderComponent;
