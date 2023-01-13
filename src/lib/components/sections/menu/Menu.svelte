<script>
	import Dishes from "$lib/components/sections/menu/Dishes.svelte";

	export let menu = {}
</script>

<div id="menu" class="flex-gap">
  <h1 class="headline-1 accent">Our Menu</h1>
  <div class="dishes">
		<h2>Dishes</h2>
    <Dishes data={menu.dishes}/>
  </div>
  <div class="desserts">
		<h2>Desserts</h2>
		<Dishes data={menu.desserts}/>
	</div>
</div>

<style>
	#menu {
		gap: var(--space-48);
	}

	#menu h2 { margin-bottom: var(--space-24)}
</style>