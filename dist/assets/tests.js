'use strict';

define('dummy/tests/acceptance/basic-functionality-test', ['ember-native-dom-helpers', 'qunit', 'dummy/tests/helpers/module-for-acceptance'], function (_emberNativeDomHelpers, _qunit, _moduleForAcceptance) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var run = Ember.run;


  (0, _moduleForAcceptance.default)('Acceptance | basic functionality');

  (0, _qunit.test)('Clicking opens/closes the panel', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
      var done;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              assert.expect(4);

              done = assert.async();
              _context2.next = 4;
              return (0, _emberNativeDomHelpers.visit)('/');

            case 4:
              _context2.next = 6;
              return (0, _emberNativeDomHelpers.click)((0, _emberNativeDomHelpers.findAll)('.item-square')[0]);

            case 6:

              run.later(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        assert.equal((0, _emberNativeDomHelpers.find)('.fold-content h2').textContent.trim(), 'Client 1', 'Heading is correct');
                        assert.equal((0, _emberNativeDomHelpers.find)('.fold-content p').textContent.trim().substring(0, 20), 'Lorem ipsum dolor si', 'Subheading is correct');
                        assert.ok((0, _emberNativeDomHelpers.find)('.main-container').classList.contains('fold-is-open'), 'main-container has fold-is-open class');

                        // Close the panel
                        _context.next = 5;
                        return (0, _emberNativeDomHelpers.click)('.gallery');

                      case 5:

                        assert.ok(!(0, _emberNativeDomHelpers.find)('.main-container').classList.contains('fold-is-open'), 'main-container does not have fold-is-open class');
                        done();

                      case 7:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              })), 200);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  (0, _qunit.test)('Close button closes the panel', function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
      var done;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              assert.expect(4);

              done = assert.async();
              _context3.next = 4;
              return (0, _emberNativeDomHelpers.visit)('/');

            case 4:
              _context3.next = 6;
              return (0, _emberNativeDomHelpers.click)((0, _emberNativeDomHelpers.findAll)('.item-square')[0]);

            case 6:

              run.later(function () {
                assert.equal((0, _emberNativeDomHelpers.find)('.fold-content h2').textContent.trim(), 'Client 1', 'Heading is correct');
                assert.equal((0, _emberNativeDomHelpers.find)('.fold-content p').textContent.trim().substring(0, 20), 'Lorem ipsum dolor si', 'Subheading is correct');
                assert.ok((0, _emberNativeDomHelpers.find)('.main-container').classList.contains('fold-is-open'), 'main-container has fold-is-open class');

                // Close the panel
                (0, _emberNativeDomHelpers.click)('.close-button');

                assert.ok(!(0, _emberNativeDomHelpers.find)('.main-container').classList.contains('fold-is-open'), 'main-container does not have fold-is-open class');
                done();
              }, 200);

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }());
});
define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/close-button/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('close-button', 'Integration | Component | close button', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(0);

    this.render(Ember.HTMLBars.template({
      "id": "YdASIG3d",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"close-button\"],false]],\"hasEval\":false}",
      "meta": {}
    }));
  });
});
define('dummy/tests/integration/components/ember-3d-folding-panel/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('ember-3d-folding-panel', 'Integration | Component | ember 3d folding panel', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(0);

    this.render(Ember.HTMLBars.template({
      "id": "ENsqjYvO",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"ember-3d-folding-panel\"],false]],\"hasEval\":false}",
      "meta": {}
    }));
  });
});
define('dummy/tests/integration/components/folding-panel/component-test', ['ember-qunit', 'ember-native-dom-helpers'], function (_emberQunit, _emberNativeDomHelpers) {
  'use strict';

  var Service = Ember.Service;


  var panelStub = Service.extend({
    foldIsOpen: true,
    selected: {
      heading: 'Client 1',
      subheading: 'Lorem ipsum dolor sit amet, consectetur.',
      panelHeading: 'Panel Heading',
      panelSubheading: 'Panel Subheading',
      imageURL: 'img/logo1.png',
      panelInfo: '<p>Foo</p>'
    }
  });

  (0, _emberQunit.moduleForComponent)('folding-panel', 'Integration | Component | folding panel', {
    integration: true,

    beforeEach: function beforeEach() {
      this.register('service:panel', panelStub);
      this.inject.service('panel', { as: 'panel' });
    }
  });

  (0, _emberQunit.test)('folding-panel renders selected info', function (assert) {

    this.render(Ember.HTMLBars.template({
      "id": "c0+E48A2",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"folding-panel\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _emberNativeDomHelpers.find)('.fold-content h2').textContent.trim(), 'Panel Heading');
    assert.equal((0, _emberNativeDomHelpers.find)('.fold-content em').textContent.trim(), 'Panel Subheading');
    assert.ok((0, _emberNativeDomHelpers.find)('.fold-content').textContent.trim().endsWith('<p>Foo</p>'));
  });
});
define('dummy/tests/integration/components/item-square/component-test', ['ember-qunit', 'ember-native-dom-helpers'], function (_emberQunit, _emberNativeDomHelpers) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('item-square', 'Integration | Component | item square', {
    integration: true
  });

  (0, _emberQunit.test)('item renders correctly', function (assert) {
    this.set('item', {
      heading: 'Heading Test',
      subheading: 'Subheading Test'
    });

    this.render(Ember.HTMLBars.template({
      "id": "v6+ukPbz",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-square\",null,[[\"item\"],[[20,[\"item\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _emberNativeDomHelpers.find)('h2').textContent.trim(), 'Heading Test');
    assert.equal((0, _emberNativeDomHelpers.find)('p').textContent.trim(), 'Subheading Test');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "tdLRACfE",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"item-square\",null,[[\"item\"],[[20,[\"item\"]]]],{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    var text = String((0, _emberNativeDomHelpers.find)('.item-square').textContent.trim());
    assert.ok(text.startsWith('template block text'));
    assert.ok(text.includes('Heading Test'));
    assert.ok(text.includes('Subheading Test'));
    assert.ok(text.endsWith('View More'));
  });
});
define('dummy/tests/styles/app.stylelint-test', [], function () {
  'use strict';

  QUnit.module(' Style Lint ');
  QUnit.test('styles/app.scss should pass style lint', function (assert) {
    assert.expect(1);
    assert.ok(true, '');
  });
});
define('dummy/tests/styles/fonts.stylelint-test', [], function () {
  'use strict';

  QUnit.module(' Style Lint ');
  QUnit.test('styles/fonts.scss should pass style lint', function (assert) {
    assert.expect(1);
    assert.ok(true, '');
  });
});
define('dummy/tests/test-helper', ['dummy/app', '@ember/test-helpers', 'ember-qunit'], function (_app, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create({ autoboot: false }));

  (0, _emberQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/basic-functionality-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/basic-functionality-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/close-button/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/close-button/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ember-3d-folding-panel/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ember-3d-folding-panel/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/folding-panel/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/folding-panel/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/item-square/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-square/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/mixins/layout-classes-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/layout-classes-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/panel-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/panel-test.js should pass ESLint\n\n');
  });
});
define('dummy/tests/unit/mixins/layout-classes-test', ['ember-3d-folding-panel/mixins/layout-classes', 'qunit'], function (_layoutClasses, _qunit) {
  'use strict';

  var EmObj = Ember.Object;


  (0, _qunit.module)('Unit | Mixin | layout classes');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var LayoutClassesObject = EmObj.extend(_layoutClasses.default);
    var subject = LayoutClassesObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/services/panel-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:panel', 'Unit | Service | panel', {
    needs: ['service:device/layout']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
