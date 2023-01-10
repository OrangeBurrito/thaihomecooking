<script>
  export let text = "";
	export let href = undefined
	export let alt = undefined
	export let large = false
  export let primary = false;
  export let ghost = false;
</script>

{#if href}
	<a {href} {alt}>
		<button class:large class:primary class:ghost>{text}</button>
	</a>
{:else}
	<button class:large class:primary class:ghost>{text}</button>
{/if}

<style>
  button {
    cursor: pointer;
    font-size: var(--button);
    background: var(--gray);
    padding: var(--space-16) var(--space-32);
    border: none;
  }

	button.large {
		font-size: var(--button-large);
		font-weight: 600;
	}

	button.primary {
		font-family: var(--headline-font);
	}

	button.ghost {
		font-weight: 400;
		padding: 0;
		color: var(--body-text-color);
		background: none;
		border-bottom: 1px solid var(--border-color);
	}
</style>
