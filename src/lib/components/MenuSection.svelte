<script>
  import Icon from "./Icon.svelte";
  import MenuItem from "./MenuItem.svelte";

  export let arr = [];
  export let sliceByAmount = 6;

  let minSlice = 0;
  let maxSlice = sliceByAmount;

  let backDisabled = true;
  let forwardDisabled = false;

  function previousItem() {
		if (!backDisabled) {
			if (minSlice <= sliceByAmount) {
				backDisabled = true;
			}
			if (maxSlice <= arr.length) {
				forwardDisabled = false;
			}
	
			minSlice = minSlice - +sliceByAmount;
			maxSlice = maxSlice - +sliceByAmount;
		}
  }

  function nextItem() {
    if (!forwardDisabled) {
      if (maxSlice >= arr.length - sliceByAmount) {
        forwardDisabled = true;
      }
      if (maxSlice >= sliceByAmount && maxSlice < sliceByAmount + 1) {
        backDisabled = false;
      }
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
    <button class:disabled={backDisabled} on:click={previousItem}>
      <Icon icon="arrow_back" size="var(--space-4xl)" />
    </button>
    <button class:disabled={forwardDisabled} on:click={nextItem}>
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

  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border: 1px solid red;
  }
</style>
