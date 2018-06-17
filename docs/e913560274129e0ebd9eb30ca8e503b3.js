// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({11:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error;
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;

},{}],8:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;

},{"./bundle-url":11}],3:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":8}],12:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.h = h;
exports.app = app;
function h(name, attributes /*, ...rest*/) {
  var node;
  var rest = [];
  var children = [];
  var length = arguments.length;

  while (length-- > 2) {
    rest.push(arguments[length]);
  }while (rest.length) {
    if ((node = rest.pop()) && node.pop /* Array? */) {
        for (length = node.length; length--;) {
          rest.push(node[length]);
        }
      } else if (node != null && node !== true && node !== false) {
      children.push(node);
    }
  }

  return typeof name === "function" ? name(attributes || {}, children) : {
    nodeName: name,
    attributes: attributes || {},
    children: children,
    key: attributes && attributes.key
  };
}

function app(state, actions, view, container) {
  var renderLock;
  var invokeLaterStack = [];
  var rootElement = container && container.children[0] || null;
  var oldNode = rootElement && toVNode(rootElement, [].map);
  var globalState = clone(state);
  var wiredActions = clone(actions);

  scheduleRender(wireStateToActions([], globalState, wiredActions));

  return wiredActions;

  function toVNode(element, map) {
    return {
      nodeName: element.nodeName.toLowerCase(),
      attributes: {},
      children: map.call(element.childNodes, function (element) {
        return element.nodeType === 3 // Node.TEXT_NODE
        ? element.nodeValue : toVNode(element, map);
      })
    };
  }

  function render() {
    renderLock = !renderLock;

    var next = view(globalState, wiredActions);
    if (container && !renderLock) {
      rootElement = patch(container, rootElement, oldNode, oldNode = next);
    }

    while (next = invokeLaterStack.pop()) {
      next();
    }
  }

  function scheduleRender() {
    if (!renderLock) {
      renderLock = !renderLock;
      setTimeout(render);
    }
  }

  function clone(target, source) {
    var obj = {};

    for (var i in target) {
      obj[i] = target[i];
    }for (var i in source) {
      obj[i] = source[i];
    }return obj;
  }

  function set(path, value, source) {
    var target = {};
    if (path.length) {
      target[path[0]] = path.length > 1 ? set(path.slice(1), value, source[path[0]]) : value;
      return clone(source, target);
    }
    return value;
  }

  function get(path, source) {
    for (var i = 0; i < path.length; i++) {
      source = source[path[i]];
    }
    return source;
  }

  function wireStateToActions(path, state, actions) {
    for (var key in actions) {
      typeof actions[key] === "function" ? function (key, action) {
        actions[key] = function (data) {
          if (typeof (data = action(data)) === "function") {
            data = data(get(path, globalState), actions);
          }

          if (data && data !== (state = get(path, globalState)) && !data.then // Promise
          ) {
              scheduleRender(globalState = set(path, clone(state, data), globalState));
            }

          return data;
        };
      }(key, actions[key]) : wireStateToActions(path.concat(key), state[key] = state[key] || {}, actions[key] = clone(actions[key]));
    }
  }

  function getKey(node) {
    return node ? node.key : null;
  }

  function setElementProp(element, name, value, isSVG, oldValue) {
    if (name === "key") {} else if (name === "style") {
      for (var i in clone(oldValue, value)) {
        element[name][i] = value == null || value[i] == null ? "" : value[i];
      }
    } else {
      if (typeof value === "function" || name in element && !isSVG) {
        element[name] = value == null ? "" : value;
      } else if (value != null && value !== false) {
        element.setAttribute(name, value);
      }

      if (value == null || value === false) {
        element.removeAttribute(name);
      }
    }
  }

  function createElement(node, isSVG) {
    var element = typeof node === "string" || typeof node === "number" ? document.createTextNode(node) : (isSVG = isSVG || node.nodeName === "svg") ? document.createElementNS("http://www.w3.org/2000/svg", node.nodeName) : document.createElement(node.nodeName);

    if (node.attributes) {
      if (node.attributes.oncreate) {
        invokeLaterStack.push(function () {
          node.attributes.oncreate(element);
        });
      }

      for (var i = 0; i < node.children.length; i++) {
        element.appendChild(createElement(node.children[i], isSVG));
      }

      for (var name in node.attributes) {
        setElementProp(element, name, node.attributes[name], isSVG);
      }
    }

    return element;
  }

  function updateElement(element, oldProps, attributes, isSVG) {
    for (var name in clone(oldProps, attributes)) {
      if (attributes[name] !== (name === "value" || name === "checked" ? element[name] : oldProps[name])) {
        setElementProp(element, name, attributes[name], isSVG, oldProps[name]);
      }
    }

    if (attributes.onupdate) {
      invokeLaterStack.push(function () {
        attributes.onupdate(element, oldProps);
      });
    }
  }

  function removeChildren(element, node, attributes) {
    if (attributes = node.attributes) {
      for (var i = 0; i < node.children.length; i++) {
        removeChildren(element.childNodes[i], node.children[i]);
      }

      if (attributes.ondestroy) {
        attributes.ondestroy(element);
      }
    }
    return element;
  }

  function removeElement(parent, element, node, cb) {
    function done() {
      parent.removeChild(removeChildren(element, node));
    }

    if (node.attributes && (cb = node.attributes.onremove)) {
      cb(element, done);
    } else {
      done();
    }
  }

  function patch(parent, element, oldNode, node, isSVG, nextSibling) {
    if (node === oldNode) {} else if (oldNode == null) {
      element = parent.insertBefore(createElement(node, isSVG), element);
    } else if (node.nodeName && node.nodeName === oldNode.nodeName) {
      updateElement(element, oldNode.attributes, node.attributes, isSVG = isSVG || node.nodeName === "svg");

      var oldElements = [];
      var oldKeyed = {};
      var newKeyed = {};

      for (var i = 0; i < oldNode.children.length; i++) {
        oldElements[i] = element.childNodes[i];

        var oldChild = oldNode.children[i];
        var oldKey = getKey(oldChild);

        if (null != oldKey) {
          oldKeyed[oldKey] = [oldElements[i], oldChild];
        }
      }

      var i = 0;
      var j = 0;

      while (j < node.children.length) {
        var oldChild = oldNode.children[i];
        var newChild = node.children[j];

        var oldKey = getKey(oldChild);
        var newKey = getKey(newChild);

        if (newKeyed[oldKey]) {
          i++;
          continue;
        }

        if (newKey == null) {
          if (oldKey == null) {
            patch(element, oldElements[i], oldChild, newChild, isSVG);
            j++;
          }
          i++;
        } else {
          var recyledNode = oldKeyed[newKey] || [];

          if (oldKey === newKey) {
            patch(element, recyledNode[0], recyledNode[1], newChild, isSVG);
            i++;
          } else if (recyledNode[0]) {
            patch(element, element.insertBefore(recyledNode[0], oldElements[i]), recyledNode[1], newChild, isSVG);
          } else {
            patch(element, oldElements[i], null, newChild, isSVG);
          }

          j++;
          newKeyed[newKey] = newChild;
        }
      }

      while (i < oldNode.children.length) {
        var oldChild = oldNode.children[i];
        if (getKey(oldChild) == null) {
          removeElement(element, oldElements[i], oldChild);
        }
        i++;
      }

      for (var i in oldKeyed) {
        if (!newKeyed[oldKeyed[i][1].key]) {
          removeElement(element, oldKeyed[i][0], oldKeyed[i][1]);
        }
      }
    } else if (node.nodeName === oldNode.nodeName) {
      element.nodeValue = node;
    } else {
      element = parent.insertBefore(createElement(node, isSVG), nextSibling = element);
      removeElement(parent, nextSibling, oldNode);
    }
    return element;
  }
}
},{}],9:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Brackets = exports.Percent = exports.Equation = exports.Division = exports.Multiplication = exports.Question = undefined;

