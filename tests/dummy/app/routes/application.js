import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  model() {
    return [
      {
        heading: 'Title 1',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.'
      },
      {
        heading: 'Title 2',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.'
      },
      {
        heading: 'Title 3',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.'
      },
      {
        heading: 'Title 4',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.'
      }
    ];
  }
});
