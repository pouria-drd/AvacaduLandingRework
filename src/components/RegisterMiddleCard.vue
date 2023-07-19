<script>
export default {
    name: "RegisterMiddleCard",

    methods: {
        RedirectUser(pathName) {
            this.$router.push({ name: pathName });
        },
    },
}
</script>

<template>
    <div class="bg-ava-white">
        <div class="h-32"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 order-1 md:order-2">
                <div class="w-full md:w-[75%] text-right md:text-right">
                    <div class="text-center">
                        <div class="w-[80%] md:w-full mx-auto text-right">
                            <h1 class="font-bjn sm:text-4xl text-4xl font-bold text-ava-black">
                                !عاشقانه ها
                            </h1>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="w-[80%] md:w-full mx-auto text-right">
                            <p class="font-yekanX text-ava-gray w-full mt-3 sm:text-sm text-xs">
                                یک صدا را از خود تان یا عزیزان تان ضبط کنید یا قطعه ای آهنگی را انتخاب کنید که یاد آور خاطره
                                ای است یا خاطره ای را خواهید ساخت
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

        <div class="h-40"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 order-1 md:order-2">
                <div class="w-full md:w-[75%] text-right md:text-right">
                    <div class="text-center">
                        <div class="w-[80%] md:w-full mx-auto text-right">
                            <h1 class="font-bjn sm:text-4xl text-4xl font-bold text-ava-black">
                                !تولد
                            </h1>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="w-[80%] md:w-full mx-auto text-right">
                            <p class="font-yekanX text-ava-gray w-full mt-3 sm:text-sm text-xs">
                                یک صدا را از خود تان یا عزیزان تان ضبط کنید یا قطعه ای آهنگی را انتخاب کنید که یاد آور خاطره
                                ای است یا خاطره ای را خواهید ساخت
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


        <div class="h-40"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 order-1 md:order-2">
                <div class="w-full md:w-[75%] text-right md:text-right">
                    <div class="text-center">
                        <div class="w-[80%] md:w-full mx-auto text-right">
                            <h1 class="font-bjn sm:text-4xl text-4xl font-bold text-ava-black">
                                !روز مادر
                            </h1>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="w-[80%] md:w-full mx-auto text-right">
                            <p class="font-yekanX text-ava-gray w-full mt-3 sm:text-sm text-xs">
                                یک صدا را از خود تان یا عزیزان تان ضبط کنید یا قطعه ای آهنگی را انتخاب کنید که یاد آور خاطره
                                ای است یا خاطره ای را خواهید ساخت
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

        <div class="h-32"></div>
    </div>
</template>