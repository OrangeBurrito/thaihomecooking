<script>
  import Dish from "$lib/components/Dish.svelte";
  import menu from "$lib/menu.json";

	export let selected = 'dishes';
	export let fullPage = false;
</script>

<div class="wrap">
	{#if fullPage}
		<div class="dishes fullpage shown">
			<h2 class="title">Dishes</h2>
			{#each menu.dishes as dish}
				<Dish photo={dish.photo} name={dish.name} englishName={dish.englishName} />
			{/each}
		</div>
		<div class="desserts fullpage shown" id="desserts">
			<h2 class="title">Desserts</h2>
			{#each menu.desserts as dessert}
				<Dish photo={dessert.photo} name={dessert.name} englishName={dessert.englishName} />
			{/each}
		</div>
	{:else}
		<div class="dishes" class:shown={selected === 'dishes'}>
			<h2 class="title">Dishes</h2>
			{#each menu.dishes.slice(0,5) as dish}
				<Dish name={dish.name} englishName={dish.englishName} />
			{/each}
			<button>
				<a href="/menu">View all Dishes</a>
			</button>
		</div>
		<div class="desserts" class:shown={selected === 'desserts'}>
			<h2 class="title">Desserts</h2>
			{#each menu.desserts.slice(0,5) as dessert}
				<Dish name={dessert.name} englishName={dessert.englishName} />
			{/each}
			<button>
				<a href="/menu#desserts">View all Desserts</a>
			</button>
		</div>
	{/if}
</div>

<style>
  .dishes,
  .desserts {
    display: none;
		flex-direction: column;
		padding: 1rem;
  }

	.shown {
		display: block;
	}
</style>