var _hyperapp = require('hyperapp');

var _topics = require('./topics.js');

var _topics2 = _interopRequireDefault(_topics);

var _utils = require('./utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Question = exports.Question = function Question(_ref) {
  var topic = _ref.topic,
      numbers = _ref.numbers,
      showAnswer = _ref.showAnswer,
      key = _ref.key;

  var Question = _topics2.default[topic].component;
  return (0, _hyperapp.h)(Question, { numbers: numbers, showAnswer: showAnswer, key: key });
};

var Multiplication = exports.Multiplication = function Multiplication(_ref2) {
  var numbers = _ref2.numbers,
      _ref2$showAnswer = _ref2.showAnswer,
      showAnswer = _ref2$showAnswer === undefined ? true : _ref2$showAnswer,
      key = _ref2.key;

  var x = numbers[2] || 0;
  var y = numbers[3] || 0;
  return (0, _hyperapp.h)(
    'li',
    { key: key },
    numbers[0] / Math.pow(10, x),
    ' \xD7 ',
    numbers[1] / Math.pow(10, y),
    ' ',
    showAnswer ? (0, _hyperapp.h)(
      'span',
      { 'class': 'answer' },
      '= ',
      numbers[0] * numbers[1] / Math.pow(10, x + y)
    ) : null
  );
};

