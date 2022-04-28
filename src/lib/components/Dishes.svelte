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
			<img class="dish-banner" src="https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="">
			{#each menu.dishes.slice(0,5) as dish}
			<Dish name={dish.name} englishName={dish.englishName} />
			{/each}
			<button class="view-all-btn">
				<a href="/menu">View all Dishes</a>
			</button>
		</div>
		<div class="desserts" class:shown={selected === 'desserts'}>
			<img class="dish-banner" src="https://images.unsplash.com/photo-1582801205465-c0d029e85a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="">
			{#each menu.desserts.slice(0,5) as dessert}
				<Dish name={dessert.name} englishName={dessert.englishName} />
			{/each}
			<button class="view-all-btn">
				<a href="/menu#desserts">View all Desserts</a>
			</button>
		</div>
	{/if}
</div>

<style>
  .dishes,
  .desserts {
    display: none;
  }

	.dish-banner {
		width: 100%;
		height: 100px;
		object-fit: cover;
		margin: 0.8rem 0;
	}

	.view-all-btn {
		margin-top: 1rem;
	}

	.shown {
		display: block;
	}
</style>
