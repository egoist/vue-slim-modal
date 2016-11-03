<template>
  <div class="example">
    <button @click="showModal">open basic example</button>
    <slim-modal class="basic" :is-open="isOpen">
      <h2>basic example</h2>
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
