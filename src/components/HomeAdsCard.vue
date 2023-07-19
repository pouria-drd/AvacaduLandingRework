<script>
export default {
    name: "HomeAdsCard",

    methods: {
        RedirectUser(pathName) {
            this.$router.push({ name: pathName });
        },
    },
}
</script>

<template>
    <div id="Ads" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Perspolois -------------------------------------------------------- -->
        <div id="Perspolois" class="bg-ava-bg-red p-4">
            <div class="md:w-[90%] w-full">
                <h1 class="sm:text-5xl text-4xl md:text-right text-center font-peyda text-perspolis-red mr-4 mt-4">
                    پرسپولیس
                </h1>
            </div>

            <div class="mt-12 flex md:justify-end justify-center">
                <img class="md:mr-4" src="../assets/images/PerspolisImage.svg" alt="PerspolisImage">
            </div>
            <div class="w-full my-10 flex md:justify-end justify-center">
                <button @click="RedirectUser('register-avacadu')"
                    class="bg-perspolis-red text-white font-yekanX font-xs rounded-ava8 w-40 h-10 md:mr-24 xl:mr-28">
                    ثبت سفارش
                </button>
            </div>
        </div>
        <!-- Esteghlal -------------------------------------------------------- -->
        <div id="Esteghlal" class="bg-ava-bg-blue p-4">
            <div class="md:w-[90%] w-full">
                <h1 class="sm:text-5xl text-4xl md:text-left text-center font-peyda text-esteghlal-blue md:ml-20 mt-4">
                    استقلال
                </h1>
            </div>
            <div class="mt-12 flex md:justify-start justify-center">
                <img class="md:ml-4" src="../assets/images/EsteghlalImage.png" alt="EsteghlalImage">
            </div>
            <div class="w-full my-10 flex md:justify-start justify-center">
                <button @click="RedirectUser('register-avacadu')"
                    class="bg-esteghlal-blue text-white font-yekanX font-xs rounded-ava8 w-40 h-10 md:ml-16 xl:ml-28">
                    ثبت سفارش
                </button>
            </div>
        </div>
    </div>
</template>