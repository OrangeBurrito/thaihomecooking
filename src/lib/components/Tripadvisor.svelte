<script>
	import InlineSVG from 'svelte-inline-svg'
  import Link from './Link.svelte';
</script>

<div class="tripadvisor flex-center">
	<p class="caption mb-0">Rated 5/5 Stars on</p>
	<InlineSVG src={'/images/tripadvisor_banner.svg'}/>
	<h1 class="stars headline-1">★★★★★</h1>
	<Link href="https://www.tripadvisor.com/Attraction_Review-g293916-d1997519-Reviews-Thai_Home_Cooking_Class_since_2004-Bangkok.html" text="176 reviews"/>
</div>

<style>
	.tripadvisor {
		height: fit-content;
	}

	.stars {
		color: #34E0A1;
		margin-bottom: var(--space-16);
	}

	a {
		color: inherit;
		opacity: 0.6;
		text-decoration: underline;
	}
</style>