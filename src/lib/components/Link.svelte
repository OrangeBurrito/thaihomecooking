<script>
	export let href = ''
	export let text = ''
</script>

<a {href}>{text}</a>

<style>
	a {
		transition: 50ms ease-out;
		color: var(--link-color);
		border-bottom: 1px solid var(--link-color);
	}

	a:hover {
		font-weight: bold;
		border-bottom: 2px solid var(--primary);
	}
</style>