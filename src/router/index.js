import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import jsonData from '@/data.json'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/destination',
			name: 'destination',
			redirect: '/destination/moon',
		},
		{
			path: '/destination/:name',
			name: 'destinations',
			component: () => import('../views/destinationsView.vue'),
			props: true,
			beforeEnter(to) {
				const name = to.params.name
				const mapData = jsonData.destinations.map((item) => {
					return item.name.toLowerCase()
				})
				const exist = mapData.some((item) => item === name)
				if (!exist) {
					return {
						name: 'NotFound',
						params: { pathMatch: to.path.substring(1).split('/') },
						query: to.query,
						hash: to.hash,
					}
				}
			},
		},
		{
			path: '/crew',
			name: 'crew',
			redirect: '/crew/douglas-hurley',
		},
		{
			path: '/crew/:name',
			name: 'members',
			component: () => import('../views/CrewView.vue'),
			props: true,
			beforeEnter(to) {
				const name = to.params.name

				const mapData = jsonData.crew.map((item) => {
					return item.name.toLowerCase().replace(' ', '-')
				})

				const exist = mapData.some((item) => item === name)
				if (!exist) {
					return {
						name: 'NotFound',
						params: { pathMatch: to.path.substring(1).split('/') },
						query: to.query,
						hash: to.hash,
					}
				}
			},
		},
		{
			path: '/technology',
			name: 'technologyRedirect',
			redirect: '/technology/launch-vehicle',
		},
		{
			path: '/technology/:name',
			name: 'technology',
			component: () => import('../views/TechnologyView.vue'),
			props: true,
			beforeEnter(to) {
				const name = to.params.name

				const mapData = jsonData.technology.map((item) => {
					return item.name.toLowerCase().replace(' ', '-')
				})

				const exist = mapData.some((item) => item === name)
				if (!exist) {
					return {
						name: 'NotFound',
						params: { pathMatch: to.path.substring(1).split('/') },
						query: to.query,
						hash: to.hash,
					}
				}
			},
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('../views/NotFound.vue'),
		},
	],
})

export default router
