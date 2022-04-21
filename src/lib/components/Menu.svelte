<script>
	import Dish from "$lib/components/Dish.svelte";
	import menu from '$lib/menu.json'

</script>
<div class="menu">
	<div class="dishes">
		{#each menu.dishes as dish}
			<Dish photo={`/images/menu/dishes/${dish.photo}`} name={dish.name} englishName={dish.englishName}/>
			{/each}
		</div>
		<div class="desserts">
			{#each menu.desserts as dessert}
			<Dish photo={`/images/menu/desserts/${dessert.photo}`} name={dessert.name} englishName={dessert.englishName}/>
		{/each}
	</div>
</div>

<style>
	.dishes, .desserts {
		display: flex;
	}
</style>
