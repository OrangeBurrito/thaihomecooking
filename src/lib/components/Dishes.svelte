<script>
	import menu from '$lib/menu.json'
	export let type = 'dish'
</script>

<div class="dishes">
	{#each menu.dishes as dish}
	<p>{dish.name}</p>
	{/each}
</div>