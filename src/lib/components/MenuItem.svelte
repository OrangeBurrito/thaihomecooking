<script>
	import { slide } from 'svelte/transition'
	export let data = []
	export let transition = false
</script>

{#if !transition}
<div class="menu-item">
	<img src={data.photo} alt="">
			<h4 class="title">{data.name}</h4>
			<p>{data.description}</p>
</div>
{:else}
<div class="menu-item" transition:slide="{{duration: 800}}">
	<img src={data.photo} alt="">
			<h4 class="title">{data.name}</h4>
			<p>{data.description}</p>
</div>
{/if}

<style>
	.menu-item img {
		height: 100px;
		width: 100%;
		background: var(--primary-dark);
	}

	.menu-item .title {
		margin-bottom: var(--space-xxs);
	}

	@media screen and (min-width: 680px) {
		.menu-item img {
			height: 150px;
		}
	}
</style>