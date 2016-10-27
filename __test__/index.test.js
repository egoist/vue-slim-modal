const Vue = require('vue')
const SlimModal = require('../dist/vue-slim-modal.common.js')

test('basic', () => {
  const vm = new Vue({
    render: h => (
      <SlimModal isOpen={true} class="modal" />
    )
  }).$mount()
  expect(vm.$el.querySelector('.modal').className).toBe('modal')
})

test('click outside to close', () => {
  return new Promise(resolve => {
    const vm = new Vue({
      data: {
        isOpen: true
      },
      render(h) {
        return (
          <SlimModal
            isOpen={this.isOpen}
            class="modal2"
            clickOutside={() => this.isOpen = false} />
        )
      }
    }).$mount()
    expect(vm.isOpen).toBe(true)
    vm.$el.click()
    expect(vm.isOpen).toBe(false)
    Vue.nextTick(() => {
      expect(vm.$el.$vnode).toBeUndefined()
      resolve()
    })
  })
})

test('centered modal', () => {
  const vm = new Vue({
    render: h => (
      <SlimModal isOpen={true} class="modal3" isCenter={true} />
    )
  }).$mount()
  const {style} = vm.$el.querySelector('.modal3')
  expect(style.top).toBe('50%')
  // bug: seems jsdom cannot read transform
  // expect(style.transform).toBe('translate(-50%, -50%)')
})
