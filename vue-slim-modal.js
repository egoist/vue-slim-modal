(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.SlimModal = factory());
}(this, (function () { 'use strict';

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/;

var index = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey;
    for (key in b) {
      aa = a[key];
      bb = b[key];
      if (aa && nestRE.test(key)) {
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey]);
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb);
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb);
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey];
          }
        }
      } else {
        a[key] = b[key];
      }
    }
    return a
  }, {})
};

function mergeFn (a, b) {
  return function () {
    a.apply(this, arguments);
    b.apply(this, arguments);
  }
}

/* eslint-disable no-unused-vars */
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (e) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index$1 = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var SlimModal$1 = {
  name: 'slim-modal',
  functional: true,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    clickOutside: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    isCenter: {
      type: Boolean,
      default: false
    }
  },
  render: function render(h, ctx) {
    var _ctx$props = ctx.props,
        isOpen = _ctx$props.isOpen,
        isCenter = _ctx$props.isCenter,
        clickOutside = _ctx$props.clickOutside;

    if (!isOpen) return h();

    var contentStyles = isCenter ? index$1({}, defaultStyles.content, {
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)'
    }) : defaultStyles.content;

    return h(
      'div',
      { style: defaultStyles.overlay, on: {
          'click': clickOutside
        }
      },
      [h(
        'div',
        index([{ style: contentStyles, on: {
            'click': function click(e) {
              return e.stopPropagation();
            }
          }
        }, ctx.data]),
        [ctx.children]
      )]
    );
  }
};

var defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  content: {
    position: 'absolute',
    top: '100px',
    left: '50%',
    transform: 'translateX(-50%) ',
    border: '1px solid #e2e2e2',
    padding: '10px',
    backgroundColor: 'white',
    overflow: 'auto'
  }
};

return SlimModal$1;

})));
