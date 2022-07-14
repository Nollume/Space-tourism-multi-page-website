<template>
	<div class="crew-container">
		<div class="container" v-if="filterData.length">
			<div class="head-container">
				<span>02</span>
				<h5>meet your crew</h5>
			</div>
			<div class="order-items">
				<div class="image">
					<img
						:src="getImageUrl(filterData[0].images.png)"
						:alt="'Image of ' + filterData[0].name"
					/>
				</div>
				<div class="container-main">
					<ul>
						<li v-for="member in store.crewData" :key="member.name">
							<router-link
								:to="{
									name: 'members',
									params: {
										name: formatName(member.name),
									},
								}"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="icon icon-tabler icon-tabler-circle"
									width="44"
									height="44"
									viewBox="0 0 24 24"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									stroke="none"
									fill="currentColor"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<circle cx="12" cy="12" r="9" />
								</svg>
							</router-link>
						</li>
					</ul>
					<div class="info-container">
						<h5 class="role">{{ filterData[0].role }}</h5>
						<h3>{{ filterData[0].name }}</h3>
						<p class="description">{{ filterData[0].bio }}</p>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="loading-container">
			<p class="loading">Loading...</p>
			<img class="load-img" src="/images/1484.gif" alt="loading" />
		</div>
		<div v-if="store.crewError" class="error">{{ store.crewError }}</div>
	</div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { useCounterStore } from '@/stores/store.js'

const store = useCounterStore()

onMounted(() => {
	store.getCrewData()
	store.activeLinks()
})
const props = defineProps({
	name: {
		type: String,
	},
})

const formatName = (string) => {
	return string.replace(' ', '-').toLowerCase()
}
const filterData = ref()
watchEffect(async () => {
	filterData.value = store.crewData.filter((item) => {
		return formatName(item.name) === props.name
	})
})

function getImageUrl(name) {
	return new URL(`/src/assets/images/crew/${name}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins';

.crew-container {
	padding-top: 5.5rem;
	background-image: url('../assets/images/crew/background-crew-mobile.jpg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
	overflow-y: hidden;
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
	width: 88%;
	margin: 0 auto;
	margin-top: 2rem;
	@extend %flex-center;
	border-bottom: 1px solid hsla(231, 10%, 42%, 80%);
	& img {
		height: 14rem;
		width: auto;
	}
}

ul {
	padding: 0;
	margin: 0;
	margin-top: 1rem;
	@extend %flex-center;
	gap: 0.5rem;

	& li {
		@extend %flex-center;
		list-style: none;
		width: 1rem;
		cursor: pointer;
		transform: scale(0.3);

		& a {
			text-decoration: none;
			color: var(--accent1);

			&:is(:active, :hover) {
				color: var(--headline-color);
				opacity: 0.5;
			}
			&.router-link-exact-active {
				opacity: 1;
				color: var(--headline-color);
			}
		}
	}
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
	min-height: 9.375rem;
}

.role {
	color: var(--accent1);
	text-align: center;
	text-transform: uppercase;
	font-size: 1rem;
	margin-block: 0.5rem;
	font-weight: 400;
}

h3 {
	color: var(--headline-color);
	text-transform: uppercase;
	font-weight: 400;
	font-size: 1.5rem;
	text-align: center;
	margin-top: 0.5rem;
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
	.crew-container {
		padding-top: 8.5rem;
		background-image: url('../assets/images/crew/background-crew-tablet.jpg');
		padding-bottom: 0;
		min-height: unset;
		max-height: 64rem;
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
	.order-items {
		display: flex;
		flex-direction: column-reverse;
		width: 28.625rem;
		margin: 0 auto;
	}
	.container-main {
		display: flex;
		flex-direction: column-reverse;
	}

	.image {
		width: 100%;

		border-bottom: unset;

		& img {
			height: 33.25rem;
			width: auto;
		}
	}

	.role {
		font-size: 1.5rem;
		margin-block: 0.5rem;
		margin-top: calc(13.75rem - 8.5rem - 1.4375rem);
	}
	h3 {
		margin-top: 0;
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}
	.description {
		font-size: 1rem;
		line-height: 1.75rem;
		font-weight: normal;
		padding-inline: unset;
		min-height: 7rem;
		margin-bottom: 0;
	}
}
@media only screen and (min-width: 75rem) {
	.crew-container {
		background-image: url('../assets/images/crew/background-crew-desktop.jpg');
		max-height: 100vh;
		min-height: 100vh;
		overflow: hidden;
	}
	.head-container {
		margin-left: 0;
		margin-top: calc(13.25rem - 8.5rem);
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
	.container {
		margin-left: 10%;
	}
	.order-items {
		flex-direction: row-reverse;
		width: 100%;
		min-height: 40.875rem;
		position: relative;
	}
	.container-main {
		min-width: 38.3438rem;
		align-items: flex-start;
		justify-content: space-between;

		margin-top: calc(25rem - 15.375rem);
	}

	.image {
		width: 100%;
		height: 40.875rem;
		margin-top: 0rem;
		display: block;
		position: relative;

		& img {
			width: unset;
			height: auto;
			position: absolute;
			bottom: -2rem;
			right: 10%;
		}
	}
	.info-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		min-width: 38.3438rem;
	}
	.role {
		font-size: 2rem;
		margin-block: 1.5rem;
		margin-top: 0;
		text-align: left;
	}
	h3 {
		margin-top: 0;
		font-size: 3.5rem;
		margin-bottom: 2rem;
		text-align: left;
		white-space: nowrap;
	}
	.description {
		text-align: left;
		font-size: 1.125rem;
		line-height: 2rem;

		width: 27.75rem;
		min-height: 10rem;
		margin-inline: unset;
		margin-bottom: 0;
	}
	ul {
		margin-top: 0rem;
		gap: 1rem;
		flex-grow: 2;

		& li {
			transform: scale(0.4);
		}
	}
}
</style>
