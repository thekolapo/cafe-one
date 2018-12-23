<template>
  <div id = "landing">
    <div id="white-overlay" ref="whiteOverlay"></div>
    <div id="nav">
      <img src="./assets/img/cafe-one-logo.png" class="logo">
      <div class="social-links">
        <a href="" target="_blank">Fb</a><br>
        <a href="https://twitter.com/cafeone_ng/" target="_blank">Tw</a><br>
        <a href="https://www.instagram.com/cafeone_nig/" target="_blank">Ig</a>
      </div>
      <!-- <div class="address">Lennox Mall, Admiralty Way, Lekki Phase One.</div> -->
    </div>
    <div class="image-slide-section" ref="bigImageHolder">
      <!-- <img src="./assets/img/image-slide-one.jpg" ref="bigImage"> -->
        <img :src="currentImg" ref="bigImage">
        
        <!-- <transition-group name='fade' tag='div'>
          <div v-for="number in [currentNumber]" :key='number'>
            <img :src="currentImage"/>
          </div>
        </transition-group> -->
    </div>
    <div class="right-side">
      <!-- <div class="text-line-combo">
        <div class="text float-left margin-left-30">Innovation</div>
        <div class="line float-right"></div>
      </div>
      <div class="text-line-combo">
        <div class="text float-right margin-right-30">Community</div>
        <div class="line float-left"></div>
      </div> -->
      <div class="content">
        <div class="header-text">Café One</div>
        <div class="long-text">
          Keytar McSweeney's Williamsburg, readymade leggings try-hard 90's street art letterpress hoodie occupy Wes Anderson Banksy. 
          Asymmetrical viral letterpress, McSweeney's seitan 3 wolf moon drinking vinegar sartorial pour-over messenger bag photo booth 
          umami next level craft beer. Tote bag 8-bit flannel dreamcatcher photo booth. Tofu photo booth American Apparel, cliche brunch 
          swag freegan lomo retro cray Vice gastropub post-ironic +1 pickled. Marfa Tonx next level.
        </div>
      </div>
    </div>
    <div class="row col-sm-12"></div>
    <form class="section-subscribe" v-if="showForm">
      <div class="form-mobile">
        <input type="text" class="text-field" placeholder="Full name">
        <input type="email" class="text-field" placeholder="Email address">
        <input type="number" class="text-field" placeholder="Phone number">
        <button>Submit</button>
      </div>
      <div class="form-non-mobile">
        <input type="text" class="text-field" placeholder="Full name">
        <div class="divider"></div>
        <input type="email" class="text-field" placeholder="Email address">
        <div class="divider"></div>
        <input type="number" class="text-field" placeholder="Phone number">
        <button>Submit</button>
        <div class="checkbox-section">
          <input type="checkbox">
          <span>Send me occassional marketing updates.</span>
        </div>
      </div>
    </form> 
    <div class="section-join-community" v-else>
      <div class="button-join" @click="displayForm()">
        <div class="text">Join</div>
        <img src="./assets/img/arrow.png">
      </div>
      <br>
      <div class="small-text">Join our community and get 10% off coffee on your first visit</div>
    </div>
  </div>
</template>
<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax"

// var imageUrls = ['./assets/img/image-slide-one.jpg', './assets/img/image-slide-two.jpg'];
var imageIndex = 0;
var imageSwitchInterval = 3300;
var images = ['https://res.cloudinary.com/daitiebum/image/upload/v1545113548/image-slide-two.jpg', 'https://res.cloudinary.com/daitiebum/image/upload/v1545113548/image-slide-three.jpg', 'https://res.cloudinary.com/daitiebum/image/upload/v1545115024/image-slide-one.jpg'];

export default {
  data () {
    return {
      showForm: false,
      currentImg: 'https://res.cloudinary.com/daitiebum/image/upload/v1545113548/image-slide-one.jpg',
      currentNumber: 0,
      timer: null
    }
  },

  mounted() { 
    const { bigImage, whiteOverlay } = this.$refs;

    whiteOverlay.style.width = "100%";

    TweenMax.to(whiteOverlay, 1.1, {'opacity' : "0",
      onComplete: setTimeout(() => {
        this.switchImage();
        whiteOverlay.style.display = "none";
      }, 2000),
    });

    // setTimeout(() => {
    //   this.switchImage();
    //   // this.viaJs = require('./assets/img/image-slide-two.jpg') 
    // }, imageSwitchInterval);
    // //  this.startRotation();
  },

  methods: {
    displayForm(){
      this.showForm = true;
    },

    switchImage(){
      this.currentImg = images[imageIndex];
      imageIndex++;
      
      if(imageIndex == images.length){
        imageIndex = 0;
      } 
      // bigImage.src = require('./assets/img/image-slide-two.jpg') ;
      //  document.getElementById("bigImage").style.display = "none";

      setTimeout(() => {
        this.switchImage();
      }, imageSwitchInterval);
    },

    // startRotation: function() {
    //   this.timer = setInterval(this.next, 3000);
    // },

    // stopRotation: function() {
    //   clearTimeout(this.timer);
    //   this.timer = null;
    // },

    // next: function() {
    //   this.currentNumber += 1
    // },

    // prev: function() {
    //   this.currentNumber -= 1
    // }
 
  },

  computed: {
    // currentImage: function() {
    //   return this.images[Math.abs(this.currentNumber) % this.images.length];
    // }
  }
  
}
</script>

<style lang="scss" scoped>

@import "./assets/styles/sass/landing";

</style>
