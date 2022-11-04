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
	<button on:click={()=>{showAll = true}}><span>▼</span> See More</button>
{:else}
	<button on:click={()=>{showAll = false}}><span>▲</span> See Less</button>
{/if}
<style>
	.menu-items {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-lg);
	}

	button {
		cursor: pointer;
		background: var(--surface);
		padding: var(--space-base);
		font-family: var(--header-font);
		font-size: var(--text-base);
		outline: none;
		border: none;
		padding: var(--space-base) var(--space-lg);
		margin: var(--space-lg) 0 var(--space-xl) 0;
	}
	
	button span {
		margin-right: var(--space-xs);
	}
</style>