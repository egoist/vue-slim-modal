<script>
  export default {
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      showModal() {
        this.isOpen = true
        this.$log('modal is opened!')
      },
      hideModal() {
        this.isOpen = false
        this.$log('modal is closed!')
      }
    }
  }
</script>

<style>
  .example {
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
  }
</style>
