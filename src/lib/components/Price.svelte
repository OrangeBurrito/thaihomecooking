<script>
  export let selected = '';
</script>

<div class="price" class:selected>
	<h3 class="headline-3">
		<slot name="people"/>
	</h3>
	<h2 class="headline-2 mb-0">
		<slot name="price"/>
	</h2>
  <p class="mb-0">
    <slot name="per"/>
  </p>
</div>

<style>
  .price {
    padding: var(--space-8) var(--space-16);
  }

  .selected {
    border: 2px solid var(--border-color);
  }

  h2, h3 {
    font-family: var(--body-font);
  }

	p {
		font-size: var(--space-16);
		line-height: var(--space-16);
		margin-top: var(--unit-sm);
	}

  h3 {
		font-size: var(--headline-4);
    font-weight: 600;
    margin-bottom: var(--space-24);
  }

  p {max-width: 10ch;}

	@media screen and (min-width: 600px) {
		.price {
			padding: var(--space-16) var(--space-32);
		}

		h3 {
			font-size: var(--headline-3);
		}
	}
</style>