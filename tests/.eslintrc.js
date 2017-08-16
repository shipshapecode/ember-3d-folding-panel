module.exports = {
  env: {
    embertest: true
  },
  plugins: ['ember'],
  rules: {
    'ember/avoid-leaking-state-in-components': 'off',
    'ember/named-functions-in-promises': 'off',
    'ember/use-ember-get-and-set': 'off'
  }
};
