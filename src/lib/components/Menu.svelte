<script>
  import Dish from "$lib/components/Dish.svelte";
  import menu from "$lib/menu.json";
</script>

<div class="menu">
  <div class="dishes">
    <h2 class="dishes-title">Dishes</h2>
    {#each menu.dishes as dish}
      <Dish photo={`/images/menu/dishes/${dish.photo}`} name={dish.name} englishName={dish.englishName} />
    {/each}
		<a href="/menu">View all Dishes</a>
  </div>
  <div class="desserts">
    <h2 class="dishes-title">Desserts</h2>
    {#each menu.desserts as dessert}
      <Dish photo={`/images/menu/desserts/${dessert.photo}`} name={dessert.name} englishName={dessert.englishName} />
    {/each}
		<a href="/menu#desserts">View all Desserts</a>
  </div>
</div>

<style>
  .dishes,
  .desserts {
    display: flex;
  }
</style>
