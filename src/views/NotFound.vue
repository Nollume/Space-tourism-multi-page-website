<template>
	<div class="not-found-container">
		<h2>404</h2>
		<h3>Page not found</h3>
	</div>
</template>

<style scoped>
.not-found-container {
	padding-top: 5.5rem;
	background-image: url('../assets/images/home/background-home-mobile.jpg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
	padding-bottom: 1.5rem;
}
h2,
h3 {
	font-size: 3rem;
	color: var(--headline-color);
	font-weight: 400;
	text-align: center;
}

h3 {
	font-size: 2rem;
}
@media only screen and (min-width: 47.5rem) {
	.not-found-container {
		background-image: url('../assets/images/home/background-home-tablet.jpg');
	}
}

@media only screen and (min-width: 75rem) {
	.not-found-container {
		min-height: 100vh;
		background-image: url('../assets/images/home/background-home-desktop.jpg');
	}
}
</style>
