<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
          <div class="container">
            <modalsList />
          </div>
        </section>
    </div>
</template>

<script>
import modalsList from '@/components/ModalsList.vue'

export default {
  components: {
    modalsList
  }
}
</script>