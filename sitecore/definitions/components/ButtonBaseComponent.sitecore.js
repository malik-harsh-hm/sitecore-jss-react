// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ButtonBaseComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'ButtonBaseComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [ 
    { name: 'centerRipple', type: CommonFieldTypes.Checkbox },
    { name: 'className', type: CommonFieldTypes.SingleLineText },
    { name: 'disabled', type: CommonFieldTypes.Checkbox },
    { name: 'disableRipple', type: CommonFieldTypes.Checkbox },
    { name: 'disableTouchRipple', type: CommonFieldTypes.Checkbox },
    { name: 'focusRipple', type: CommonFieldTypes.Checkbox },
    { name: 'focusVisibleClassName', type: CommonFieldTypes.SingleLineText },
    { name: 'tabIndex', type: CommonFieldTypes.Number },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}