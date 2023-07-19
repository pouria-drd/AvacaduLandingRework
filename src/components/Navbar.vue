<script>

export default {
    name: "Navbar",

    data() {
        return {
            isOpen: false,
        };
    },

    methods: {
        ToggleMenuBar() {
            this.isOpen = !this.isOpen;

            if (this.isOpen) {
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = 'auto';
            }
        },

        CloseMenu() {
            this.isOpen = false;

            if (this.isOpen) {
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = 'auto';
            }
        },
    }
}
</script>

<template>
    <nav class="bg-ava-bg-green h-20 lg:flex justify-between items-center hidden">
        <a class="base-ava-btn ml-44 w-32 h-10 hover:scale-110 flex items-center justify-center" href="#contact">
            همکاری با ما
        </a>

        <div class="flex items-center mr-40">
            <ul class="flex justify-end mr-5">
                <li class="nav-link mx-3">
                    <a @click="CloseMenu" href="#contact">تماس</a>
                </li>

                <li class="nav-link mx-3">
                    <a @click="CloseMenu" href="#">پرسش ها</a>
                </li>

                <li class="nav-link mx-3">
                    <a @click="CloseMenu" href="#contact">همکاری</a>
                </li>

                <li class="nav-link mx-3">
                    <router-link active-class="active" @click="CloseMenu" :to="{ name: 'register-order' }">
                        سفارش
                    </router-link>
                </li>
                <li class="nav-link mx-3"><a href="#">معرفی</a></li>
            </ul>
            <a href="/">
                <img class="hover:scale-125 transition" src="../assets/images/AvacaduLogo.svg" alt="AC-Logo">
            </a>
        </div>
    </nav>

    <nav class="bg-ava-bg-green h-20 lg:hidden justify-between items-center flex">
        <a href="/">
            <img class="ml-6 hover:scale-125 transition" src="../assets/images/AvacaduLogo.svg" alt="AC-Logo">
        </a>

        <div v-if="!isOpen" class="flex items-center mr-7">
            <button @click="ToggleMenuBar">
                <img src="../assets/images/menuIcon.svg" alt="MenuIcon">
            </button>
        </div>

        <div v-if="isOpen" class="flex items-center mr-5">
            <button @click="ToggleMenuBar">
                <img src="../assets/images/closeMenuIcon.svg" alt="CloseMenuIcon"> </button>
        </div>
    </nav>

    <div v-if="isOpen" class="bg-white w-full h-[100vh] slide-down-anim flex flex-col">
        <ul class="flex flex-col justify-end mr-5">
            <li class="m-nav-link mt-4 mx-3 text-right">
                <a @click="CloseMenu" href="#contact">تماس</a>
            </li>

            <li class="m-nav-link mt-4 mx-3 text-right">
                <a href="#">معرفی</a>
            </li>

            <li class="m-nav-link mt-4 mx-3 text-right">
                <a @click="CloseMenu" href="#contact">همکاری</a>
            </li>

            <li class="m-nav-link mt-4 mx-3 text-right">
                <router-link active-class="active" @click="CloseMenu" :to="{ name: 'register-order' }">
                    سفارش
                </router-link>
            </li>

            <li class="m-nav-link mt-4 mx-3 text-right">
                <a @click="CloseMenu" href="#">پرسش ها</a>
            </li>
        </ul>
        <p class="text-ava-gray text-[8px] text-center font-yekanX mt-auto mb-24">
            تمام
            حقوق مادی و معنوی این وبسایت متعلق به
            دفتر
            فنی فراییت است
        </p>
    </div>
</template>

<style scoped>
.active {
    color: #292D36;
}

.slide-down-anim {
    animation-name: slide-down;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
}

@keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-5%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>