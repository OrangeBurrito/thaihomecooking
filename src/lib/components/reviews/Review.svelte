<script>
	export let review = ''
	export let reviewer = ''
	export let reviewerProfile = ''
	export let reviewerLocation = ''
</script>

<div class="review">
	<p>{review}</p>
	<div class="user-info">
		<img src="{reviewerProfile}" alt="">
		<div class="text">
			<h4>{reviewer}</h4>
			<p>{reviewerLocation}</p>
		</div>
	</div>
</div>


<style>
	.review img {
		width: 60px;
		height: 60px;
		background: gray;
		border-radius: 50%;
	}

	.user-info {
		display: flex;
	}
</style>