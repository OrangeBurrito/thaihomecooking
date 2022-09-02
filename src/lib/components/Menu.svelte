<script>
  import MenuSection from "./MenuSection.svelte";
  import menu from "$lib/menu.json";
</script>

<div class="menu flex-vertical center">
	<section class="dishes">
		<h2>Dishes</h2>
    <MenuSection arr={menu.dishes} sliceByAmount=8 />
  </section>
  <section class="desserts">
		<h2>Desserts</h2>
    <MenuSection arr={menu.desserts} sliceByAmount=4 />
  </section>
</div>

<style>
	section h2 {
		text-align: center;
		padding-bottom: var(--space-lg);
	}
</style>
