<script>
	import { fade, fly } from 'svelte/transition'
	import Review from './Review.svelte'
	export let reviews = []

	let reviewIndex = 0
	let currentReview

	function previousReview() {
		if (reviewIndex <= 0) {
			reviewIndex = reviews.length
		}
		reviewIndex--
	}

	function nextReview() {
		if (reviewIndex >= reviews.length-1) {
			reviewIndex = -1
		}
		reviewIndex++
	}

	$: currentReview = reviews[reviewIndex]
</script>

<div class="reviews-wrap">
	<h2>What Students are Saying</h2>
	<div class="reviews">
		<Review
		review={currentReview.review}
		reviewer={currentReview.reviewer}
		reviewerProfile={currentReview.pfp}
		reviewerLocation={currentReview.reviewerLocation}
		/>
	</div>
	<button class="review-button" on:click={previousReview}>PREV</button>
	<button class="review-button" on:click={nextReview}>NEXT</button>
	<div class="dots">
		{#each reviews as r, i}
		<div class="dot" class:selected-dot="{i === reviewIndex}"/>
		{/each}
	</div>
</div>

<style>
	.reviews-wrap {
		display: grid;
		flex-direction: column;
		gap: 1rem;
		background: var(--surface);
		padding: 2rem;
	}

	.reviews-wrap h2 {
		text-align: center;
		padding-bottom: 2rem;
	}

	.dots {
		padding: 2rem;
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