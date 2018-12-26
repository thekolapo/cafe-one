<template>
  <div id = "landing">
    <div id="white-overlay" ref="whiteOverlay"></div>
    <div id="nav">
      <div class="social-links">
        <a href="" target="_blank">Fb</a><br>
        <a href="https://twitter.com/cafeone_ng/" target="_blank">Tw</a><br>
        <a href="https://www.instagram.com/cafeone_nig/" target="_blank">Ig</a>
      </div>
    </div>
    <div class="image-slide-section" ref="bigImageHolder">
      <img :src="currentImg" ref="bigImage" class="big-image">
      <div class="logo-slogan">
        <img src="./assets/img/logo.png" class="cafe-one-logo">
        <div class="slogan">Innovation meets community </div>
      </div>    
    </div>
    <div class="right-side">
      <div class="content">
        <form class="form-section" v-if="showForm">
          <div class="header-text">Join our mailing list</div>
          <div class="line-divider margin-bottom-56"></div>
          <div class="label">Your full name</div>
          <input type="text" class="input-field" v-model="fullName">
          <div class="label">Email address</div>
          <input type="text" class="input-field" v-model="email">
          <div class="label">Phone number</div>
          <input type="text" class="input-field" v-model="phoneNumber">
          <div class="checkbox-section">
            <input type="checkbox" class="checkbox">
            <span>By ticking this box, you consent to receiving newsletters from Café One.</span>
          </div>
          <!-- <div class="row col-xs-12"></div> -->
          <button @click="onSubmit()">Join in</button>
        </form>
        <div class="about" v-else>
          <div class="header-text">What we do</div>
          <div class="line-divider"></div>
          <div class="long-text">
            At Café One, innovation meets community. We play host to Sterling Bank’s digital products; offering premium banking services and the best coffee in Lagos. First of its kind in Nigeria, we act as a space for you to co-work and network From business meetings to small sector-based events, we are intentional about building experiences and a community centred around you.
          </div>
          <div class="small-header-text">Opening Hours</div>
          <div class="opening-days-hours">
            <div class="left-text">Mon - Fri</div>
            <div class="right-text">7 am - 7 pm</div>
          </div>
          <div class="opening-days-hours">
            <div class="left-text">Sat - Sun</div>
            <div class="right-text">9 am - 8 pm</div>
          </div>
          <div class="small-header-text">Enquiries</div>
          <div class="text-contact-details">cafe.one@sterlingbankng.com</div>
          <div class="text-contact-details">09053872954, 09053872953</div>
          <div class="text-join-community">Join our community and get 10% off coffee on your first visit  <img src="./assets/img/arrow.png" class="logo" @click="displayForm()"> </div>
        </div>
      </div>
    </div>
    <!-- <div class="row col-xs-12"></div>
    <form class="section-subscribe" v-if="showForm">
      <div class="form-mobile">
        <input type="text" class="text-field" placeholder="Full name" v-model="fullName" required>
        <input type="email" class="text-field" placeholder="Email address" v-model="email" required>
        <input type="number" class="text-field" placeholder="Phone number" v-model="phoneNumber" required>
        <button @click="onSubmit()">Submit</button>
      </div>
      <div class="form-non-mobile">
        <input type="text" class="text-field" placeholder="Full name" v-model="fullName" required>
        <div class="divider"></div>
        <input type="email" class="text-field" placeholder="Email address" v-model="email" required>
        <div class="divider"></div>
        <input type="number" class="text-field" placeholder="Phone number" v-model="phoneNumber" required>
        <button @click="onSubmit()">Submit</button>
        <div class="checkbox-section">
          <input type="checkbox">
          <span>Send me occassional marketing updates.</span>
        </div>
      </div>
    </form>  -->
    <!-- <div class="section-join-community" v-else>
      <div class="button-join" @click="displayForm()">
        <div class="text">Join</div>
        <img src="./assets/img/arrow.png">
      </div>
      <br>
      <div class="small-text">Join our community and get 10% off coffee on your first visit</div>
    </div> -->
  </div>
</template>
<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax"
import axios from 'axios'
var imageIndex = 0;
var imageSwitchInterval = 3300;
var images = ['https://res.cloudinary.com/daitiebum/image/upload/v1545113548/image-slide-two.jpg', 'https://res.cloudinary.com/daitiebum/image/upload/v1545113548/image-slide-three.jpg', 'https://res.cloudinary.com/daitiebum/image/upload/v1545115024/image-slide-one.jpg'];

export default {
  data () {
    return {
      showForm: false,
      currentImg: 'https://res.cloudinary.com/daitiebum/image/upload/v1545113548/image-slide-one.jpg',
      currentNumber: 0,
      fullName: '',
      email:'',
      phoneNumber:'',
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
    onSubmit(){
      const formData = {
        fullName : this.fullName,
        email : this.email,
        phoneNumber : this.phoneNumber
      }

      axios.post('http://localhost:3005/api/users', formData)
      .then(response => console.log(error))
      .catch(error => console.log(error))
    },
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
