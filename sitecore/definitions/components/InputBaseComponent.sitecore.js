// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the InputBaseComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'InputBaseComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [ 
    { name: 'ariadescribedby', type: CommonFieldTypes.SingleLineText },
    { name: 'autoComplete', type: CommonFieldTypes.SingleLineText },
    { name: 'autoFocus', type: CommonFieldTypes.Checkbox },
    { name: 'className', type: CommonFieldTypes.SingleLineText },
    { name: 'disabled', type: CommonFieldTypes.Checkbox },
    { name: 'disableInjectingGlobalStyles', type: CommonFieldTypes.Checkbox },
    { name: 'error', type: CommonFieldTypes.Checkbox },
    { name: 'fullWidth', type: CommonFieldTypes.Checkbox },
    { name: 'id', type: CommonFieldTypes.SingleLineText },
    { name: 'multiline', type: CommonFieldTypes.Checkbox },
    { name: 'name', type: CommonFieldTypes.SingleLineText },
    { name: 'placeholder', type: CommonFieldTypes.SingleLineText },
    { name: 'readOnly', type: CommonFieldTypes.Checkbox },
    { name: 'required', type: CommonFieldTypes.Checkbox },
    { name: 'type', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}