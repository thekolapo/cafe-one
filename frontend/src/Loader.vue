<template>
  <div id="loader">
    <div class="main-text">
      <span class="big-text">Café One</span>
      <div class="small-text">INNOVATION • COMMUNITY</div>
      <div class="line-shape"></div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'loader',

  mounted() { 
    setTimeout(() => {
      this.navigateTo('/landing');
    }, 2000);
  },

  methods: {
    navigateTo(page) {
      this.$router.push(page); 
    }
  
  }

}

</script>

<style lang="scss">

@import "./assets/styles/sass/loader";

</style>
