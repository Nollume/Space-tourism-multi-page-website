<template>
	<Transition name="fade" @enter="store.showNavigation">
		<div class="cover" v-if="store.openNav">
			<div class="line"></div>
			<nav id="nav">
				<div
					class="close-nav"
					v-if="store.hamburgerSvg"
					@click="store.openNav = false"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
						<g fill="#D0D6F9" fill-rule="evenodd">
							<path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
							<path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
						</g>
					</svg>
				</div>
				<ul class="routers" v-if="store.showNavLinks">
					<li>
						<RouterLink :to="{ name: 'home' }" @click="store.closeNavigation"
							><span>00</span> Home</RouterLink
						>
					</li>

					<li>
						<RouterLink
							:to="{ name: 'destinations', params: { name: 'moon' } }"
							:class="{ active: store.destinationActive }"
							@click="store.closeNavigation"
							><span>01</span> Destination</RouterLink
						>
					</li>
					<li>
						<RouterLink
							:to="{ name: 'members', params: { name: 'douglas-hurley' } }"
							:class="{ active: store.crewActive }"
							@click="store.closeNavigation"
							><span>02</span> Crew</RouterLink
						>
					</li>
					<li>
						<RouterLink
							:to="{ name: 'technology', params: { name: 'launch-vehicle' } }"
							:class="{ active: store.technologyActive }"
							@click="store.closeNavigation"
							><span>03</span> Technology</RouterLink
						>
					</li>
				</ul>
			</nav>
		</div>
	</Transition>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useCounterStore } from '@/stores/store.js'

const store = useCounterStore()
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins';
#nav {
	position: absolute;
	top: 0;
	right: 0;
	width: 69%;
	min-height: 100vh;
	background-color: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(2.1875rem);
	overflow: hidden;

	z-index: 99;
}

.cover {
	position: absolute;
	background-color: transparent;
	inset: 0;
	z-index: 50;
}

.routers {
	@extend %flex-center;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	list-style: none;
	margin: 0;
	padding: 0;

	margin-top: 4rem;
	margin-left: 2rem;
	& a {
		color: var(--headline-color);

		font-size: 1rem;
		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 0.1688rem;
		font-family: var(--barlow);
		font-weight: normal;
		&:is(:hover, :active) {
			border-bottom: 0.1875rem solid var(--hover-underline);
		}

		&.active,
		&.router-link-active {
			border-bottom: 0.1875rem solid var(--headline-color);
		}
		& span {
			font-weight: bold;
			color: var(--headline-color);
		}
	}
}
.close-nav {
	display: flex;
	align-items: center;
	justify-content: flex-end;

	margin-top: 2.1219rem;
	margin-right: 1.5rem;

	cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
	transform-origin: right;
	transition: transform 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
	transform: scaleX(0);
}

@media only screen and (min-width: 47.5rem) {
	#nav {
		width: 28.125rem;
		height: 6rem;
		min-height: unset;

		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
	.cover {
		inset: unset;
		width: 28.125rem;
		height: 6rem;
		top: 0;
		right: 0;
	}
	.routers {
		flex-direction: row;
		align-items: flex-start;
		margin-top: unset;
		margin-left: unset;

		& a {
			font-size: 0.875rem;
			letter-spacing: 0.1475rem;
			padding-bottom: 2.35rem;

			& span {
				display: none;
			}
		}
	}
}
@media only screen and (min-width: 75rem) {
	#nav {
		min-width: 51.875rem;
		height: 6rem;
		overflow: unset;
		position: relative;
	}

	.cover {
		margin-left: 7.5rem;
		width: 93%;
		height: 6rem;
		top: 2.5rem;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: center;
	}
	.line {
		align-self: flex-start;
		position: relative;
		top: 50%;
		right: -2rem;
		height: 0.0625rem;
		width: 70%;
		background-color: var(--headline-color);
		z-index: 1000;
		opacity: 25.15%;
	}

	.routers {
		width: 33.875rem;
		justify-content: space-between;

		& a {
			font-size: 1rem;
			letter-spacing: 0.1688rem;
			padding-bottom: 2.35rem;

			& span {
				display: inline;
			}
		}
	}
}
</style>
