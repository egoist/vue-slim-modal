import {play, useComponents} from 'vue-play'
import 'vue-play/dist/vue-play.css'

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
useComponents({
  SlimModal
})

// play components
play({
  SlimModal: {
    'Basic': {
      ...basic,
      example: basicExample
    },
    'Close on click outside': {
      ...clickOutside,
      example: clickOutsideExample
    },
    'Centered': {
      ...centered,
      example: centeredExample
    }
  }
})
