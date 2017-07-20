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
    }
  },
  render(h, ctx) {
    const { isOpen, isCenter, clickOutside, overlayClass } = ctx.props

    if (!isOpen) return

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
