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
      default: () => () => null
    },
    isCenter: {
      type: Boolean,
      default: false
    },
    overlayClass: {
      type: String
    },
    isBodyScrollable: {
      type: Boolean,
      default: true
    }
  },
  render(h, ctx) {
    const { isOpen, isCenter, clickOutside, overlayClass, isBodyScrollable } = ctx.props

    if (!isOpen) {
      document.getElementsByTagName('body')[0].classList.remove('no-scroll')
      return
    } 
    
    if (!isBodyScrollable) {
      document.getElementsByTagName('body')[0].classList.add('no-scroll')
    }

    const contentClassNames = `modal${isCenter ? ' modal__center' : ''}`

    const overlayClassNames = `modal-overlay${overlayClass
      ? ` ${overlayClass}`
      : ''}`

    return (
      <div class="modal-wrapper">
        <div class={overlayClassNames} on-click={clickOutside} />
        <div
          class={contentClassNames}
          on-click={e => e.stopPropagation()}
          {...ctx.data}
        >
          {ctx.children}
        </div>
      </div>
    )
  }
}
