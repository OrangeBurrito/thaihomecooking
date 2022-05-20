<script>
	import Feature from "$lib/components/Feature.svelte";

	let featureData = [
		{icon: 'group.svg', text: 'Private, personalized cooking lessons'},
		{icon: 'menu.svg', text: 'More than 100 recipes from my family cookbook gathered over three generations'},
		{icon: 'translate.svg', text: 'Cooking lessons can be held in English and Thai'},
		{icon: 'shopping.svg', text: '<em>Optional:</em> go to the market with me to select ingredients'},
		{icon: 'dish.svg', text: 'Each lesson covers three dishes of your choice'},
	]
</script>

<div class="features">
	<h2>Why Thai Home Cooking?</h2>
	<div class="list">
		{#each featureData as feature}
		<Feature icon={`/images/icons/${feature.icon}`} text={feature.text}/>
		{/each}
	</div>
</div>

<style>
	.features {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.5rem;
	}

	.features .list {
		display: grid;
		gap: 1rem;
	}
	
	@media (min-width: 600px) {
		.features {
			max-width: var(--max-width);
			margin: 0 auto;
			padding: 3rem 1.5rem;
		}
		
		.features .list {
			grid-template-columns: 1fr 1fr;
			gap: 1.5rem;
		}
	}
</style>