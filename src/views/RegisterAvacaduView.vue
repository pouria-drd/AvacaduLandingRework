<script>
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import ErrorMessage from '../components/ErrorMessage.vue';
import SuccessMessage from '../components/SuccessMessage.vue';
import HomeBottomCard from '../components/HomeBottomCard.vue';

export default {
    components: {
        Navbar,
        ErrorMessage,
        SuccessMessage,
        HomeBottomCard,
    },

    created() {
        this.GetCaptcha();
    },

    data() {
        return {
            style: "bg-ava-bg-white w-full",

            address: "",
            details: "",
            fullName: "",
            phoneNumber: "",
            captchaCode: "",
            captchaGuid: "",
            captchaImage: "",

            isSendingData: false,

            errorMessage: '',
            showError: false,

            showSuccess: false,
            successMessage: '',

            btnStyle: {
                opacity: 0.7,
                cursor: "not-allowed",
            },
        };
    },

    methods: {
        async SubmitForm() {
            this.isSendingData = true;

            this.btnStyle = {
                opacity: 0.7,
                cursor: "wait",
            };

            await axios({
                method: 'post',
                url: this.$baseURL + 'Contract/ContactMe',
                data: {
                    'captchaCode': this.captchaCode,
                    'captchaGuid': this.captchaGuid,
                    'phoneNumber': '0' + this.phoneNumber,

                    'details': this.fullName + " | " +
                        this.address + " | " + this.details,
                },

            }).then(response => {
                this.successMessage = response.data.message;
                this.ShowSuccessMessage();

                console.log(response);

            }).catch(error => {
                this.errorMessage = error.response.data.message;
                this.ShowErrorMessage();

            }).finally(() => {
                this.ClearData();
            });

            this.isSendingData = false;
        },

        async GetCaptcha() {
            this.captchaCode = '';

            await axios({
                method: 'get',
                url: this.$baseURL + 'auth/captcha',

            }).then(response => {
                this.captchaImage = "data:image/*;base64," +
                    response.data['data']['captcha'];

                this.captchaGuid = response.data['data']['guid'];

            }).catch(error => {
                this.ClearData();
            })
        },

        ShowSuccessMessage() {
            this.showSuccess = true;
        },

        ShowErrorMessage() {
            this.showError = true;
        },

        ClearData() {
            this.address = "";
            this.details = "";
            this.fullName = "";
            this.phoneNumber = "";
            this.captchaCode = "";
            this.captchaGuid = "";
            this.captchaImage = "";
            this.isSendingData = false;

            this.btnStyle = {
                opacity: 0.7,
                cursor: "not-allowed",
            };

            this.GetCaptcha();
        },
    },

    computed: {
        CanSendData() {
            if (this.isSendingData) {
                return false
            }

            if (this.phoneNumber.toString().trim().length < 10 || this.captchaCode.toString().trim().length < 4) {

                return false;

            } else {

                return true;
            }
        },
    },

    watch: {
        CanSendData() {
            if (!this.CanSendData) {
                this.btnStyle = {
                    opacity: 0.7,
                    cursor: "not-allowed",
                };

            } else {
                this.btnStyle = {
                    opacity: 1,
                    cursor: "pointer",
                };
            }
        },
    },
}
</script>

<template>
    <main>
        <Navbar />

        <ErrorMessage v-if="showError" :showErrorCard="showError" :initial-caption="errorMessage"
            @update-showErrorCard="showError = $event" />

        <SuccessMessage v-if="showSuccess" :showSuccessCard="showSuccess" :initial-caption="successMessage"
            @update-showSuccessCard="showSuccess = $event" />

        <div class="mt-20">
            <div class="mt-20 xl:w-[30%] lg:w-[40%] md:w-[60%] sm:w-[60%] w-[90%] mx-auto text-center">
                <h1 class="font-bjn sm:text-[44px] text-4xl text-center font-bold text-ava-black">
                    ثبت سفارش آواکادو
                </h1>

                <p class="font-yekanX text-ava-gray w-full text-center mt-3 text-xs mx-auto max-w-[90%]">
                    برای ثبت سفارش آواکادو لطفا اطلاعات زیر را کامل کنید همکارا ما در اسرع وقت با شما تماس خواهند گرفت
                </p>

                <input type="text" name="fullName" id="fullName" placeholder="نام کامل" v-model="fullName"
                    class="base-input w-[90%] mt-8 h-12">

                <div class="w-[90%] mx-auto h-16">

                    <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="شماره موبایل" v-model="phoneNumber"
                        class="base-input w-[100%] mt-4 h-12">

                    <p class="ir-code ss02">+۹۸</p>

                    <div class="line"></div>
                </div>

                <input type="text" name="address" id="address" placeholder="آدرس" v-model="address"
                    class="base-input w-[90%] mt-4 h-12">

                <textarea class="base-input resize-none mt-4 w-[90%] h-24" name="details" id="details" v-model="details"
                    cols="30" rows="10" placeholder="جزئیات آواکادوی درخواستی"></textarea>

                <div class="justify-between flex items-center mx-auto w-[90%] mt-4">
                    <img class="bg-ava-green rounded-ava8 h-12" :src="captchaImage" alt="CaptchaImage">

                    <button @click="GetCaptcha"
                        class="bg-[#f8f7ff] rounded-ava8 w-24 h-12 mx-2 flex justify-center items-center">
                        <img src="../assets/images/refreshIcon.svg" />
                    </button>

                    <input class="base-input w-[75%] h-12 ss02" type="tel" maxlength="4" v-model="captchaCode">
                </div>

                <button @click="SubmitForm" :style="btnStyle" :disabled="!CanSendData"
                    class="base-ava-btn w-[90%] h-12 mt-4 mb-32">تأیید و
                    درخواست</button>
            </div>
        </div>

        <HomeBottomCard :style="style" />
    </main>
</template>

<style scoped>
.ir-code {
    left: 27px;
    bottom: 37px;
    font-size: 16px;
    color: #959ea6;
    position: relative;
    transform: translateX(-50%);
    font-family: 'IRANYekanX';
}

.line {
    left: 40px;
    width: 30px;
    height: 0px;
    bottom: 50px;
    position: relative;
    transform: rotate(90deg);
    border: 0.7px solid #D8DBE2;
}
</style>
