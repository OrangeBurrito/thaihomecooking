<script>
  export let blogposts = {};
</script>

<div class="reviews-wrap flex-gap">
  <div class="main-reviews">
    {#each blogposts.main as post}
      <div class="card flex-gap">
        <p class="snippet large">{@html post.snippet}</p>
        <a class="text" href={post.url} target="_blank">
          <p class="blog-name large mb-0">{post.blogName}</p>
          <a class="blog-link" href={post.url} target="_blank">Read More ⇒</a>
        </a>
      </div>
    {/each}
  </div>
  <div class="all-reviews">
		<h2 class="headline-2">All Reviews</h2>
		<div class="links">
			{#each blogposts.all as post}
				<a class="card small-card" href={post.url}>
					<h4 class="headline-4 title">{post.title}</h4>
					<div>
						<h4 class="headline-4 blog-name mb-s">{post.blogName}</h4>
						<a class="blog-link" href={post.url} target="_blank">Read More ⇒</a>
					</div>
				</a>
			{/each}
		</div>
  </div>
</div>

<style>
	.reviews-wrap {
		align-items: flex-start;
	}
  .main-reviews {
    display: grid;
    gap: var(--space-32);
  }

	.all-reviews h2 {
		margin-bottom: var(--space-24);
	}

  .all-reviews .links {
    display: grid;
    gap: var(--space-32);
  }

  .card {
    justify-content: space-between;
    padding: var(--space-32);
    background: var(--white);
  }

  .small-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: none;
    padding: 0;
  }

  .small-card .title {
    margin-bottom: var(--space-24);
  }

  h4 {
    font-family: var(--body-font);
    font-weight: 600;
  }

  h4.title {
    font-family: var(--headline-font);
    max-width: 40ch;
  }

  .main-reviews .blog-name {
    font-weight: 500;
    font-size: calc(var(--body-large) + var(--unit-sm) / 2);
    margin-top: var(--space-16);
  }

  .all-reviews .blog-name {
    color: var(--body-text-color);
  }

  .snippet {
    position: relative;
    margin-top: var(--space-40);
    font-size: var(--body-font);
    line-height: calc(var(--body) + var(--space-8));
  }

  .snippet::before {
    content: "“";
    position: absolute;
    top: -1ch;
    left: -0.1ch;
    font-size: var(--space-128);
    color: var(--dark-gray);
    transform: scale(1, -1);
  }

  .blog-link {
    color: var(--link-color);
    text-decoration: underline;
  }

  @media screen and (min-width: 800px) {
    .snippet {
      font-size: var(--body-large);
      line-height: calc(var(--body-large) + var(--space-8));
    }
  }

  @media screen and (min-width: 1200px) {
    .main-reviews,
    .all-reviews .links2 {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
