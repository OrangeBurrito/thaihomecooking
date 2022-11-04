<script>
	import menu from "$lib/menu.json";
  import MenuItems from "./MenuItems.svelte";
</script>

<div class="menu-section">
	<header>
		<h1 class="accent">Menu</h1>
		<hr>
	</header>
	<div class="dishes">
		<h2>Dishes</h2>
		<MenuItems data={menu.dishes}/>
	</div>
	<div class="desserts">
		<h2>Desserts</h2>
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

	.menu-section hr {
		border:0;
    height:20px;
    background-image: url('/images/motif.png');
		background-size: auto 20px;
		background-position: center;
		background-repeat: no-repeat;
		padding: 1rem 0 2rem 0;
	}

	h2 {
		text-align: center;
		margin-bottom: var(--space-base);
	}
</style>