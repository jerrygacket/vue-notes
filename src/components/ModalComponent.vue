<template>
  <transition name="modal-fade">
  <div class="modal__wrapper" @click="$emit('close')">
    <div class="modal-content" @click.stop="">

      <!-- header -->
      <div class="modal-header">
        <span class="modal-title"> {{ title }} </span>
        <span class="button-close" @click="$emit('close')">×</span>
      </div>

      <!-- body -->
      <div class="modal-body">
        <slot name="body"> Default body </slot>
      </div>

    </div>
  </div>
</transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted () {
    document.body.addEventListener('keyup', e => {
      if (e.code === 'Escape') this.$emit('close');
    })
  },
  computed: {},
  methods: {}
}
</script>

