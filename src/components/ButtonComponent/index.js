import * as React from 'react';
import './button.css';

// type SitecoreFields = {
//   label: string;
//   primary: boolean;
// };

// type Props = {
//   /**
//    * Authorable fields
//    */
//   fields: SitecoreFields;
//   /**
//    * Non-Authorable fields
//    */
//   size: 'small' | 'medium' | 'large';
//   /**
//    * Handlers
//    */
//   onClick?: () => void;
// };

// const ButtonComponent: React.FunctionComponent<Props> = (props) => (
//   <React.Fragment>
//     <button
//       type="button"
//       className={props.fields.primary ? 'storybook-button--primary' : 'storybook-button--secondary'}
//       {...props}
//     >
//       {props.fields.label}
//     </button>
//   </React.Fragment>
// );

const ButtonComponent = (props) => (
  <React.Fragment>
    <button
      type="button"
      className={props.fields.primary ? 'storybook-button--primary' : 'storybook-button--secondary'}
      {...props}
    >
      {props.fields.label}
    </button>
  </React.Fragment>
);

export default ButtonComponent;
