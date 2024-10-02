<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
          <div class="container">
            no content
            <p>{{ getMessage }}</p>
          <input type="text" v-model="message">
          <button class="btn btnPrimary" @click="setMessage">Set message</button>
          </div>
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
  methods: {
    setMessage () {
      this.$store.dispatch('setMessage', this.message);
    }
  },
  computed: {
    getMessage() {
      return this.$store.getters.getMessage;
    }
  }
}
</script>