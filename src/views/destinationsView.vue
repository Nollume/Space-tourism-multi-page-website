<template>
	<div class="destination-container">
		<div class="container" v-if="filterData.length">
			<div class="header-container">
				<div class="head-container">
					<span>01</span>
					<h5>Pick Your destination</h5>
				</div>
				<div class="image">
					<img
						:src="getImageUrl(filterData[0].images.png)"
						:alt="'Image of ' + props.name"
					/>
				</div>
			</div>
			<div class="main-container">
				<ul>
					<li v-for="place in store.destinationData" :key="place.name">
						<router-link
							:to="{
								name: 'destinations',
								params: {
									name: place.name.toLowerCase(),
								},
							}"
						>
							{{ place.name }}
						</router-link>
					</li>
				</ul>
				<h2>{{ filterData[0].name }}</h2>
				<p class="description">{{ filterData[0].description }}</p>
				<div class="footer-container">
					<div class="travel">
						<h4>avg. distance</h4>
						<h3>{{ filterData[0].distance }}</h3>
					</div>
					<div class="travel">
						<h4>est. travel time</h4>
						<h3>{{ filterData[0].travel }}</h3>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="loading-container">
			<p class="loading">Loading...</p>
			<img class="load-img" src="/images/1484.gif" alt="loading" />
		</div>
		<div v-if="store.destinationError" class="error">
			{{ store.destinationError }}
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { useCounterStore } from '@/stores/store.js'
const store = useCounterStore()

onMounted(() => {
	store.getDestinationData()
	store.activeLinks()
})
const props = defineProps({
	name: {
		type: String,
	},
})

