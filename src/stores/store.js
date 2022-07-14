import { defineStore } from 'pinia'
import router from '../router/index'
import axios from 'axios'

export const useCounterStore = defineStore({
	id: 'store',
	state: () => ({
		openNav: false,
		showNavLinks: true,
		hamburgerSvg: true,
		destinationData: [],
		destinationError: '',
		crewData: [],
		crewError: '',
		technologyData: [],
		technologyError: '',
		destinationActive: false,
		crewActive: false,
		technologyActive: false,
	}),
	getters: {},
	actions: {
		activeLinks() {
			if (window.location.href.includes('destination')) {
				this.destinationActive = true
				this.crewActive = false
				this.technologyActive = false
			} else if (window.location.href.includes('crew')) {
				this.destinationActive = false
				this.crewActive = true
				this.technologyActive = false
			} else if (window.location.href.includes('technology')) {
				this.destinationActive = false
				this.crewActive = false
				this.technologyActive = true
			} else {
				this.destinationActive = false
				this.crewActive = false
				this.technologyActive = false
			}
		},
		redirectToHome() {
			router.push({ name: 'home' })
		},
		redirectDestination() {
			router.push({ name: 'destination' })
		},
		redirectToNotFound() {
			router.push({ name: 'NotFound' })
		},
		showNavigation() {
			this.showNavLinks = false
			setTimeout(() => {
				this.showNavLinks = true
			}, 400)
		},
		closeNavigation() {
			let mql = window.matchMedia('(min-width: 760px)')
			if (mql.matches) {
				this.openNav = true
			} else this.openNav = false
		},
		screenResolution() {
			let mql = window.matchMedia('(min-width: 760px)')

			if (mql.matches) {
				this.hamburgerSvg = false
				this.openNav = true
			} else {
				this.hamburgerSvg = true
				this.openNav = false
			}
		},

		getDestinationData() {
			axios
				.get('https://api.npoint.io/2e5d3dc675d3343252a9/destinations')
				.then((response) => {
					this.destinationData = response.data
				})
				.catch((err) => {
					console.error(err.message)
					this.destinationError = err.message
				})
		},
		getCrewData() {
			axios
				.get('https://api.npoint.io/2e5d3dc675d3343252a9/crew')
				.then((response) => {
					this.crewData = response.data
				})
				.catch((err) => {
					console.error(err.message)
					this.crewError = err.message
				})
		},
		getTechnologyData() {
			axios
				.get('https://api.npoint.io/2e5d3dc675d3343252a9/technology')
				.then((response) => {
					this.technologyData = response.data
				})
				.catch((err) => {
					console.error(err.message)
					this.technologyError = err.message
				})
		},
	},
})
