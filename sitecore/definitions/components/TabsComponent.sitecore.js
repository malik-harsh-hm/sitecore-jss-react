// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the TabsComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'TabsComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [ 
    { name: 'allowScrollButtonsMobile', type: CommonFieldTypes.Checkbox },
    { name: 'arialabel', type: CommonFieldTypes.SingleLineText },
    { name: 'arialabelledby', type: CommonFieldTypes.SingleLineText },
    { name: 'centered', type: CommonFieldTypes.Checkbox },
    { name: 'className', type: CommonFieldTypes.SingleLineText },
    { name: 'selectionFollowsFocus', type: CommonFieldTypes.Checkbox },
    { name: 'visibleScrollbar', type: CommonFieldTypes.Checkbox },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}