const filterData = ref()
watchEffect(async () => {
	filterData.value = store.destinationData.filter((item) => {
		return item.name.toLowerCase() === props.name
	})
})
function getImageUrl(name) {
	return new URL(`/src/assets/images/destination/${name}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins';

.destination-container {
	padding-top: 5.5rem;
	background-image: url('../assets/images/destination/background-destination-mobile.jpg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
	padding-bottom: 1.5rem;
}

.head-container {
	@extend %flex-center;
	gap: 1rem;
	color: var(--headline-color);
	font-family: var(--barlow);
	& h5 {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 0.1688rem;
		text-transform: uppercase;

		margin: 0;
	}
	& span {
		color: var(--accent1);
		letter-spacing: 0.1688rem;
		font-weight: bold;
		font-size: 1rem;
	}
}

.image {
	width: 100%;
	margin-top: 2rem;
	@extend %flex-center;
}

img {
	width: 10.625rem;
	height: auto;
}

ul {
	padding: 0;
	margin: 0;
	margin-top: 1.7rem;
	@extend %flex-center;
	gap: 1.5rem;

	& li {
		font-family: var(--barlow);
		text-transform: uppercase;
		list-style: none;
		font-size: 0.875rem;
		letter-spacing: 0.1475rem;

		cursor: pointer;

		& a {
			color: var(--text);
			text-decoration: none;
			padding-bottom: 0.5rem;
			border-bottom: 0.1875rem solid transparent;

			&:is(:active, :hover) {
				border-bottom: 0.1875rem solid var(--hover-underline);
			}

			&.router-link-active {
				color: var(--headline-color);
				border-bottom: 0.1875rem solid var(--headline-color);
			}
		}
	}
}

h2 {
	font-size: 3.5rem;
	text-transform: uppercase;
	color: var(--headline-color);
	font-weight: normal;
	text-align: center;

	margin-top: 1rem;
	margin-bottom: 0.5rem;
}

.description {
	color: var(--text);
	font-size: 0.9375rem;
	font-weight: 400;
	font-family: var(--barlow);
	line-height: 1.5625rem;
	letter-spacing: 0.0625rem;
	margin: 0 auto;
	margin-bottom: 1.75rem;
	text-align: center;
	padding-inline: 2.2rem;
	min-height: 7.8125rem;
}

.footer-container {
	@extend %flex-center;
	flex-direction: column;
	width: 90%;
	margin: 0 auto;

	border-top: 1px solid hsla(231, 10%, 42%, 80%);
}

h4 {
	font-size: 0.875rem;
	font-family: var(--barlow);
	font-weight: 400;
	letter-spacing: 0.1475rem;
	text-transform: uppercase;
	color: var(--text);

	margin: 0;
}
h3 {
	color: var(--headline-color);
	text-transform: uppercase;
	font-weight: 400;
	font-size: 1.75rem;
	margin: 0;
}

.travel {
	@extend %flex-center;
	margin-top: 2rem;
	flex-direction: column;
	gap: 1rem;
}
.loading,
.error {
	text-align: center;
	color: var(--headline-color);
	font-weight: 400;
}
.loading {
	padding: 0;
	margin: 1rem;
}
.loading-container {
	@extend %flex-center;
	flex-direction: column;
}
.load-img {
	width: 2rem;
	height: 2rem;
	margin: 1rem;
	margin-top: 0;
}

@media only screen and (min-width: 47.5rem) {
	.destination-container {
		padding-top: 8.5rem;
		background-image: url('../assets/images/destination/background-destination-tablet.jpg');
	}
	.head-container {
		margin-left: 2.4375rem;
		justify-content: flex-start;
		gap: 1rem;

		& h5 {
			font-size: 1.25rem;
			letter-spacing: 0.2112rem;

			margin: 0;
		}
		& span {
			letter-spacing: 0.2112rem;

			font-size: 1.25rem;
		}
	}
	.image {
		width: 100%;
		margin-top: calc(13.75rem - 9.9375rem);
		@extend %flex-center;
	}
	img {
		width: 18.75rem;
	}

	ul {
		margin-top: 3rem;
		gap: 2rem;
		& li {
			font-size: 1rem;
			letter-spacing: 0.1688rem;
		}
	}
	h2 {
		font-size: 5rem;

		margin-top: 2rem;
		margin-bottom: 0.5rem;
	}
	.description {
		font-size: 1rem;
		width: 35.8125rem;
		line-height: 1.75rem;
		letter-spacing: 0rem;
		margin-bottom: 3rem;
		padding-inline: 2rem;
		min-height: 5.25rem;
	}
	.footer-container {
		flex-direction: row;
		width: 35.8125rem;
	}
	.travel {
		flex-grow: 1;
	}
}
@media only screen and (min-width: 75rem) {
	.destination-container {
		min-height: 100vh;
		background-image: url('../assets/images/destination/background-destination-desktop.jpg');
	}
	.container {
		display: flex;
		align-items: flex-start;
		gap: 4rem;
	}
	.header-container {
		margin-left: 10%;
		margin-top: calc(13.25rem - 8.5rem);
		flex-grow: 0.8;
	}
	.head-container {
		margin-left: 0;
		gap: 1.5rem;
		height: 2.125rem;

		& h5 {
			font-size: 1.75rem;
			letter-spacing: 0.295rem;

			margin: 0;
		}
		& span {
			letter-spacing: 0.295rem;
			font-size: 1.75rem;
		}
	}
	.image {
		margin-left: calc(14.375rem - 10.4063rem);
		margin-top: calc(21.4375rem - 15.375rem);
		justify-content: flex-start;
	}
	img {
		width: 27.8125rem;
	}

	.main-container {
		width: 27.8125rem;
		height: 29.5rem;
		margin-top: calc(19.375rem - 8.5rem);
		margin-right: 10.4063rem;
		margin-left: auto;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	ul {
		margin-top: 0;
		margin-bottom: 1.5rem;
		gap: 2rem;
	}
	h2 {
		font-size: 6.25rem;

		margin-top: 2rem;
		margin-bottom: 1.5rem;
	}
	.description {
		font-size: 1.125rem;
		font-weight: normal;
		width: 27.75rem;
		line-height: 2rem;

		text-align: left;

		margin-inline: unset;
		padding-inline: unset;

		margin-bottom: 3.5rem;
		min-height: 7rem;
	}
	.footer-container {
		width: unset;
		min-width: 27.8125rem;
		margin: 0 0;
	}
	.travel {
		align-items: flex-start;
	}
}
</style>
