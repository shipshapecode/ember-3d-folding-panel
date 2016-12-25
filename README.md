# Ember-3d-folding-panel

<a href="https://shipshape.io/"><img src="http://i.imgur.com/bU4ABmk.png" width="100" height="100"/></a>

[![npm version](https://badge.fury.io/js/ember-3d-folding-panel.svg)](http://badge.fury.io/js/ember-3d-folding-panel)
[![npm](https://img.shields.io/npm/dm/ember-3d-folding-panel.svg)]()
[![Ember Observer Score](http://emberobserver.com/badges/ember-3d-folding-panel.svg)](http://emberobserver.com/addons/ember-3d-folding-panel)
[![Build Status](https://travis-ci.org/shipshapecode/ember-3d-folding-panel.svg?branch=master)](https://travis-ci.org/shipshapecode/ember-3d-folding-panel)
[![Code Climate](https://codeclimate.com/github/shipshapecode/ember-3d-folding-panel/badges/gpa.svg)](https://codeclimate.com/github/shipshapecode/ember-3d-folding-panel)
[![Test Coverage](https://codeclimate.com/github/shipshapecode/ember-3d-folding-panel/badges/coverage.svg)](https://codeclimate.com/github/shipshapecode/ember-3d-folding-panel/coverage)

Ember-3d-folding-panel is based on [3D Folding Panel](https://codyhouse.co/gem/3d-folding-panel/) by CodyHouse. It aims to make it easily configurable for use with your Ember apps.

## Installation
`ember install ember-3d-folding-panel`

## Usage
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
