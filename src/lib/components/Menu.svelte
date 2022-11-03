<script>
  import MenuSection from "./MenuSection.svelte";
  import menu from "$lib/menu.json";
  import { onMount } from "svelte";

	let dishesAmount = 8
	let dessertsAmount = 4

	let getVariable = () => {}

  onMount(() => {
		getVariable = (variable) => {
			return getComputedStyle(document.body).getPropertyValue(variable)
		}
  })

		$: dishesAmount = getVariable("--dishes-displayed")
		$: dessertsAmount = getVariable("--desserts-displayed")

		function changeVal() {
			dishesAmount = 2
			console.log(dishesAmount)
		}
</script>


<button on:click={changeVal}>changeval</button>
<div class="menu flex-vertical center">
  <section class="dishes">
    <h2>Dishes</h2>
    <MenuSection arr={menu.dishes} sliceByAmount={dishesAmount} />
  </section>
  <section class="desserts">
    <h2>Desserts</h2>
    <MenuSection arr={menu.desserts} sliceByAmount={dessertsAmount} />
  </section>
</div>

<style>
  section h2 {
    text-align: center;
    padding-bottom: var(--space-lg);
  }

  @media screen and (max-width: 1200px) {
		:root {
			--dishesAmount: 6;
		}
  }
</style>
