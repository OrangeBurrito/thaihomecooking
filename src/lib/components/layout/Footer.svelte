<footer>
	<p class="mb-0">@ Angsana Andersson {new Date().getFullYear()}</p>
	<p class="mb-0">Designed and built by <a href="https://orangeburrito.com">OrangeBurrito</a></p>
</footer>

<style>
	footer {
		background: var(--dark-gray);
		padding: var(--space-24) var(--space-32);
	}

	footer a {
		color: var(--black);
		text-decoration: underline;
		font-weight: 600;
	}

  @media screen and (min-width: 800px) {
		footer {
			padding: var(--space-32) calc(var(--space-96) + var(--unit-sm));
		}
  }
</style>
