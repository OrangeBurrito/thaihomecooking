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
  #root {
    /* display: flex; */
  }

  /* header { */
    /* padding: var(--space-24) var(--space-32); */
  /* } */
</style>
