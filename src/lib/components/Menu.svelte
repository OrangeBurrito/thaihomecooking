<script>
	import menu from "$lib/menu.json";
  import MenuItems from "./MenuItems.svelte";
</script>

<div class="menu-section">
	<header>
		<h1>Menu</h1>
		<span class="line">a line</span>
	</header>
	<div class="dishes">
		<h2 class="category-header">Dishes</h2>
		<MenuItems data={menu.dishes}/>
	</div>
	<div class="desserts">
		<h2 class="category-header">Desserts</h2>
		<MenuItems data={menu.desserts} hideNum=4/>
	</div>
</div>

<style>
	.menu-section {
		max-width: 80vw;
		margin: 0 auto;
	}

	.menu-section header {
		text-align: center;
	}

	.category-header {
		margin-bottom: var(--space-base);
	}
</style>