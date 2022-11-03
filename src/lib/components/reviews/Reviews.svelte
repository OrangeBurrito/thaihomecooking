<script>
  import blogposts from "$lib/blogposts.json";
  import Icon from "../Icon.svelte";
</script>

<div class="reviews flex-vertical center">
  <h2 class="accent">What Students are Saying</h2>
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
            <h4 class="subsubheader">{blogpost.blogTitle}</h4>
            <Icon icon="open_in_new" fill="var(--link)"/>
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

	main section {
		display: inline-flex;
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
		width: 100%;
  }

	.post-link {
		gap: var(--space-sm);
	}

	@media (min-width: 750px) {
		.reviews main {
		display: inline-grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: var(--space-xl);
	}
	}
</style>