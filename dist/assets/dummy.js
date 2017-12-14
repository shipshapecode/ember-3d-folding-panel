"use strict";



define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/close-button/component', ['exports', 'ember-3d-folding-panel/components/close-button/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/ember-3d-folding-panel/component', ['exports', 'ember-3d-folding-panel/components/ember-3d-folding-panel/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/flexi-container', ['exports', 'flexi-layouts/components/flexi-container'], function (exports, _flexiContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexiContainer.default;
    }
  });
});
define('dummy/components/flexi-grid', ['exports', 'flexi-layouts/components/flexi-grid'], function (exports, _flexiGrid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexiGrid.default;
    }
  });
});
define('dummy/components/flexi-layout', ['exports', 'flexi-layouts/components/flexi-layout'], function (exports, _flexiLayout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexiLayout.default;
    }
  });
});
define('dummy/components/folding-panel/component', ['exports', 'ember-3d-folding-panel/components/folding-panel/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/item-square/component', ['exports', 'ember-3d-folding-panel/components/item-square/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/ember-3d-folding-panel/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/components/close-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/close-button/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ember-3d-folding-panel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ember-3d-folding-panel/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/folding-panel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/folding-panel/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/item-square/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/item-square/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/layout-classes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/layout-classes.js should pass ESLint\n\n');
  });

  QUnit.test('addon/services/panel.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/services/panel.js should pass ESLint\n\n');
  });

  QUnit.test('addon/utils.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils.js should pass ESLint\n\n');
  });
});
define('dummy/ember-3d-folding-panel/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/components/close-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/close-button/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ember-3d-folding-panel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ember-3d-folding-panel/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/folding-panel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/folding-panel/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/item-square/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/item-square/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/services/panel.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/services/panel.js should pass ESLint\n\n');
  });
});
define('dummy/ember-3d-folding-panel/tests/styles/app.stylelint-test', [], function () {
  'use strict';

  QUnit.module(' Style Lint ');
  QUnit.test('styles/app.scss should pass style lint', function (assert) {
    assert.expect(1);
    assert.ok(true, '');
  });
});
define('dummy/ember-3d-folding-panel/tests/styles/fonts.stylelint-test', [], function () {
  'use strict';

  QUnit.module(' Style Lint ');
  QUnit.test('styles/fonts.scss should pass style lint', function (assert) {
    assert.expect(1);
    assert.ok(true, '');
  });
});
define('dummy/event_dispatcher', ['exports', 'ember-native-dom-event-dispatcher'], function (exports, _emberNativeDomEventDispatcher) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberNativeDomEventDispatcher.default;
    }
  });
});
define('dummy/helpers/-inject-layout', ['exports', 'flexi-layouts/helpers/-inject-layout'], function (exports, _injectLayout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _injectLayout.default;
    }
  });
  Object.defineProperty(exports, 'injectLayout', {
    enumerable: true,
    get: function () {
      return _injectLayout.injectLayout;
    }
  });
});
define('dummy/initializers/component-styles', ['exports', 'ember-component-css/pod-names', 'dummy/mixins/style-namespacing-extras'], function (exports, _podNames, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  var Component = Ember.Component,
      ComponentLookup = Ember.ComponentLookup,
      computed = Ember.computed,
      alias = Ember.computed.alias,
      getOwner = Ember.getOwner;


  ComponentLookup.reopen({
    componentFor: function componentFor(name, owner) {
      owner = owner.hasRegistration ? owner : getOwner(this);

      if (_podNames.default[name] && !owner.hasRegistration('component:' + name)) {
        owner.register('component:' + name, Component);
      }
      return this._super.apply(this, arguments);
    }
  });

  Component.reopen(_styleNamespacingExtras.default, {
    styleNamespace: computed({
      get: function get() {
        return _podNames.default[this.get('_componentIdentifier')] || '';
      }
    }),

    // componentCssClassName: deprecatingAlias('styleNamespace', {
    //   id: 'ember-component-css.deprecate-componentCssClassName',
    //   until: '0.7.0',
    // }),

    componentCssClassName: alias('styleNamespace'),

    init: function init() {
      this._super.apply(this, arguments);

      if (this.get('_shouldAddNamespacedClassName')) {
        this.classNames = this.classNames.concat(this.get('styleNamespace'));
      }
    }
  });

  function initialize() {}

  exports.default = {
    name: 'component-styles',
    initialize: initialize
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/install-devtools', ['exports', 'ember-chrome-devtools/initializers/install-devtools'], function (exports, _installDevtools) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _installDevtools.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _installDevtools.initialize;
    }
  });
});
define('dummy/initializers/route-styles', ['exports', 'ember-component-css/pod-names'], function (exports, _podNames) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  var Router = Ember.Router;
  var getOwner = Ember.getOwner;


  Router.reopen({
    didTransition: function didTransition(routes) {
      this._super.apply(this, arguments);

      var classes = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var route = _step.value;

          var currentPath = route.name.replace(/\./g, '/');

          if (_podNames.default[currentPath]) {
            getOwner(this).lookup('controller:' + route.name).set('styleNamespace', _podNames.default[currentPath]);
            classes.push(_podNames.default[currentPath]);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      getOwner(this).lookup('controller:application').set('routeStyleNamespaceClassSet', classes.join(' '));
    }
  });

  function initialize() {}

  exports.default = {
    name: 'route-styles',
    initialize: initialize
  };
});
define('dummy/mixins/style-namespacing-extras', ['exports', 'ember-component-css/mixins/style-namespacing-extras'], function (exports, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _styleNamespacingExtras.default;
    }
  });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('dummy/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route,
      htmlSafe = Ember.String.htmlSafe;

  var panelInfo = htmlSafe('<p>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus tempora nostrum\n  aut quam praesentium veritatis nisi, odio eius, voluptatibus, iure neque commodi\n  corrupti, inventore laborum fugiat itaque. Pariatur rem veritatis earum quia\n  maxime praesentium accusantium ipsam veniam tenetur hic tempora, unde ipsa\n  esse, aut est repellendus porro, maiores corporis illo!\n</p>\n<p>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus tempora nostrum\n  aut quam praesentium veritatis nisi, odio eius, voluptatibus, iure neque commodi\n  corrupti, inventore laborum fugiat itaque. Pariatur rem veritatis earum quia\n  maxime praesentium accusantium ipsam veniam tenetur hic tempora, unde ipsa\n  esse, aut est repellendus porro, maiores corporis illo!\n</p>\n<p>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quidem, dolor!\n  Necessitatibus libero suscipit voluptatum, ex voluptates. Ab, sit nam eum,\n  officiis natus sunt totam aperiam id quo sed obcaecati itaque hic quia, facilis\n  magni est sequi minima ex placeat commodi et modi eos consectetur recusandae.\n  Adipisci quaerat voluptatum dolorem doloribus, ullam molestiae praesentium,\n  saepe, voluptate quasi suscipit iure. Ipsam, iste excepturi dolore, explicabo\n  numquam debitis ducimus laudantium? Aperiam perferendis accusantium quis magnam,\n  odit doloribus, officia nesciunt voluptatum quidem voluptatibus veritatis temporibus\n  adipisci dignissimos dolor quod beatae aliquam similique expedita! Distinctio\n  rem tempora temporibus molestias veritatis accusamus ipsa pariatur iusto!\n</p>');

  exports.default = Route.extend({
    model: function model() {
      return [{
        heading: 'Client 1',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        panelHeading: 'Client 1',
        panelSubheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?',
        imageURL: 'img/logo1.png',
        panelInfo: panelInfo
      }, {
        heading: 'Client 2',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        panelHeading: 'Client 2',
        panelSubheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?',
        imageURL: 'img/logo2.png',
        panelInfo: panelInfo
      }, {
        heading: 'Client 3',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        panelHeading: 'Client 3',
        panelSubheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?',
        imageURL: 'img/logo3.png',
        panelInfo: panelInfo
      }, {
        heading: 'Client 4',
        subheading: 'Lorem ipsum dolor sit amet, consectetur.',
        panelHeading: 'Client 4',
        panelSubheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laboriosam?',
        imageURL: 'img/logo4.png',
        panelInfo: panelInfo
      }];
    }
  });
});
define('dummy/services/device/layout', ['exports', 'dummy/config/environment', 'flexi-layouts/services/device/layout'], function (exports, _environment, _layout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _layout.default.extend({
    breakpoints: _environment.default.flexi.breakpoints
  });
});
define('dummy/services/panel', ['exports', 'ember-3d-folding-panel/services/panel'], function (exports, _panel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _panel.default;
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KNErTTFR", "block": "{\"symbols\":[\"item\"],\"statements\":[[6,\"header\"],[7],[0,\"\\n  \"],[6,\"h1\"],[7],[6,\"span\"],[9,\"class\",\"pacifico\"],[7],[0,\"ember\"],[8],[0,\" 3D Folding Panel\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"folding-panel\"],false],[0,\"\\n\"],[4,\"ember-3d-folding-panel\",null,null,{\"statements\":[[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[4,\"item-square\",null,[[\"item\"],[[19,1,[]]]],{\"statements\":[[0,\"      \"],[6,\"img\"],[9,\"class\",\"client-image\"],[10,\"src\",[26,[[19,1,[\"imageURL\"]]]]],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});


define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
