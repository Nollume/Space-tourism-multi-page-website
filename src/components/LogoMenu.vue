<template>
	<div class="container">
		<div class="logo" @click="store.redirectToHome">
			<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
				<g fill="none" fill-rule="evenodd">
					<circle cx="24" cy="24" r="24" fill="#FFF" />
					<path
						fill="#0B0D17"
						d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
					/>
				</g>
			</svg>
		</div>
		<div
			class="hamburger"
			v-if="store.hamburgerSvg"
			@click="store.openNav = true"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
				<g fill="#D0D6F9" fill-rule="evenodd">
					<path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
				</g>
			</svg>
		</div>
	</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/store.js'
import { onMounted } from 'vue'
const store = useCounterStore()
onMounted(() => {
	window.addEventListener('resize', store.screenResolution())
})
</script>

<style lang="scss" scoped>
.container {
	position: absolute;
	top: 1.5rem;
	left: 0;
	right: 0;

	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 1.5rem 1.5rem 1.5rem;
	height: 2.5rem;
}
.logo {
	display: grid;
	place-items: center;
	transform: scale(0.8334);

	cursor: pointer;
}
.hamburger {
	cursor: pointer;
	display: grid;
	place-items: center;
}
@media only screen and (min-width: 47.5rem) {
	.logo {
		transform: scale(1);
	}
	.container {
		margin-left: 2.4375rem;
	}
}
@media only screen and (min-width: 75rem) {
	.container {
		margin-left: 3.4375rem;
		height: 6rem;
		top: 2.5rem;
	}

	.logo {
		z-index: 1005;
	}
}
</style>
