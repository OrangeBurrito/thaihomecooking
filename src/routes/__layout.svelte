<script>
	import '../styles/global.css'
</script>

<header>
	<h2><a href="/">Thai Home Cooking</a></h2>
</header>

<slot/>

<footer>
	<p>© Jane Doe 2004-2022</p>
	<p>- Website Made By <a href="https://orangeburrito.com">OrangeBurrito</a> -</p>
</footer>

<style>
	footer {
		text-align: center;
		background: var(--primary-variant);
		color: var(--on-primary-variant);
		padding: 1rem;
	}

	footer p:first-of-type {
		padding-bottom: 0.5rem;
	}

	footer a {
		color: var(--primary-variant-light);
	}
</style>