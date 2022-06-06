// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ListItemComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'ListItemComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [ 
    { name: 'autoFocus', type: CommonFieldTypes.Checkbox },
    { name: 'button', type: CommonFieldTypes.Checkbox },
    { name: 'className', type: CommonFieldTypes.SingleLineText },
    { name: 'dense', type: CommonFieldTypes.Checkbox },
    { name: 'disabled', type: CommonFieldTypes.Checkbox },
    { name: 'disableGutters', type: CommonFieldTypes.Checkbox },
    { name: 'disablePadding', type: CommonFieldTypes.Checkbox },
    { name: 'divider', type: CommonFieldTypes.Checkbox },
    { name: 'focusVisibleClassName', type: CommonFieldTypes.SingleLineText },
    { name: 'selected', type: CommonFieldTypes.Checkbox },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}