var Division = exports.Division = function Division(_ref3) {
  var numbers = _ref3.numbers,
      _ref3$showAnswer = _ref3.showAnswer,
      showAnswer = _ref3$showAnswer === undefined ? true : _ref3$showAnswer,
      key = _ref3.key;
  return (0, _hyperapp.h)(
    'li',
    { key: key },
    numbers[0] * numbers[1],
    ' \xF7 ',
    numbers[1],
    ' ',
    showAnswer ? (0, _hyperapp.h)(
      'span',
      { 'class': 'answer' },
      '= ',
      numbers[0]
    ) : null
  );
};

var Equation = exports.Equation = function Equation(_ref4) {
  var numbers = _ref4.numbers,
      _ref4$showAnswer = _ref4.showAnswer,
      showAnswer = _ref4$showAnswer === undefined ? true : _ref4$showAnswer,
      key = _ref4.key;
  return (0, _hyperapp.h)(
    'li',
    { key: key },
    (0, _utils.coeff)(numbers[0]),
    (0, _hyperapp.h)(
      'i',
      null,
      'x'
    ),
    ' ',
    (0, _utils.plusorminus)(numbers[3]),
    ' ',
    numbers[1],
    ' = ',
    numbers[3] === 1 ? numbers[0] * numbers[2] + numbers[1] : numbers[0] * numbers[2] - numbers[1],
    ' ',
    showAnswer ? (0, _hyperapp.h)(
      'span',
      { 'class': 'answer' },
      (0, _hyperapp.h)(
        'i',
        null,
        'x'
      ),
      ' = ',
      numbers[2]
    ) : null
  );
};

var Percent = exports.Percent = function Percent(_ref5) {
  var numbers = _ref5.numbers,
      _ref5$showAnswer = _ref5.showAnswer,
      showAnswer = _ref5$showAnswer === undefined ? true : _ref5$showAnswer,
      key = _ref5.key;
  return (0, _hyperapp.h)(
    'li',
    { key: key },
    numbers[0] * 5,
    '% of ',
    20 * numbers[1],
    ' ',
    showAnswer ? (0, _hyperapp.h)(
      'span',
      { 'class': 'answer' },
      '= ',
      numbers[1] * numbers[0]
    ) : null
  );
};

