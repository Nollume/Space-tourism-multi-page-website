<template>
	<aside>
		<button @click="store.redirectDestination">Explore</button>
	</aside>
</template>

<script setup>
import { useCounterStore } from '@/stores/store.js'
const store = useCounterStore()
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixins';
aside {
	width: 100%;
	margin-top: 4rem;

	@extend %flex-center;
}
button {
	outline: 0rem solid var(--accent2);
	border: none;
	border-radius: 50%;

	background-color: var(--headline-color);

	text-transform: uppercase;
	font-size: 1.25rem;
	letter-spacing: 0.0781rem;

	width: 9.375rem;
	aspect-ratio: 1;

	cursor: pointer;
	transition: all 0.5s ease;
}

button:is(:active, :hover, :focus) {
	outline: 2rem solid var(--accent2);
}

@media only screen and (min-width: 47.5rem) {
	button {
		width: 15.125rem;
		font-size: 2rem;
		letter-spacing: 0.125rem;
	}
	button:is(:active, :hover, :focus) {
		outline: 4rem solid var(--accent2);
	}
	aside {
		margin-top: 10rem;
	}
}
@media only screen and (min-width: 75rem) {
	aside {
		margin-top: calc(30.9375rem - 5.5rem);
		margin-right: 10.3125rem;
		align-items: flex-end;
		flex-direction: column;
	}
	button {
		width: 17.125rem;
	}
}
</style>
