<template>
	<div class="technology-container">
		<div class="container" v-if="filterData.length">
			<div class="head-container">
				<span>03</span>
				<h5>space launch 101</h5>
			</div>
			<div class="image">
				<picture>
					<source
						:srcset="getImageUrl(filterData[0].images.portrait)"
						media="(min-width: 1200px)"
					/>
					<img
						:src="getImageUrl(filterData[0].images.landscape)"
						:alt="'Image of ' + filterData[0].name"
					/>
				</picture>
			</div>
			<ul>
				<li v-for="(item, index) in store.technologyData" :key="item.name">
					<router-link
						:to="{
							name: 'technology',
							params: {
								name: formatName(item.name),
							},
						}"
					>
						{{ index + 1 }}
					</router-link>
				</li>
			</ul>
			<div class="text-container">
				<h5 class="role">The terminology...</h5>
				<h3>{{ filterData[0].name }}</h3>
				<p class="description">{{ filterData[0].description }}</p>
			</div>
		</div>
		<div v-else class="loading-container">
			<p class="loading">Loading...</p>
			<img class="load-img" src="/images/1484.gif" alt="loading" />
		</div>
		<div v-if="store.technologyError" class="error">
			{{ store.technologyError }}
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { useCounterStore } from '@/stores/store.js'

const store = useCounterStore()

onMounted(() => {
	store.getTechnologyData()
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
	filterData.value = store.technologyData.filter((item) => {
		return formatName(item.name) === props.name
	})
})
function getImageUrl(name) {
	return new URL(`/src/assets/images/technology/${name}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins';

.technology-container {
	padding-top: 5.5rem;
	background-image: url('../assets/images/technology/background-technology-mobile.jpg');
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

	& img {
		width: 100%;
		height: auto;
	}
}

ul {
	padding: 0;

	margin-block: 2rem;
	@extend %flex-center;

	gap: 1rem;

	& li {
		@extend %flex-center;
		list-style: none;

		cursor: pointer;
		aspect-ratio: 1;
		width: 2.5rem;
		border-radius: 50%;

		& a {
			@extend %flex-center;
			text-decoration: none;
			flex-grow: 1;
			aspect-ratio: 1;
			border-radius: 50%;
			color: var(--headline-color);
			font-size: 1rem;
			border: 0.0625rem solid var(--accent1);

			&:is(:active, :hover) {
				border: 0.0625rem solid var(--headline-color);
			}
			&.router-link-active {
				border: none;
				color: var(--bg);
				background-color: var(--headline-color);
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
	padding-inline: 1.5rem;
	min-height: 7.8125rem;
}

.role {
	color: var(--text);
	font-family: var(--barlow);
	text-align: center;
	letter-spacing: 0.1475rem;
	text-transform: uppercase;
	font-size: 0.875rem;
	margin-bottom: 0.5rem;
	margin-top: 0;
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
	.technology-container {
		padding-top: 8.5rem;
		background-image: url('../assets/images/technology/background-technology-tablet.jpg');
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
		margin-top: calc(13.75rem - 8.5rem - 1.4375rem);
	}
	ul {
		margin-top: 3.5rem;
		margin-bottom: 3rem;

		& li {
			@extend %flex-center;
			list-style: none;

			cursor: pointer;
			aspect-ratio: 1;
			width: 3.75rem;
			border-radius: 50%;

			& a {
				font-size: 1.5rem;
			}
		}
	}
	.text-container {
		margin: 0 auto;
		width: 28.625rem;
	}
	.description {
		font-size: 1rem;

		line-height: 1.75rem;
		letter-spacing: 0.0625rem;

		margin-bottom: 1.75rem;

		padding-inline: 0.5rem;
		min-height: 7.8125rem;
	}

	.role {
		margin-bottom: 1rem;

		letter-spacing: 0.1688rem;
		font-size: 1rem;
	}

	h3 {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
		margin-top: 0.5rem;
	}
}
@media only screen and (min-width: 75rem) {
	.technology-container {
		min-height: 100vh;
		background-image: url('../assets/images/technology/background-technology-desktop.jpg');
	}
	.container {
		margin-left: 10%;
		display: grid;
		align-items: center;
		column-gap: 4rem;
		grid-template-columns: 5rem 30.625rem 1fr;
	}

	.head-container {
		grid-column: span 3;
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

	ul {
		margin-top: unset;
		margin-bottom: unset;

		grid-column-start: 1;
		grid-row-start: 2;
		flex-direction: column;

		& li {
			width: 5rem;

			& a {
				font-size: 2rem;
			}
		}
	}
	.text-container {
		grid-column-start: 2;
		grid-row-start: 2;
		min-height: 17.6875rem;
	}
	.description {
		font-size: 1.125rem;
		text-align: left;
		line-height: 2rem;
		letter-spacing: 0;

		width: 27.75rem;
		margin-bottom: 0;

		padding-inline: 0rem;
		min-height: 7.8125rem;
	}

	.role {
		text-align: left;
		margin-bottom: 1rem;
	}

	h3 {
		font-size: 3.5rem;
		white-space: nowrap;
		text-align: left;
		margin-bottom: 1.5rem;
		margin-top: 0.5rem;
	}
	.image {
		margin-top: 0;
		width: 32.1875rem;
		justify-self: end;
	}
}
</style>
