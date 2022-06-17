<script>
  export let name = "";
  export let method = "";
  export let netlify = false;
	export function onSubmit() {}
</script>

<form {name} {method} data-netlify={netlify}>
	{#if netlify}
		<input type="hidden" name="form-name" value={name} />
	{/if}
  <slot />
	<!-- <button type="submit" class="submit-btn" on:click={onSubmit}>Submit</button> -->
</form>

<style>
  form {
    display: grid;
    gap: 1rem;
  }

  /* .submit-btn {
    width: 100%;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
  } */
</style>
