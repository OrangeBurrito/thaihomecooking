<script>
	import InlineSVG from 'svelte-inline-svg'
</script>

<div class="tripadvisor flex-center">
	<p class="caption mb-0">Rated 5/5 Stars on</p>
	<InlineSVG src={'/images/tripadvisor_banner.svg'}/>
	<h1 class="stars headline-1">★★★★★</h1>
	<a href="">176 reviews</a>
</div>

<style>
	.tripadvisor {
		height: fit-content;
	}
	
	.stars {
		color: #34E0A1;
		margin-bottom: var(--space-16);
	}
</style>