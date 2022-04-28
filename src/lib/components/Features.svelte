<script>
	import Feature from "$lib/components/Feature.svelte";

	let featureData = [
		{icon: 'group.svg', text: 'Private, personalized cooking lessons'},
		{icon: 'translate.svg', text: 'Cooking lessons can be held in English and Thai'},
		{icon: 'menu.svg', text: 'More than 100 recipes from my family cookbook gathered over three generations'},
		{icon: 'dish.svg', text: 'Each lesson covers three dishes of your choice'},
		{icon: 'shopping.svg', text: '<em>Optional:</em> go to the market with me to select ingredients'},
	]
</script>

<div class="features">
	{#each featureData as feature}
	<Feature icon={`/images/icons/${feature.icon}`} text={feature.text}/>
	{/each}
</div>

<style>
	.features {
		padding: 1.5rem;
	}
</style>