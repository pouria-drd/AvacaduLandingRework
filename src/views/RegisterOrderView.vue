<script>
import Navbar from "../components/Navbar.vue"
import HomeAdsCard from "../components/HomeAdsCard.vue";
import HomeBottomCard from "../components/HomeBottomCard.vue";
import RegisterTopCard from "../components/RegisterTopCard.vue";
import RegisterMiddleCard from "../components/RegisterMiddleCard.vue"


export default {
    components: {
        Navbar,
        HomeAdsCard,
        HomeBottomCard,
        RegisterTopCard,
        RegisterMiddleCard,
    },
}
</script>

<template>
    <main>
        <Navbar />
        <RegisterTopCard />
        <HomeAdsCard />
        <RegisterMiddleCard />
        <HomeBottomCard />
    </main>
</template>