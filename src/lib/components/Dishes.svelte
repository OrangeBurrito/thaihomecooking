<script>
	export let data = {}
</script>

<div class="dishes">
	{#each data as dish}
	<div class="dish">
		<img src={dish.photo} alt="">
		<div class="text">
			<h4 class="headline-4">{dish.name}</h4>
			<p class="small mb-0">{dish.description}</p>
		</div>
	</div>
	{/each}
</div>

<style>
	.dishes {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: var(--space-24);
	}

	.dish img {
		width: 100%;
		min-height: 150px;
		background: var(--gray);
		margin-bottom: var(--space-8);
	}
</style>