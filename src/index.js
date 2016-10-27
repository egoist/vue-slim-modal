import assign from 'object-assign'

export default {
  name: 'slim-modal',
  functional: true,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    clickOutside: {
      type: Function,
      default: () => () => {}
    },
    isCenter: {
      type: Boolean,
      default: false
    }
  },
  render(h, ctx) {
    const {isOpen, isCenter, clickOutside} = ctx.props
    if (!isOpen) return h()

    const contentStyles = isCenter ? assign(
      {},
      defaultStyles.content,
      {
        top: '50%',
        transform: transformCenter
      }
    ) : defaultStyles.content

    return (
      <div style={defaultStyles.overlay} on-click={clickOutside}>
        <div style={contentStyles} on-click={e => e.stopPropagation()} {...ctx.data}>
          {ctx.children}
        </div>
      </div>
    )
  }
}

const transformDefault = 'translateX(-50%)'
const transformCenter = 'translate(-50%, -50%)'
const defaultStyles = {
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
    maxWidth: '80%',
    transform: transformDefault,
    border: '1px solid #e2e2e2',
    padding: '10px',
    backgroundColor: 'white',
    overflow: 'auto'
  }
}
