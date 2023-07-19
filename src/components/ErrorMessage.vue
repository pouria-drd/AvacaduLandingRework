<script>
export default {
  name: "ErrorMessage",

  props: {
    initialTitle: {
      type: String,
      default: "خطا",
    },

    initialCaption: {
      type: String,
      default: "متن بدنه",
    },

    showErrorCard: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    closeCard() {
      this.$emit("update-showErrorCard", false);
    },
  },
};
</script>

<template>
  <div v-if="showErrorCard" class="error-popup-card">
    <button @click="closeCard">
      <img src="../assets/images/CloseError.png" />
    </button>
    <h1>{{ initialTitle }}</h1>
    <div></div>
    <p class="ss02" style="direction: rtl;">{{ initialCaption }}</p>
  </div>
</template>

<style scoped>
.error-popup-card {
  left: 50%;
  top: 100px;
  width: 653px;
  height: 113px;
  z-index: 1000;
  position: absolute;
  border-radius: 10px;
  background: #ffebed;
  transform: translateX(-50%);
}

.error-popup-card button {
  top: 22px;
  left: 35px;
  border: 0px;
  background: none;
  position: absolute;
}

.error-popup-card div {
  top: 25%;
  width: 6px;
  right: 0px;
  height: 56px;
  position: absolute;
  border-radius: 2px;
  background: #fc573b;
}

.error-popup-card h1 {
  top: 26px;
  right: 41px;
  font-size: 22px;
  font-weight: 700;
  color: #fc573b;
  line-height: 28px;
  text-align: right;
  position: absolute;
  font-style: normal;
  font-family: "Bahij Nazanin";
}

.error-popup-card p {
  top: 62px;
  right: 41px;
  font-size: 14px;
  font-weight: 400;
  color: #80848f;
  line-height: 23px;
  text-align: right;
  font-style: normal;
  position: absolute;
  font-family: "IRANYekanWeb";
}

.ss02 {
  font-feature-settings: "ss02";
  -moz-font-feature-settings: "ss02";
  -webkit-font-feature-settings: "ss02";
}

@media screen and (max-width: 500px) {
  .error-popup-card {
    width: 95%;
    height: 105px;
  }

  .error-popup-card button {
    left: 20px;
  }
}
</style>
