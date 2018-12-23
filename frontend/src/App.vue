<template>
  <div id="app">
    <router-view></router-view> 
    <!-- <landing-page></landing-page>  -->
  </div>
</template>

<script>
import Landing from './Loader.vue';
// import PaymentOptions from './PaymentOptions.vue';

export default {
  name: 'app', 
  components: {
    landingPage: Landing,
    // paymentOptionsPage: PaymentOptions
  }
}
</script>

<style lang="scss">

@import "./assets/styles/sass/main";

</style>
