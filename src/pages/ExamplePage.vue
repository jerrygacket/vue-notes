<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
          <div class="container">
            no content
          </div>
          <p>{{ message }}</p>
        </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: null
    }
  },
  created () {
    this.message = this.$store.getters.getMessage;
  },
  // computed: {
  //   getMessage() {
  //     return this.$store.getters.getMessage;
  //   }
  // }
}
</script>