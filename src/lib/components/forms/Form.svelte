<script>
  export let name = "";
  export let method = "";
  export let netlify = false;

</script>

{#if netlify}
  <form {name} {method} data-netlify={true}>
    <slot />
		<button type="submit" class="submit-btn">Submit</button>
  </form>
{:else}
  <form {name} {method}>
    <slot />
  </form>
{/if}

<style>
	form {
		display: grid;
		gap: 1rem;
	}
	
	.submit-btn {
		width: 100%;
		padding: 0.5rem 1rem;
		margin-top: 1rem;
	}
</style>