var Brackets = exports.Brackets = function Brackets(_ref6) {
  var numbers = _ref6.numbers,
      _ref6$showAnswer = _ref6.showAnswer,
      showAnswer = _ref6$showAnswer === undefined ? true : _ref6$showAnswer,
      key = _ref6.key;
  return (0, _hyperapp.h)(
    'li',
    { key: key },
    numbers[0],
    '(',
    (0, _utils.coeff)(numbers[1]),
    (0, _hyperapp.h)(
      'i',
      null,
      'x'
    ),
    ' ',
    (0, _utils.plusorminus)(numbers[2]),
    ' ',
    Math.abs(numbers[2]),
    ') ',
    showAnswer ? (0, _hyperapp.h)(
      'span',
      { 'class': 'answer' },
      ' = ',
      (0, _utils.coeff)(numbers[0] * numbers[1]),
      (0, _hyperapp.h)(
        'i',
        null,
        'x'
      ),
      ' ',
      (0, _utils.plusorminus)(numbers[2]),
      ' ',
      Math.abs(numbers[0] * numbers[2])
    ) : null
  );
};
},{"hyperapp":12,"./topics.js":10,"./utils.js":7}],10:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = require('./components.js');

var topics = {
  mult: {
    name: 'Multiplication',
    intro: 'Evaluate',
    component: _components.Multiplication,
    numbers: [[-12, 12], [-12, 12]]
  },
  div: {
    name: 'Division',
    intro: 'Evaluate',
    component: _components.Division,
    numbers: [[1, 12], [1, 12]]
  },
  eqn: {
    name: 'Equations',
    intro: 'Solve the following equations:',
    component: _components.Equation,
    numbers: [[1, 12], [1, 12], [1, 12], [-1, 1]]
  },
  percent: {
    name: 'Percentages',
    intro: 'Find the answer to the following questions:',
    component: _components.Percent,
    numbers: [[1, 20], [1, 12]]
  },
  multdec: {
    name: 'Multiplying Decimals',
    intro: 'Evaluate',
    component: _components.Multiplication,
    numbers: [[1, 12], [1, 12], [-3, 3], [-3, 3]]
  },
  brackets: {
    name: 'Expanding Brackets',
    intro: 'Expand the following brackets:',
    component: _components.Brackets,
    numbers: [[2, 12], [1, 12], [-12, 12]]
  }
};

exports.default = topics;
},{"./components.js":9}],7:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plusorminus = exports.coeff = exports.mix = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _topics = require('./topics.js');

var _topics2 = _interopRequireDefault(_topics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var random = function random(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      a = _ref2[0],
      b = _ref2[1];

  var zero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var n = Math.floor((b - a + 1) * Math.random()) + a;
  if (zero && n === 0) {
    return random([a, b], zero);
  } else {
    return n;
  }
};

var mix = exports.mix = function mix(topic, n) {
  return Array.from({ length: n }).map(function () {
    return _topics2.default[topic].numbers.map(function (x) {
      return random(x);
    });
  });
};

var coeff = exports.coeff = function coeff(a) {
  return a === 1 ? '' : a;
};

var plusorminus = exports.plusorminus = function plusorminus(n) {
  return n > 0 ? '+' : '-';
};
},{"./topics.js":10}],5:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils.js');

var _topics = require('./topics.js');

var _topics2 = _interopRequireDefault(_topics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = {
  mix: function mix() {
    return function (state) {
      return {
        topics: state.topics.map(function (topic) {
          return Object.assign({}, topic, { questions: (0, _utils.mix)(topic.key, state.numberOfQuestions) });
        })
      };
    };
  },

  toggleShowAnswer: function toggleShowAnswer() {
    return function (state) {
      return {
        showAnswer: !state.showAnswer
      };
    };
  },
  toggleFullScreen: function toggleFullScreen() {
    return function (state) {
      return {
        fullScreen: !state.fullScreen
      };
    };
  },
  addTopic: function addTopic(topic) {
    return function (state) {
      return {
        topics: state.topics.concat({
          key: topic + Date.now(),
          id: topic,
          questions: (0, _utils.mix)(topic, state.numberOfQuestions)
        })
      };
    };
  },
  removeTopic: function removeTopic(key) {
    return function (state) {
      return { topics: state.topics.filter(function (topic) {
          return topic.key !== key;
        })
      };
    };
  },
  fontSizeDown: function fontSizeDown(n) {
    return function (state) {
      return { fontSize: state.fontSize - n };
    };
  },
  fontSizeUp: function fontSizeUp(n) {
    return function (state) {
      return { fontSize: state.fontSize + n };
    };
  },
  removeQuestion: function removeQuestion() {
    return function (state) {
      return {
        numberOfQuestions: state.numberOfQuestions - 1,
        topics: state.topics.map(function (topic) {
          return Object.assign({}, topic, { questions: (0, _utils.mix)(topic.key, state.numberOfQuestions - 1) });
        })
      };
    };
  },
  addQuestion: function addQuestion() {
    return function (state) {
      return {
        numberOfQuestions: state.numberOfQuestions + 1,
        topics: state.topics.map(function (topic) {
          return Object.assign({}, topic, { questions: (0, _utils.mix)(topic.key, state.numberOfQuestions + 1) });
        })
      };
    };
  }
};

exports.default = actions;
},{"./utils.js":7,"./topics.js":10}],4:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils.js');

