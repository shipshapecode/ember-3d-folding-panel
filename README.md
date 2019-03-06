ember-3d-folding-panel
==============================================================================

<a href="https://shipshape.io/"><img src="http://i.imgur.com/KVqNjgO.png" width="100" height="100"/></a>

**[ember-3d-folding-panel is built and maintained by Ship Shape. Contact us for Ember.js consulting, development, and training for your project](https://shipshape.io/ember-consulting/)**.

[![npm version](https://badge.fury.io/js/ember-3d-folding-panel.svg)](http://badge.fury.io/js/ember-3d-folding-panel)
[![npm](https://img.shields.io/npm/dm/ember-3d-folding-panel.svg)]()
[![Ember Observer Score](http://emberobserver.com/badges/ember-3d-folding-panel.svg)](http://emberobserver.com/addons/ember-3d-folding-panel)
[![Build Status](https://travis-ci.org/shipshapecode/ember-3d-folding-panel.svg?branch=master)](https://travis-ci.org/shipshapecode/ember-3d-folding-panel)
[![Code Climate](https://codeclimate.com/github/shipshapecode/ember-3d-folding-panel/badges/gpa.svg)](https://codeclimate.com/github/shipshapecode/ember-3d-folding-panel)
[![Test Coverage](https://codeclimate.com/github/shipshapecode/ember-3d-folding-panel/badges/coverage.svg)](https://codeclimate.com/github/shipshapecode/ember-3d-folding-panel/coverage)

Ember-3d-folding-panel is based on [3D Folding Panel](https://codyhouse.co/gem/3d-folding-panel/) by CodyHouse. It aims to make it easily configurable for use with your Ember apps.

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------
`ember install ember-3d-folding-panel`

Usage
------------------------------------------------------------------------------
```hbs
{{folding-panel}}
{{#ember-3d-folding-panel}}
  {{#each model as |item|}}
    {{#item-square item=item}}
      <img class="client-image" src="{{item.imageURL}}">
    {{/item-square}}
  {{/each}}
{{/ember-3d-folding-panel}}
```

`items` are defined as an array of objects, these should contain `heading` and `subheading`.
 You can also display extra info inside of the `item-square`.
 
 The route from the dummy app, which contains an array of items, looks like this:
 ```js
 export default Route.extend({
  model() {
    return [
      {
        heading: 'Client 1',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        panelHeading: 'Client 1',
        panelSubheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?',
        imageURL: 'img/logo1.png',
        panelInfo
      },
      {
        heading: 'Client 2',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        panelHeading: 'Client 2',
        panelSubheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?',
        imageURL: 'img/logo2.png',
        panelInfo
      },
      ...
    ];
  }
});
```
 
 
## Styles

Ember-3d-folding-panel uses Sass for styles. The default styles for the panels are stored in an overridable Sass map. This is accomplished by supplying a `$ember-3d-folding-panel` map with any or all of the keys found in the defaults map below.

```scss
// This is the default map, not what you should use. 
// i.e. you want to define $ember-3d-folding-panel, not $ember-3d-folding-panel-defaults
$ember-3d-folding-panel-defaults: (
  'accent-color': #544173, // Mulled Wine
  'color-1': #363558, // Martinique
  'color-2': #544173, // Mulled Wine
  'color-3': #dadcdc, // Iron
  'color-4': #65d29b, // Emerald
  'color-6': #ffffff, // White
  'dark-color': #363558, // Martinique
  'fold-animation': .5s,
  'fold-color': #dadcdc,
  'fold-content-animation': .2s*(3+1)/2, // replace 3 with number of elements that you want to animate
  'light-color': #ffffff, // White
  'overlay-color': #1c1726, // Bastille
);
```

Under the hood, the addon will merge the default settings and any settings supplied in an `$ember-3d-folding-panel` map and use those to style the panels. Very little, other than this map, should be required to get the panels looking the way you want them to.

### Example styles usages

If you wanted to supply some different colors for the panels, but keep the same animations, your styles.scss might look something like this:
```sass
$ember-3d-folding-panel: (
  'color-1': #ffffff,
  'color-2': #000000,
  'color-3': #ffffff,
  'color-4': #000000
);

// After you define your overrides, make sure to import the styles from the addon!
@import 'ember-3d-folding-panel';
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
