# vue-slim-modal

[![NPM version](https://img.shields.io/npm/v/vue-slim-modal.svg?style=flat-square)](https://npmjs.com/package/vue-slim-modal) [![NPM downloads](https://img.shields.io/npm/dm/vue-slim-modal.svg?style=flat-square)](https://npmjs.com/package/vue-slim-modal) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-slim-modal/master.svg?style=flat-square)](https://circleci.com/gh/egoist/vue-slim-modal)

## Features

- Functional component
- Minimal design
- Light-weight, 1KB and that's all!

## Install

```bash
yarn add vue-slim-modal
```

CDN: [UNPKG](https://unpkg.com/vue-slim-modal/) | [jsDelivr](http://cdn.jsdelivr.net/npm/vue-slim-modal/)

## Usage

```vue
<template>
  <div id="example">
    <button @click="toggle">Toggle Modal</button>
    <modal :is-open="isOpen">
      <h2>title></h2>
      <p>text goes here...</p>
    </modal>
  </div>
</template>

<script>
import Modal from 'vue-slim-modal'

export default {
  components: { Modal },
  data() {
    return { 
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<!-- Optionally use our default style -->
<style src="vue-slim-modal/themes/default.css"></style>
```

Vist https://egoistian.com/vue-slim-modal ([source code](./example)) for an online demo.

## Props

### `<Modal>`

Add attributes excepts below props will go to `.modal` element, eg: `<Modal class="foo" />` results in:

```html
<div class="modal-overlay">
  <div class="foo modal">
  </div>
</div>
```

#### isOpen

Type: `boolean`<br>
Default: `false`

#### isCenter

Type: `boolean`<br>
Default: `false`

Position the modal at absolute center, by default it's 100px from the top.

#### clickOutside

Type: `function`<br>
Default: `noop`

The function to invoke as user clicks outside the modal.

#### overlayClass

Type: `string`<br>
Default: `undefined`

Add extra class name to `.modal-overlay` element.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

### Development

```bash
# to develop with vue-play
npm run play

# to publish
npm run build
```

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
