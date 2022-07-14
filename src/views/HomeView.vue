<template>
	<div class="home-container">
		<HomeMain />
		<HomeAside />
	</div>
</template>

<script setup>
import { onMounted } from 'vue'
import HomeAside from '../components/home/HomeAside.vue'
import HomeMain from '../components/home/HomeMain.vue'
import { useCounterStore } from '@/stores/store.js'
const store = useCounterStore()
onMounted(() => {
	store.activeLinks()
})
</script>

<style lang="scss" scoped>
.home-container {
	padding-top: 5.5rem;
	background-image: url('../assets/images/home/background-home-mobile.jpg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
	padding-bottom: 1.5rem;
}

@media only screen and (min-width: 47.5rem) {
	.home-container {
		background-image: url('../assets/images/home/background-home-tablet.jpg');
	}
}

@media only screen and (min-width: 75rem) {
	.home-container {
		background-image: url('../assets/images/home/background-home-desktop.jpg');
		display: flex;
		align-items: flex-start;
		min-height: 100vh;
	}
}
</style>
