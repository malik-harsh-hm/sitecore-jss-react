import React from 'react';
import { RichText, Text, Image } from '@sitecore-jss/sitecore-jss-react';
const TeaserComponent = (props) => (
  <div className="pt-3">
    <div className="row">
      <div className="col-sm-8">
        <h4>
          <Text field={props.fields.heading} />
        </h4>
        <span>
          <RichText field={props.fields.content}></RichText>
        </span>
      </div>
      <div className="col-sm-4">
        <Image media={props.fields.img} width="100%" height="100%" />
      </div>
    </div>
  </div>
);
export default TeaserComponent;
