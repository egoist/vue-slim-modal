<template>
  <div id="app">
    <github></github>
    <h1>vue-slim-modal</h1>
    <button @click="modals.basic = true">open basic example</button>
    <slim-modal class="basic" :is-open="modals.basic">
      <h2>basic example</h2>
      <pre><code>{{ basicCode }}</code></pre>
      <p>
        <button @click="modals.basic = false">close</button>
      </p>
    </slim-modal>

    <button @click="modals.clickOutside = true">close on click outside the modal</button>
    <slim-modal :class="'click-outside'"
      :is-open="modals.clickOutside"
      :click-outside="closeOnClickOutside">
      <h2>close on click outside the modal</h2>
      <pre><code>{{ clickOutsideCode }}</code></pre>
      <p>
        <button @click="closeOnClickOutside">close</button>
      </p>
    </slim-modal>

    <button @click="modals.center = true">centered modal</button>
    <slim-modal :style="{color: '#333'}" :is-open="modals.center" :is-center="true">
      <h2>centered modal</h2>
      <pre><code>{{ centeredCode }}</code></pre>
      <p>
        <button @click="modals.center = false">close</button>
      </p>
    </slim-modal>
  </div>
</template>

<script>
  import SlimModal from '../src'
  import Github from './Github.vue'
  import basicCode from 'raw!./code/basic.html'
  import clickOutsideCode from 'raw!./code/clickOutside.html'
  import centeredCode from 'raw!./code/centered.html'

  export default {
    data() {
      return {
        modals: {
          basic: false,
          clickOutside: false,
          center: false
        },
        basicCode,
        clickOutsideCode,
        centeredCode
      }
    },
    methods: {
      closeOnClickOutside() {
        this.modals.clickOutside = false
      }
    },
    components: {
      SlimModal,
      Github
    }
  }
</script>

<style>
  body {
    font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica,helvetica neue,Ubuntu,segoe ui,arial,sans-serif;
  }
  button {
    user-select: none;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    outline: none;
    background-color: white;
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      border-color: #ccc;
      background-color: #f9f9f9;
    }
  }
  pre>code {
    color: #3a9282;
    font-family: Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
  }
  h2 {
    margin: 0;
  }
  p {
    margin-bottom: 0;
  }
</style>
