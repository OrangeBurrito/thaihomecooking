<script>
	import '../styles/global.css'
</script>

<header>
	<h3><a href="/">Thai Home Cooking</a></h3>
</header>

<slot/>

<footer>
	<p>© Angsana Andersson 2004-2022</p>
	<p>- Website Made By <a class="link-light" href="https://orangeburrito.com">OrangeBurrito</a> -</p>
</footer>

<style>
	header {
		text-align: center;
		background: var(--primary);
		padding: 0.5rem;
	}

	header a {
		color: var(--on-primary);
	}

	footer {
		text-align: center;
		background: var(--primary-variant);
		color: var(--on-primary-variant);
		padding: 1rem;
	}

	footer p:first-of-type {
		padding-bottom: 0.5rem;
	}
</style>