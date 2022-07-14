<template>
	<main>
		<h5>So, you want to travel to</h5>
		<h1>Space</h1>
		<p>
			Let’s face it; if you want to go to space, you might as well genuinely go
			to outer space and not hover kind of on the edge of it. Well sit back, and
			relax because we’ll give you a truly out of this world experience!
		</p>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
main {
	width: 87%;
	margin: 0 auto;
}
h1 {
	color: var(--headline-color);

	font-weight: 400;
	font-size: 5rem;
	text-transform: uppercase;
	line-height: 6.25rem;
	text-align: center;
	margin: 0;
}
h5 {
	color: var(--text);
	font-size: 1rem;
	font-weight: normal;
	text-transform: uppercase;
	letter-spacing: 0.1688rem;
	font-family: var(--barlow);
	text-align: center;
	margin-top: 1.5rem;
	margin-bottom: 1rem;
}
p {
	color: var(--text);
	font-size: 1rem;
	font-weight: 400;
	font-family: var(--barlow);
	line-height: 1.5625rem;
	letter-spacing: 0.0625rem;
	margin: 1rem auto;
	text-align: center;
}
@media screen and (min-width: 34.375rem) and (max-width: 47.4375rem) {
	main {
		width: 70%;
	}
}

@media only screen and (min-width: 47.5rem) {
	h5 {
		font-size: 1.25rem;

		letter-spacing: 0.2112rem;

		margin-top: calc(12.625rem - 5.5rem);
		margin-bottom: 1.5rem;
	}
	h1 {
		font-size: 9.375rem;
		line-height: 9.375rem;
	}

	p {
		width: 27.8125rem;
		line-height: 1.75rem;
		text-indent: 0.75rem;
	}
}
@media only screen and (min-width: 75rem) {
	main {
		width: 28.125rem;
		min-height: 23.875rem;
		margin-left: 10.3125rem;
		margin-top: calc(24.1875rem - 5.5rem);
	}
	h5 {
		font-size: 1.75rem;
		text-align: left;
		letter-spacing: 0.295rem;
		margin-bottom: 2rem;
		margin-top: 0;
	}
	h1 {
		text-align: left;
	}
	p {
		text-align: left;
		text-indent: 0rem;
		font-size: 1.125rem;
		line-height: 2rem;
		margin-top: 2rem;
	}
}
</style>
