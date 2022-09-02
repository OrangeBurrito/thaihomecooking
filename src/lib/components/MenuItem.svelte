<script>
	export let image = ''
	export let name = ''
	export let description = ''
</script>

<div class="menu-item center" style={`background-image: url(${image})`}>
	<div class="text">
		<h3>{name}</h3>
		<p>{description}</p>
	</div>
</div>

<style>
	.menu-item {
		width: 15em;
		height: 10em;
		padding: var(--space-xl);
		text-align: center;
		background-color: var(--primary-variant);
	}
	
	.menu-item .text {
		mix-blend-mode: difference;
	}

	.text h3 {
		padding-bottom: var(--space-xxs);
	}
	
	.text > * {
		color: white;
	}

</style>