<script>
  import Image from "$lib/components/Image.svelte";


  export let data = {};
</script>

<div class="dishes">
  {#each data as dish}
    <div class="dish">
			<Image src={dish.photo} alt={dish.description} height="var(--img-height)"/>
      <div class="text">
        <h4 class="headline-4 mb-0">{dish.name}</h4>
        <p class="small mb-0">{dish.description}</p>
      </div>
    </div>
  {/each}
</div>

<style>
  .dishes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-16);

		--img-height: var(--space-128);
  }

	.text {
		margin-top: var(--space-8);
	}

  @media screen and (min-width: 600px) {
    .dishes {
      grid-template-columns: repeat(3, 1fr);
			--img-height: calc(var(--space-128) + var(--space-24));
    }
  }

  @media screen and (min-width: 1000px) {
		.dishes {
			grid-template-columns: repeat(4, 1fr);
			gap: var(--space-20);
		}
  }
  @media screen and (min-width: 1200px) {
		.dishes {
			grid-template-columns: repeat(5, 1fr);
			gap: var(--space-24);
		}
  }
</style>
