<template>
  <div class="example">
    <button @click="showModal">centered modal</button>
    <slim-modal :is-open="isOpen" :is-center="true">
      <h2>centered modal</h2>
      <p>
        <button @click="hideModal">close</button>
      </p>
    </slim-modal>
  </div>
</template>

<script>
  import base from './base.vue'
  export default {
    extends: base
  }
</script>
