<template>
  <div class="wrapper">
<header>
<div class="navbar">
  <div class="container">
    <div class="navbar-content">
      <div class="logo">VUE_CLI</div>
      <ul class="navbar-list">
        <li class="navbar-item" v-for="link in links" :key="link.title">
          <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</header>

  <router-view></router-view>

  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Home', url: '/' },
        { title: 'Example', url: '/example' },
        { title: 'Modals', url: '/modals' },
      ]
    }
  }
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color:blue
  }
}
</style>
