<template>
  <div id="landing">
    <div
      id="white-overlay"
      ref="whiteOverlay"
    ></div>
    <div id="nav">
      <div class="social-links">
        <a
          href="https://www.facebook.com/cafeoneng"
          target="_blank"
        ><i class="fab fa-facebook-f"></i></a><br>
        <a
          href="https://twitter.com/cafeone_ng/"
          target="_blank"
        ><i class="fab fa-twitter"></i></a><br>
        <a
          href="https://www.instagram.com/cafeone_nig/"
          target="_blank"
        ><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <div
      class="image-slide-section"
      ref="bigImageHolder"
    >
      <img
        :src="currentImg"
        ref="bigImage"
        class="big-image"
      >
      <div class="logo-slogan">
        <img
          src="./assets/img/logo.png"
          class="cafe-one-logo"
        >
        <div class="slogan">Innovation meets community </div>
      </div>
    </div>
    <div class="right-side">
      <toast
        :message="toast.message"
        :context="toast.context"
        v-if="toast.show"
      />
      <div class="content">
        <form action="https://cafeoneng.us19.list-manage.com/subscribe/post?u=2cb2cc043bf7495bab14ed192&amp;id=7ba93f6756" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" validate
          class="form-section"
          v-if="showForm"
        >
          <div class="header-text">Join our mailing list</div>
          <div class="line-divider margin-bottom-56"></div>
          <div class="input-container">
            <div class="label">Your full name</div>
            <input
              id="mce-FNAME" name="FNAME"
              type="text"
              class="input-field"
              :class="{error: $v.full_name.$error}"
              v-model="$v.full_name.$model"
            >
            <transition name="slide-fade">
              <p
                class="error"
                v-if="$v.full_name.$error"
              >Please enter your first name</p>
            </transition>
          </div>

          <div class="input-container">
            <div class="label">Email address</div>
            <input
              id="mce-EMAIL" name="EMAIL"
              type="text"
              class="input-field"
              :class="{error: $v.email_address.$error}"
              v-model="$v.email_address.$model"
            >
            <transition name="slide-fade">
              <p
                class="error"
                v-if="$v.email_address.$error"
              >Please enter a valid email address.</p>
            </transition>
          </div>

          <div class="input-container">
            <div class="label">Phone number</div>
            <input
              id="mce-PHONE" name="PHONE"
              type="text"
              class="input-field"
              :class="{error: $v.phone_number.$error}"
              v-model="$v.phone_number.$model"
            >
            <transition name="slide-fade">
              <p
                class="error"
                v-if="$v.phone_number.$error"
              >Please enter a valid phone number.</p>
            </transition>
          </div>
          <div class="checkbox-section">
            <input
              type="checkbox"
              class="checkbox"
              v-model="recieve_emails"
            >
            <span>By ticking this box, you consent to receiving newsletters from Café One.</span>
          </div>
          <!-- <div class="row col-xs-12"></div> -->
          <transition
            name="form-fade"
            mode="out-in"
          >
            <input
              type="submit"
              value="Join In"
              :disabled="$v.$invalid"
              v-if="!loading"
            />
            <div
              v-else
              class="spinner-container"
            >
              <looping-rhombuses-spinner
                :animation-duration="1000"
                :size="1000"
                :color="'#000'"
              />
            </div>
          </transition>
        </form>
        <div
          class="about"
          v-else
        >
          <div class="header-text">What we do</div>
          <div class="line-divider"></div>
          <div class="long-text">
            At Café One, innovation meets community. We play host to Sterling Bank’s digital products; offering premium banking services and the best coffee in Lagos. First of its kind in Nigeria, we act as a space for you to co-work and network. From business meetings to small sector-based events, we are intentional about building experiences and a community centred around you.
          </div>
          <div class="small-header-text">Opening Hours</div>
          <div class="opening-days-hours">
            <div class="left-text">Mon - Fri</div>
            <div class="right-text">7 am - 7 pm</div>
          </div>
          <div class="opening-days-hours">
            <div class="left-text">Sat - Sun</div>
            <div class="right-text">10 am - 8 pm</div>
          </div>
          <div class="small-header-text">Enquiries</div>
          <div class="text-contact-details">cafe.one@sterling.ng</div>
          <div class="text-contact-details">09053872954, 09053872953</div>
          <div class="text-join-community">Join our community and get 10% off coffee on your first visit <img
              src="./assets/img/arrow.png"
              class="logo"
              @click="displayForm()"
            > </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { required, email, minLength } from "vuelidate/lib/validators";
import { isMobilePhone } from "validator";
import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";
import { LoopingRhombusesSpinner } from "epic-spinners";
import upperFirst from "lodash/upperFirst";

const isNigerianMobile = value => isMobilePhone(value, "en-NG");

var imageIndex = 0;
var imageSwitchInterval = 3300;
var images = [
  "https://res.cloudinary.com/daitiebum/image/upload/v1545113548/image-slide-two.jpg",
  "https://res.cloudinary.com/daitiebum/image/upload/v1545113548/image-slide-three.jpg",
  "https://res.cloudinary.com/daitiebum/image/upload/v1545115024/image-slide-one.jpg"
];

export default {
  data() {
    return {
      full_name: "",
      email_address: "",
      phone_number: "",
      recieve_emails: false,
      showForm: false,
      loading: false,
      toast: {
        show: false,
        message: "",
        context: ""
      },
      currentImg:
        "https://res.cloudinary.com/daitiebum/image/upload/v1545113548/image-slide-one.jpg",
      currentNumber: 0,
      timer: null
    };
  },

  validations: {
    full_name: { required },
    email_address: { required, email },
    phone_number: { required, isNigerianMobile }
  },

  mounted() {
    const { bigImage, whiteOverlay } = this.$refs;
    whiteOverlay.style.width = "100%";

    TweenMax.to(whiteOverlay, 1.1, {
      opacity: "0",
      onComplete: setTimeout(() => {
        this.switchImage();
        whiteOverlay.style.display = "none";
      }, 2000)
    });
  },

  methods: {
    onSubmit() {
      if (this.$v.$invalid) return;

      this.loading = true;

      const data = {
        full_name: this.full_name,
        email_address: this.email_address,
        phone_number: this.phone_number,
        recieve_emails: this.recieve_emails
      };

      axios
        .post("/api/users", data)
        .then(({ data }) => {
          this.loading = false;
          const first_name = data.data.full_name.split(" ")[0];
          const message = `Thanks for registering, ${upperFirst(
            first_name
          )}. We'll get back to you shortly.`;
          this.scheduleToast(message, "success");
        })
        .catch(({ response }) => {
          this.loading = false;
          const { message } = response.data;
          this.scheduleToast(message, "error");
        });
    },

    scheduleToast(message, context) {
      this.toast = { message, context, show: true };
      setTimeout(() => {
        this.toast = { message: "", context: "", show: false };
      }, 3000);
    },

    displayForm() {
      this.showForm = true;
    },

    switchImage() {
      this.currentImg = images[imageIndex];
      imageIndex++;

      if (imageIndex == images.length) {
        imageIndex = 0;
      }

      setTimeout(() => {
        this.switchImage();
      }, imageSwitchInterval);
    }
  },

  components: {
    LoopingRhombusesSpinner
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/styles/sass/landing";
</style>
