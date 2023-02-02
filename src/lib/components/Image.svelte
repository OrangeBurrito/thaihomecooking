<script>
	export let src = ''
	export let srcSmall = ''
	export let alt = ''
	export let width = '100%'
	export let height = '100%'
	export let eager = false
</script>

<div class="image" style="width: {width}; height: {height}">
	<picture>
		{#if srcSmall}
		<source media='(max-width: 800px)' srcset={srcSmall}>
		{/if}
		<img src={src} {alt} loading={eager ? "eager" : "lazy"}/>
	</picture>
</div>

<style>
	.image {
		background: var(--gray);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	img::before {
		display: block;
		padding: var(--space-16);
	}
</style>