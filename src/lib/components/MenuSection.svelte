<script>
  import Icon from "./Icon.svelte";
  import MenuItem from "./MenuItem.svelte";

	import menu from "$lib/menu.json";


  export let arr = [];
  export let sliceByAmount = 6;

	let minSlice = 0;
	let maxSlice = sliceByAmount;

	function previousItem() {
		if (minSlice >= sliceByAmount) {
			minSlice = minSlice - +sliceByAmount;
			maxSlice = maxSlice - +sliceByAmount;
		}
	}
	
	function nextItem() {
		if (maxSlice <= arr.length) {
			minSlice = minSlice + +sliceByAmount;
			maxSlice = +maxSlice + +sliceByAmount;
		}
	}
</script>

<div class="menu-section">
  <div class="menu-items">
    {#each arr.slice(minSlice, maxSlice) as menuItem}
      <MenuItem image={menuItem.photo} name={menuItem.name} description={menuItem.description} />
    {/each}
  </div>

  <div class="buttons flex">
    <button on:click={previousItem}>
      <Icon icon="arrow_back" size="var(--space-4xl)" />
    </button>
    <button on:click={nextItem}>
      <Icon icon="arrow_forward" size="var(--space-4xl)" />
    </button>
  </div>
</div>

<style>
  .menu-section {
    display: inline-block;
    position: relative;
  }
  .menu-items {
    display: grid;
    grid-gap: var(--space-xl);
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 5rem;
  }

  .buttons {
    width: 115%;
		right: -7.5%;
		/* right: 1%; */
    top: 35%;
    position: absolute;
    justify-content: space-between;
  }

  button {
    cursor: pointer;
    background: none;
		border: none;
  }
</style>
