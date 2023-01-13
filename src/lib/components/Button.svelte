<script>
  export let text = "";
  export let href = undefined;
  export let alt = undefined;
  export let large = false;
  export let primary = false;
  export let ghost = false;
  export let menu = false;
  export let open = false;
</script>

{#if href}
  <a {href} {alt}>
    <button on:click class:large class:primary class:ghost>{text}</button>
  </a>
{:else if menu}
  <button on:click|preventDefault class:menu class:open class="flex-gap">
    <div />
    <div />
    <div />
  </button>
{:else}
  <button on:click class:large class:primary class:ghost>{text}</button>
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

  button.menu {
    height: fit-content;
    justify-content: space-between;
    gap: 6px;
    padding: 0;
    background: none;
  }

  button.menu div {
		position: relative;
    width: var(--space-24);
    height: 3px;
    background: black;
		transition: 0.2s ease;
  }

  button.menu.open div:nth-of-type(1) {
		transform: rotate(-45deg) translate(-8px, 6px);
  }
  button.menu.open div:nth-of-type(2) {
    opacity: 0;
  }

  button.menu.open div:nth-of-type(3) {
		transform: rotate(45deg) translate(-6.5px, -5px);
  }

  @media screen and (min-width: 1000px) {
    button.menu {
      display: none;
    }
  }
</style>
