<script>
  import blogposts from "$lib/blogposts.json";
  import Icon from "../Icon.svelte";
</script>

<div class="reviews flex-vertical center fullpage">
  <h2>What Students are Saying</h2>
  <main>
    <section class="tripadvisor-widget flex-vertical">
			<h3>TripAdvisor Reviews</h3>
      <div id="TA_selfserveprop785" class="TA_selfserveprop">
        <ul id="UY3xGunG" class="TA_links Z66PvB">
          <li id="RzRdEA" class="7Rdfgji7xdu">
            <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g293916-d1997519-Reviews-Thai_Home_Cooking_Class-Bangkok.html"
              ><img
                src="/images/tripadvisor_banner.svg"
                alt="TripAdvisor"
              /></a
            >
          </li>
        </ul>
        <script
          async
          src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=785&amp;locationId=1997519&amp;lang=en_US&amp;rating=true&amp;nreviews=5&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=false&amp;border=true&amp;display_version=2"
          data-loadtrk
          onload="this.loadtrk=true"></script>
      </div>
    </section>
    <section class="blogposts flex-vertical">
			<h3>Reviews from Bloggers</h3>
      {#each blogposts as blogpost}
        <div class="blogpost flex-vertical">
          <h4>{blogpost.title}</h4>
          <a class="post-link flex center" href={blogpost.url} target="_blank">
            <p class="subheader">{blogpost.blogTitle}</p>
            <Icon small glyph="open_in_new" dark />
          </a>
        </div>
      {/each}
    </section>
  </main>
</div>

<style>
	.reviews {
		gap: var(--space-xl);
		padding: var(--space-xl);
	}

  .reviews main {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: var(--space-xl);
	}

	main section {
		gap: var(--space-base);
	}

  .tripadvisor-widget {
		background: var(--surface);
		padding: var(--space-base) var(--space-lg);
  }

	.tripadvisor-widget:global(#CDSWIDSSP) {
	width: 100%;
}

	.blogposts {
    align-items: flex-start;
	}

  .blogpost {
		gap: var(--space-xs);
    background: var(--surface);
		padding: var(--space-base) var(--space-lg);
  }

	.post-link {
		gap: var(--space-sm);
	}
</style>


<!-- <script>
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
</style> -->