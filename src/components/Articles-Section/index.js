import React from 'react';
import { Placeholder, Text } from '@sitecore-jss/sitecore-jss-react';

const ArticlesSection = (props) => (
  <div className="pt-3" id={`i${props.rendering.uid.replace(/[{}]/g, '')}`}>
    <Text className="border-bottom" field={props.fields.article_heading} tag="h1" />
    <Placeholder name="jss-articles-section" rendering={props.rendering} />
  </div>
);

export default ArticlesSection;
