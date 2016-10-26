'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _mergeJSXProps = _interopDefault(require('babel-helper-vue-jsx-merge-props'));
var assign = _interopDefault(require('object-assign'));

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

    var contentStyles = isCenter ? assign({}, defaultStyles.content, {
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
        _mergeJSXProps([{ style: contentStyles, on: {
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

module.exports = SlimModal$1;
