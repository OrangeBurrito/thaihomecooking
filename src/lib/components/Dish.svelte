<script>
	export let photo = '';
	export let photoAlt = '';
	export let name = '';
	export let englishName = '';
</script>

<div class="dish">
	<img src={photo} alt={photoAlt}>
	<h3>{name}</h3>
	<p>{englishName}</p>
</div>

<style>
	.dish {
		max-width: 180px;
	}
	
	.dish img {
		width: 100%;
		height: 60px;
		object-fit: cover;
	}
</style>