<script>
	import reviews from '$lib/reviews.json'

	let currentReview = 0

	function previousReview() {
		if (currentReview <= 0) {
			currentReview = reviews.length-1
		}
		currentReview--
	}

	function nextReview() {
		if (currentReview >= reviews.length-1) {
			currentReview = -1
		}
		currentReview++
	}
</script>

<div class="reviews-wrap">
	<button class="review-button" on:click={previousReview}>PREV</button>
	<div class="reviews">
		<div class="review">
			<p>{reviews[currentReview].review}</p>
			<h4>{reviews[currentReview].reviewer}</h4>
		</div>
	</div>
	<button class="review-button" on:click={nextReview}>NEXT</button>
	<div class="dots">
		{#each reviews as review, i}
		<div class="dot" class:selected-dot="{i === currentReview}"/>
		{/each}
	</div>
</div>

<style>
	.dots {
		padding: 1rem;
	}
	.dot {
		display: inline-block;
		width: 10px;
		height: 10px;
		background: gainsboro;
		margin-right: 10px;
		border-radius: 50%;
	}

	.selected-dot {
		background: gray;
	}
</style>