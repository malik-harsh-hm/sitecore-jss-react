import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import deepEqual from 'deep-equal';
import Helmet from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/app.css';

const Layout = ({ route }) => (
  <React.Fragment>
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Helmet>
    <VisitorIdentification />
    <Placeholder name="jss-header" rendering={route} />
    <div className="container">
      <Placeholder name="jss-main" rendering={route} />
    </div>
    <Placeholder name="jss-footer" rendering={route} />
  </React.Fragment>
);
const propsAreEqual = (prevProps, nextProps) => {
  if (deepEqual(prevProps.route, nextProps.route)) return true;

  return false;
};

export default React.memo(Layout, propsAreEqual);
