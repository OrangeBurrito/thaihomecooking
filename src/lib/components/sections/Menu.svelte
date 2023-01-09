<script>
	import Dishes from "$lib/components/Dishes.svelte";

	export let menu = {}
</script>

<div id="menu" class="flex-gap">
  <h1 class="headline-1">Our Menu</h1>
  <div class="dishes">
		<h2 class="headline-2">Dishes</h2>
    <Dishes data={menu.dishes}/>
  </div>
  <div class="desserts">
		<h2 class="headline-2">Desserts</h2>
		<Dishes data={menu.desserts}/>
	</div>
</div>

<style>
	#menu {
		gap: var(--space-48);
	}

	#menu h2 { margin-bottom: var(--space-24)}
</style>