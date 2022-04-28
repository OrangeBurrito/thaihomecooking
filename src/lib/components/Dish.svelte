<script>
	export let photo = '';
	export let photoAlt = '';
	export let name = '';
	export let englishName = '';
</script>

<div class="dish">
	<div class="text">
		<h3>{name}</h3>
		<p>{englishName}</p>
	</div>
	{#if photo}
		<img src={photo} alt={photoAlt}>
	{/if}
</div>

<style>
	.dish {
		display: flex;
		align-self: center;
		justify-content: space-between;
		gap: 1rem;
		padding-bottom: 1rem;
	}

	.dish p {
		color: var(--on-background-light);
	}

	.dish img {
		width: 60px;
		height: 40px;
		object-fit: cover;
	}
</style>