<script>
  import MenuItem from "./MenuItem.svelte";

  export let arr = [];
  export let sliceByAmount = 6;

  let minSlice = 0;
  let maxSlice = sliceByAmount;

  function previousItem() {
    if (minSlice >= sliceByAmount) {
      minSlice -= sliceByAmount;
      maxSlice -= sliceByAmount;
    }
  }

  function nextItem() {
    if (maxSlice + sliceByAmount <= arr.length + sliceByAmount - 1) {
      minSlice += sliceByAmount;
      maxSlice += sliceByAmount;
    }
  }
</script>

<div class="menu-items">
  {#each arr.slice(minSlice, maxSlice) as menuItem}
    <MenuItem image={menuItem.photo} name={menuItem.name} description={menuItem.description} />
  {/each}
</div>

<div class="buttons">
  <button on:click={previousItem}>Previous</button>
  <button on:click={nextItem}>Next</button>
</div>

<style>
  .menu-items {
    display: grid;
    grid-gap: var(--space-xl);
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 5rem;
  }
</style>
