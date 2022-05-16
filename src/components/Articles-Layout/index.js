import React from 'react';
import { Placeholder, getChildPlaceholder, getFieldValue } from '@sitecore-jss/sitecore-jss-react';

const ArticlesLayout = (props) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <Placeholder name="jss-articles-layout" rendering={props.rendering} />
      </div>
    </div>
  );
};

export default ArticlesLayout;
