<template>
	<div class="wrap">
		<LogoMenu />

		<MainNavigation />
		<RouterView />
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import LogoMenu from './components/LogoMenu.vue'
import MainNavigation from './components/MainNavigation.vue'
import { useCounterStore } from '@/stores/store.js'
const store = useCounterStore()

onMounted(() => {
	store.screenResolution()
	window.addEventListener('resize', store.screenResolution)
})

onUnmounted(() => {
	window.removeEventListener('resize', store.screenResolution)
})
</script>

<style lang="scss" scoped>
.wrap {
	position: relative;
}
.loading {
	color: white;
	text-align: center;
}
</style>
