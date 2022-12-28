<script>
  import Navbar from "../lib/components/Navbar.svelte";
  import "./style.css";
</script>

<div id="root">
	<Navbar />
	<main>
    <slot />
  </main>
</div>
<style>

	@media screen and (min-width: 800px) {
		#root {
			display: flex;
		}
	}

  /* header { */
    /* padding: var(--space-24) var(--space-32); */
  /* } */
</style>
