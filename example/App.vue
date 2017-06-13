<template>
  <div id="app">
    <button @click="toggleModal">Toggle modal</button>
    <modal :is-open="isOpen" :click-outside="toggleModal" class="custom-modal-class" overlayClass="custom-modal-overlay-class">
      <h2>modal title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere minus mollitia, consequatur quisquam, dicta, consectetur asperiores hic nisi officiis obcaecati fugiat eum cumque praesentium, natus sed qui non nemo voluptatem.</p>
      <p>Click outside to close this modal.</p>
    </modal>
  </div>
</template>

<script>
import Modal from '../src'

export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  },
  components: {
    Modal
  }
}
</script>

<style src="../themes/default.css"></style>
