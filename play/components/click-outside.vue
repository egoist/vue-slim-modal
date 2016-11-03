<template>
  <div class="example">
    <button @click="showModal">
      close on click outside the modal
    </button>
    <slim-modal :class="'click-outside'"
      :is-open="isOpen"
      :click-outside="closeOnClickOutside">
      <h2>close on click outside the modal</h2>
      <p>
        <button @click="hideModal">close</button>
      </p>
    </slim-modal>
  </div>
</template>

<script>
  import base from './base.vue'
  export default {
    extends: base,
    methods: {
      closeOnClickOutside() {
        this.isOpen = false
        this.$log('clicked outside!')
      }
    }
  }
</script>
