<script>
	export let src = ''
	export let srcSmall = ''
	export let alt = ''
	export let width = '100%'
	export let height = '100%'
</script>

<div class="image" style="width: {width}; height: {height}">
	{#if srcSmall}
	<picture>
		<source media='(min-width: 800px)' srcset={src}>
		<img src={srcSmall} {alt} loading="lazy"/>
	  </picture>	  
	{:else}
	<img {src} {alt} loading="lazy"/>
	{/if}
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