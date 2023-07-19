<script>
export default {
    name: "RegisterTopCard",

    methods: {
        RedirectUser(pathName) {
            this.$router.push({ name: pathName });
        },
    },
}
</script>

<template>
    <div class="bg-ava-bg-green">
        <div class="h-32"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 order-1 md:order-2">
                <div class="w-full md:w-[75%] text-right md:text-right">
                    <div class="text-center">
                        <div class="w-[80%] md:w-full mx-auto text-right">
                            <h1 class="font-bjn sm:text-4xl text-4xl font-bold text-ava-black">
                                !عکس ها صدا دارند
                            </h1>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="w-[80%] md:w-full mx-auto text-right">
                            <p class="font-yekanX text-ava-gray w-full mt-3 sm:text-sm text-xs ">
                                آواکادو، آوایی است که آن را کادو می دهید. قابی ماندگار از خاطرها که در آن تصویر لحظه ها
                                ثبت می
                                شوند و صدا ها به آن جان می دهد
                            </p>

                            <p class="font-yekanX text-ava-gray w-full mt-3 sm:text-sm text-xs">
                                یک صدا را از خود تان یا عزیزان تان ضبط کنید یا قطعه ای آهنگی را انتخاب کنید که یاد آور
                                خاطره ای
                                است یا خاطره ای را خواهید ساخت
                            </p>

                            <p class="font-yekanX text-ava-gray w-full mt-3 sm:text-sm text-xs">
                                تم های تصویری جذاب و متفاوتی را می توانید برای زمینه انتخاب کنید یا تصویر مورد نظر
                                خودتان را که
                                روایتگر داستانی است یا می خواهید باشد
                            </p>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="w-[80%] md:w-full mx-auto text-right">
                            <button @click="RedirectUser('register-avacadu')" class="base-ava-btn  w-40 h-10 mt-10">
                                ثبت سفارش
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="order-2 md:order-1">
                <div class="w-[88%] md:w-full">
                    <img src="../assets/images/avacaduSamples.svg" alt="AvacaduSamples">
                </div>
            </div>
        </div>
        <div class="h-20"></div>
    </div>
</template>