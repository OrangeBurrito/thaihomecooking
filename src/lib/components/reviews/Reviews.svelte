<script>
	import { fade, fly } from 'svelte/transition'
import Review from './Review.svelte'
	export let reviews = []

	let currentReview = 0

	function previousReview() {
		if (currentReview <= 0) {
			currentReview = reviews.length
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
		<Review review={reviews[currentReview].review} reviewer={reviews[currentReview].reviewer}/>
	</div>
	<button class="review-button" on:click={nextReview}>NEXT</button>
	<div class="dots">
		{#each reviews as r, i}
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