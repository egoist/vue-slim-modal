import {play} from 'vue-play'

// load example components
import basic from './components/basic.vue'
import clickOutside from './components/click-outside.vue'
import centered from './components/centered.vue'

// load example code
import basicExample from 'raw!./code/basic.html'
import clickOutsideExample from 'raw!./code/click-outside.html'
import centeredExample from 'raw!./code/centered.html'

// regisrer the component to play
import SlimModal from '../src'
module.exports.components = {
  SlimModal
}

play('SlimModal', module)
  .add('Basic', {
    ...basic,
    example: basicExample
  })
  .add('Close on click outside', {
    ...clickOutside,
    example: clickOutsideExample
  })
  .add('Centered', {
    ...centered,
    example: centeredExample
  })
