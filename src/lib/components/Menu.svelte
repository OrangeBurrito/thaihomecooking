<script>
  import menu from "$lib/menu.json";
import MenuSection from "./MenuSection.svelte";

  let sliceByAmount = 6;
  let minSlice = 0;
  let maxSlice = sliceByAmount;

  function previousItem() {
    if (minSlice >= 6) {
      minSlice -= sliceByAmount;
      maxSlice -= sliceByAmount;
    }
  }

  function nextItem(arr) {
    if (maxSlice + sliceByAmount <= (arr.length + sliceByAmount-1)) {
      minSlice += sliceByAmount;
      maxSlice += sliceByAmount;
    }
  }
</script>

<div class="menu fullpage">
	<section class="dishes">
		<MenuSection arr={menu.dishes} sliceByAmount=8/>
	</section>
	<section class="dishes">
		<MenuSection arr={menu.desserts} sliceByAmount=4/>
	</section>
</div>

<style>
</style>
