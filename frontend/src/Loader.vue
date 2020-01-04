<template>
  <div id="loader">
    <div id="white-overlay" ref="whiteOverlay"></div>
    <div class="main-content">
      <div class="main-text">
        <span class="big-text">Café One</span>
        <div class="small-text">INNOVATION • COMMUNITY</div>
        <div class="line-shape"></div>
      </div>
    </div>
  </div>
</template>
<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax"

export default {
  name: 'loader',

  mounted() { 
    const { whiteOverlay } = this.$refs;

    TweenMax.to(whiteOverlay, 0.8, 
    {
      'width' : "100%", 
      ease: Power2.easeInOut, 
      delay: 2,
      onComplete: setTimeout(() => {
         this.navigateTo('/landing');
      }, 3000),
    });
    
  },

  methods: {
    navigateTo(page) {
      this.$router.push(page); 
    }
  
  }

}

</script>

<style lang="scss" scoped>

@import "./assets/styles/sass/loader";

</style>
