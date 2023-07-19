<script>
export default {
    name: "SuccessMessage",

    props: {
        initialTitle: {
            type: String,
            default: 'موفقیت'
        },

        initialCaption: {
            type: String,
            default: 'متن بدنه'
        },

        showSuccessCard: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        CloseCard() {
            this.$emit("update-showSuccessCard", false);
        },
    }
}
</script>

<template>
    <div v-if="showSuccessCard" class="error-popup-card">
        <button @click="CloseCard"><img src="../assets/images/CloseSuccess.png"></button>
        <h1>{{ initialTitle }}</h1>
        <div></div>
        <p>{{ initialCaption }}</p>
    </div>
</template>

<style scoped>
.error-popup-card {
    left: 50%;
    top: 100px;
    width: 653px;
    height: 113px;
    position: absolute;
    border-radius: 10px;
    background: #ECFCF0;
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
    background: #4CAF50;
}

.error-popup-card h1 {
    top: 26px;
    right: 41px;
    font-size: 22px;
    font-weight: 700;
    color: #4CAF50;
    line-height: 28px;
    text-align: right;
    position: absolute;
    font-style: normal;
    font-family: 'Bahij Nazanin';
}

.error-popup-card p {
    top: 62px;
    right: 41px;
    position: absolute;
    font-family: 'IRANYekanWeb';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    text-align: right;
    color: #80848F;
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
