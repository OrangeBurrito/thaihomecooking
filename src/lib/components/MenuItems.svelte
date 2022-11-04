<script>
  import MenuItem from "./MenuItem.svelte";

	export let data = {}
	export let hideNum = 8

	let showAll = false
</script>

<div class="menu-items">
	{#each data.slice(0, hideNum) as dish}
		<MenuItem data={dish}/>
	{/each}
	{#if showAll}
		{#each data.slice(hideNum) as dish}
			<MenuItem data={dish} transition/>
		{/each}
	{/if}
</div>

{#if showAll === false}
	<button on:click={()=>{showAll = true}}>▼ See More</button>
{:else}
	<button on:click={()=>{showAll = false}}>▲ See Less</button>
{/if}
<style>
	.menu-items {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-lg);
	}


	

	.hide-items:nth-child(n+9),
	.hide-less:nth-child(n+5),
	button.hide-items {
		visibility: hidden;
		opacity: 0;
		height: 0;
	}

	button {
		background: var(--surface);
		padding: var(--space-base);
		font-family: inherit;
	}
</style>