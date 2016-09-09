import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  model() {
    return [
      {
        heading: 'Client 1',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        imageURL: 'img/logo1.png'
      },
      {
        heading: 'Client 2',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        imageURL: 'img/logo2.png'
      },
      {
        heading: 'Client 3',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        imageURL: 'img/logo3.png'
      },
      {
        heading: 'Client 4',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        imageURL: 'img/logo4.png'
      }
    ];
  }
});
