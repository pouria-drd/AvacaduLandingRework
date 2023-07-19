<script>
export default {
    name: "HomeTopCard",
}
</script>

<template>
    <div class="bg-ava-bg-green">
        <div class="h-12"></div>
        <!-- ---------------------------------------------------------------------- -->
        <div>
            <h1 class="font-bjn sm:text-5xl text-4xl text-center font-bold text-ava-black">
                !عکس ها صدا دارند
            </h1>

            <p
                class="font-yekanX text-ava-gray w-full text-center mt-3 sm:text-sm text-xs mx-auto sm:max-w-[492px] max-w-[80%]">
                آواکادو،
                آوایی است که آن را کادو می دهید.
                قابی
                ماندگار از
                خاطرها که در
                آن تصویر لحظه ها ثبت
                می شوندو صدا ها به آن
                جان می دهد
            </p>

            <div class="w-full mt-6 text-center">
                <a href="#avacadu">
                    <button
                        class="h-12 w-40 text-ava-green font-yekanX text-sm bg-ava-light-green rounded-ava8 hover:bg-ava-green hover:text-white transition hover:scale-110">
                        !آوا را کادو کنید
                    </button>
                </a>
            </div>
        </div>
        <!-- ---------------------------------------------------------------------- -->
        <div class="w-full flex flex-col items-center mt-10">
            <img class="absolute h-auto late-fade-in sm:w-[72%] w-[85%]" src="../assets/images/musicIcons.svg"
                alt="MusicIcons">

            <img class="relative z-10 fade-in sm:w-auto w-[75%]" src="../assets/images/avacaduStatue.svg" alt="StatueIcon">

            <div class="flex flex-col items-center">
                <img class="mt-2 fade-in" src="../assets/images/voiceIcon.svg" alt="VoiceIcon">

                <a href="">
                    <img class="mt-8 mb-10 fade-in" src="../assets/images/downloadIcon.svg" alt="DownloadIcon">
                </a>
            </div>
        </div>
    </div>
</template>