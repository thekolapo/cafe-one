<template>
  <transition name="toast-slide">
    <div :class="['toast', context]">
      {{message}}
    </div>

  </transition>
</template>

<script>
export default {
  name: "Toast",
  props: ["message", "context"]
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 20px;
  width: 300px;
  padding: 14px;
  border-radius: 5px;
  z-index: 100;
  cursor: pointer;
  color: white;
  font-size: 15px;
  font-weight: 500;
  text-align: left;

  &.error {
    background-color: #ef5753;
  }

  &.success {
    background-color: #51d88a;
  }
}
.toast-slide-enter,
.toast-slide-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.6s;
}

@media only screen and (max-width: 576px) {
  .toast {
    margin-left: 10px;
  }
}
</style>


