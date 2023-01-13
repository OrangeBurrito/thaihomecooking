<script>
	export let href = ''
	export let text = ''
	export let nav = false
	export let active = false
</script>

<a {href} class:nav class:active on:click>{text}</a>

<style>
	a {
		width: fit-content;
		transition: 50ms ease-out;
		color: var(--link-color);
		border-bottom: 1px solid var(--link-color);
	}

	a.nav {
		color: inherit;
		font-size: var(--headline-4);
		font-weight: bold;
		border-bottom: none;
	}

	a.active, a:hover {
		color: var(--link-color);
		font-weight: bold;
		border-bottom: 2px solid var(--primary);
	}
</style>