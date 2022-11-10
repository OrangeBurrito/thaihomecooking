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
		gap: var(--space-lg);
		grid-template-columns: 1fr 1fr;
	}

	button {	
		margin: var(--space-lg) 0 var(--space-xl) 0;
	}
	
	button span {
		margin-right: var(--space-xs);
	}

	@media screen and (min-width: 400px) {
		/* .menu-items {
			grid-template-columns: 1fr 1fr;
		} */
	}

	@media screen and (min-width: 680px) {
		.menu-items {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media screen and (min-width: 950px) {
		.menu-items {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>