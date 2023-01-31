<script>
  export let highlighted = false;
  export let people = "";
  export let price = "";
  export let per = "";
</script>

<div class="price flex-center" class:highlighted>
  <h4>{people}</h4>
  <h2 class="mb-0">{price}</h2>
  <p class="mb-0">{per}</p>
</div>

<style>
  .price {
    padding: var(--space-16) var(--space-32);
    background: var(--white);
	justify-content: flex-start;
  }

  .highlighted {
    border-top: 6px solid var(--primary-light);
  }

  .highlighted h4 {
	color: var(--primary);
	font-size: var(--headline-3);
  }

  h2 {
    font-family: var(--body-font);
	font-weight: 400;
  }

  p {
    font-size: var(--space-16);
    line-height: var(--space-20);
    margin-top: var(--unit-sm);
	max-width: 10ch;
  }

  h4 {
    font-weight: 600;
    margin-bottom: var(--space-24);
  }

  @media screen and (min-width: 600px) {
    .price {
      padding: var(--space-24) var(--space-32);
    }
  }
</style>
