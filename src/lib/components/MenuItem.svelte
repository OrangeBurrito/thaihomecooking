<script>
	export let image = ''
	export let name = ''
	export let description = ''
</script>

<div class="menu-item center" style={`background-image: url(${image})`}>
	<h3>{name}</h3>
	<p>{description}</p>
</div>

<style>
	.menu-item {
		width: 15em;
		height: 10em;
		padding: var(--space-xl);
		text-align: center;
	}

</style>