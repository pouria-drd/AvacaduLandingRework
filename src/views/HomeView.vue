<script>
import Navbar from "../components/Navbar.vue";
import HomeTopCard from "../components/HomeTopCard.vue";
import HomeAdsCard from "../components/HomeAdsCard.vue";
import HomeMiddleCard from "../components/HomeMiddleCard.vue";
import HomeBottomCard from "../components/HomeBottomCard.vue";

export default {
  components: {
    Navbar,
    HomeTopCard,
    HomeAdsCard,
    HomeMiddleCard,
    HomeBottomCard,
  },
}
</script>

<template>
  <main>
    <Navbar />
    <HomeTopCard />
    <HomeMiddleCard />
    <HomeAdsCard />
    <HomeBottomCard />
  </main>
</template>
