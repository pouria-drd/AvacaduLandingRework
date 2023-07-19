<script>
export default {
    name: "HomeBottomCard",

    props: {
        style: {
            default: "bg-ava-bg-green w-full"
        }
    }
}
</script>

<template>
    <section id="contact" :class="style">
        <!-- ---------------------------------------------------------------------- -->
        <div>
            <div class="h-20"></div>

            <h1 class="font-bjn text-3xl text-center font-bold text-ava-black">
                ارتباط با آواکادو
            </h1>

            <p
                class="font-yekanX text-ava-gray w-full text-center mt-7 sm:text-sm text-xs mx-auto sm:max-w-[390px] max-w-[65%]">
                مشکلات آواکادو، انتقاد و پیشنهاد خود را با پشتیبانی آواکادو در میان بگذارید. تیم آواکادو آن را پیگیری می کند
            </p>
        </div>

        <div class="w-full">
            <div class="mt-8 xl:w-[25%] md:w-[40%] w-[65%] mr-auto ml-auto text-right">
                <div class="w-full ml-auto mt-4">
                    <p class=" ss02 font-yekanX text-ava-gray text-sm inline">
                        021-36280700
                    </p>
                    <p class="text-ava-black text-sm font-yekanX inline">
                        :شماره تماس
                    </p>
                </div>
                <div class="w-full ml-auto mt-4 justify-end flex">
                    <a class="mr-4 inline" target="_blank" href="https://instagram.com/avacadu.ir">
                        <img class="w-5" src="../assets/images/insIcon.png" alt="InstagramIcon">
                    </a>
                    <a class="mr-4 inline" target="_blank" href="https://t.me/Avacadu_ir">
                        <img class="w-5" src="../assets/images/tlIcon.png" alt="TelegramIcon">
                    </a>
                    <a class="mr-4 inline" target="_blank" href="https://wa.me/+989026832126">
                        <img class="w-5" src="../assets/images/wsIcon.png" alt="WhatsappIcon">
                    </a>
                    <p class="text-ava-black text-sm font-yekanX inline">
                        :شبکه های اجتماعی
                    </p>
                </div>

                <div class="w-full ml-auto mt-4">

                    <p class="text-ava-black text-sm font-yekanX inline">
                        آدرس
                    </p>
                    <p class="ss02 font-yekanX text-ava-gray text-sm inline">
                        : تهران - ورامین - میدان امام خمینی - خیابان ۱۵ خرداد -
                        پاساژ الله اکبر - طبقه اول - پلاک ۱۰
                    </p>
                </div>

                <div class="w-full mt-10">
                    <a target="_blank" href="https://maps.app.goo.gl/SYU9wL2KYsco6rV86?g_st=ic">
                        <img src="../assets/images/map.png" alt="MapImage">
                    </a>
                </div>
            </div>
            <p class="text-ava-gray sm:text-xs text-[8px] text-center font-yekanX mt-16">
                تمام
                حقوق مادی و معنوی این وبسایت متعلق به
                دفتر
                فنی فراییت است
            </p>
            <div class="w-full h-8"></div>
        </div>
        <!-- ---------------------------------------------------------------------- -->
    </section>
</template>