var state = {
  fullScreen: false,
  topics: [],
  numberOfQuestions: 5,
  fontSize: 24,
  showAnswer: false
};

exports.default = state;
},{"./utils.js":7}],6:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _hyperapp = require('hyperapp');

var _components = require('./components.js');

var _topics = require('./topics.js');

var _topics2 = _interopRequireDefault(_topics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var view = function view(state, actions) {
  return (0, _hyperapp.h)(
    'div',
    { id: 'root' },
    !state.fullScreen ? (0, _hyperapp.h)(
      'header',
      null,
      (0, _hyperapp.h)(
        'h1',
        null,
        'Maths ',
        (0, _hyperapp.h)(
          'strong',
          null,
          'DJ'
        )
      ),
      (0, _hyperapp.h)(
        'div',
        { id: 'topics' },
        Object.entries(_topics2.default).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              topic = _ref2[1];

          return (0, _hyperapp.h)(
            'button',
            { 'class': 'topic', onclick: function onclick() {
                return actions.addTopic(key);
              } },
            topic.name
          );
        })
      )
    ) : '',
    (0, _hyperapp.h)(
      'div',
      { 'class': 'main' },
      state.topics.length > 0 ? (0, _hyperapp.h)(
        'div',
        null,
        (0, _hyperapp.h)(
          'div',
          { 'class': 'actions' },
          (0, _hyperapp.h)(
            'button',
            { onclick: actions.mix },
            (0, _hyperapp.h)('i', { 'class': 'fas fa-sync-alt' }),
            'MIX'
          ),
          (0, _hyperapp.h)(
            'button',
            { onclick: actions.toggleShowAnswer },
            state.showAnswer ? (0, _hyperapp.h)('i', { 'class': 'fas fa-eye-slash' }) : (0, _hyperapp.h)('i', { 'class': 'fas fa-eye' }),
            state.showAnswer ? 'Hide Answers' : 'Show Answers'
          ),
          (0, _hyperapp.h)(
            'button',
            { onclick: actions.toggleFullScreen },
            state.fullScreen ? 'Close Full Screen' : 'Full Screen'
          ),
          (0, _hyperapp.h)(
            'button',
            { onclick: function onclick() {
                return window.print();
              } },
            (0, _hyperapp.h)('i', { 'class': 'fas fa-print' }),
            'Print'
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { 'class': 'controls' },
          (0, _hyperapp.h)(
            'button',
            { disabled: state.fontSize <= 8, onclick: function onclick() {
                return actions.fontSizeDown(2);
              } },
            '-'
          ),
          'Font Size',
          (0, _hyperapp.h)(
            'button',
            { onclick: function onclick() {
                return actions.fontSizeUp(2);
              } },
            '+'
          ),
          (0, _hyperapp.h)(
            'button',
            { disabled: state.numberOfQuestions <= 1, onclick: function onclick() {
                return actions.removeQuestion();
              } },
            '-'
          ),
          'Number of Questions',
          (0, _hyperapp.h)(
            'button',
            { onclick: function onclick() {
                return actions.addQuestion();
              } },
            '+'
          )
        ),
        (0, _hyperapp.h)(
          'ol',
          { id: 'topicQuestions' },
          state.topics.map(function (_ref3) {
            var key = _ref3.key,
                id = _ref3.id,
                questions = _ref3.questions;
            return (0, _hyperapp.h)(
              'li',
              { 'class': 'topic', key: key },
              (0, _hyperapp.h)(
                'h1',
                { style: { fontSize: 1.5 * state.fontSize + 'px' } },
                _topics2.default[id].name,
                ' ',
                (0, _hyperapp.h)(
                  'button',
                  { onclick: function onclick() {
                      return actions.removeTopic(key);
                    } },
                  'x'
                )
              ),
              (0, _hyperapp.h)(
                'h3',
                { style: { fontSize: 0.75 * state.fontSize + 'px' } },
                _topics2.default[id].intro
              ),
              (0, _hyperapp.h)(
                'ol',
                { style: { fontSize: state.fontSize + 'px' }, 'class': 'questions' },
                questions.map(function (numbers, i) {
                  return (0, _hyperapp.h)(_components.Question, {
                    topic: id, numbers: numbers, showAnswer: state.showAnswer, key: key + i + Date.now() });
                })
              )
            );
          })
        )
      ) : (0, _hyperapp.h)(
        'div',
        null,
        (0, _hyperapp.h)(
          'h1',
          null,
          'Welcome to Maths DJ!'
        ),
        (0, _hyperapp.h)(
          'p',
          null,
          'Maths DJ makes it easy to generate questions and answers from a variety of mathematical topics.'
        ),
        (0, _hyperapp.h)(
          'strong',
          null,
          'Choose a topic from the list above to get started!'
        )
      )
    ),
    !state.fullScreen ? (0, _hyperapp.h)(
      'footer',
      null,
      (0, _hyperapp.h)(
        'h2',
        null,
        'Instructions:'
      ),
      (0, _hyperapp.h)(
        'ul',
        null,
        (0, _hyperapp.h)(
          'li',
          null,
          'Select a topic from the list at the top of the page.'
        ),
        (0, _hyperapp.h)(
          'li',
          null,
          'Press the MIX button to generate a new set of questions.'
        ),
        (0, _hyperapp.h)(
          'li',
          null,
          'Click on Show Answers to see the answer to each question.'
        ),
        (0, _hyperapp.h)(
          'li',
          null,
          'Press Full Screen to hide the header, footer and all clutter'
        ),
        (0, _hyperapp.h)(
          'li',
          null,
          'Click on Print to print out the questions as a worksheet.'
        )
      ),
      (0, _hyperapp.h)(
        'p',
        null,
        'Made in Manchester with ',
        (0, _hyperapp.h)(
          'a',
          { href: 'http://hyperapp.js.org' },
          'Hyperapp'
        )
      ),
      (0, _hyperapp.h)(
        'p',
        null,
        (0, _hyperapp.h)('i', { 'class': 'fab fa-twitter' }),
        (0, _hyperapp.h)(
          'a',
          { href: 'http://twitter.com/mathsdj' },
          '@mathsDJ'
        ),
        ' on Twitter'
      ),
      (0, _hyperapp.h)(
        'p',
        null,
        '\xA9 MathsDJ 2018'
      )
    ) : ''
  );
};

exports.default = view;
},{"hyperapp":12,"./components.js":9,"./topics.js":10}],2:[function(require,module,exports) {
'use strict';

require('./css/index.scss');

var _hyperapp = require('hyperapp');

var _actions = require('./js/actions.js');

var _actions2 = _interopRequireDefault(_actions);

var _state = require('./js/state.js');

var _state2 = _interopRequireDefault(_state);

var _view = require('./js/view.js');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var main = (0, _hyperapp.app)(_state2.default, _actions2.default, _view2.default, document.body);
},{"./css/index.scss":3,"hyperapp":12,"./js/actions.js":5,"./js/state.js":4,"./js/view.js":6}],19:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var ws = new WebSocket('ws://' + hostname + ':' + '52489' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[19,2])
//# sourceMappingURL=/docs/e913560274129e0ebd9eb30ca8e503b3.map