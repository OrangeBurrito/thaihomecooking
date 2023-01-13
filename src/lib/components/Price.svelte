<script>
	export let highlighted = false
  export let people = ''
  export let price = ''
	export let per = ''
</script>

<div class="price" class:highlighted>
	<h4>{people}</h4>
	<h2 class="mb-0">{price}</h2>
  <p class="mb-0">{per}</p>
</div>

<style>
  .price {
    padding: var(--space-8) var(--space-16);
  }

  .highlighted {
    border: 2px solid var(--border-color);
  }

  h2 {
    font-family: var(--body-font);
  }

	p {
		font-size: var(--space-16);
		line-height: var(--space-16);
		margin-top: var(--unit-sm);
	}

  h4 {
    font-weight: 600;
    margin-bottom: var(--space-24);
  }

  p {max-width: 10ch;}

	@media screen and (min-width: 600px) {
		.price {
			padding: var(--space-16) var(--space-32);
		}
	}
</style>