<script>
	export let data = {}
	export let hideLess = false

	let hideItems = true
</script>

<div class="menu-items">
	{#each data as dish}
		<div class="menu-item"
		class:hide-items={hideItems === true && hideLess === false}
		class:hide-less={hideItems === true && hideLess === true}
		>
			<img src={dish.photo} alt="">
			<h4 class="title">{dish.name}</h4>
			<p>{dish.description}</p>
		</div>
	{/each}
</div>

<button on:click={()=>{hideItems = false}} class:hide-items={hideItems === false}>See More</button>
<button on:click={()=>{hideItems = true}} class:hide-items={hideItems === true}>See Less</button>

<style>
	.menu-items {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-lg);
	}

	.menu-item img {
		height: 150px;
		width: 100%;
		background: green;
	}

	.menu-item .title {
		margin-bottom: var(--space-xxs);
	}

	.hide-items:nth-child(n+9),
	.hide-less:nth-child(n+5),
	button.hide-items {
		display: none;
	}

	button {
		background: var(--surface);
		padding: var(--space-base);
		font-family: inherit;
	}
</style>