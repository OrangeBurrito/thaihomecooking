<script>
  import Navbar from "../lib/components/Navbar.svelte";
  import "./style.css";
</script>

<svelte:head>
	<title>Thai Home Cooking - Private Thai Cooking Classes in Bangkok</title>
	<meta name="description" content="Private Thai cooking lessons in Bangkok. You choose the dishes from a family recipe book containing 100+ recipes."/>
	<meta name="keywords" content="thai food, khao pat, pat thai, pad thai, gai pat metmamuang, cooking thai, thai cooking, home cooking, thai home cooking, angsana andersson, khao pat sapparot, yam moo yang, tom yam gung, pod pia tod, spring rolls, tom kha gai, gaeng ga-rii gai, satay, laab, larb, sweet and sour"  />
</svelte:head>

<div id="root">
	<Navbar />
	<main>
    <slot />
  </main>
</div>
<style>

	@media screen and (min-width: 1000px) {
		#root {
			display: flex;
		}
	}

  /* header { */
    /* padding: var(--space-24) var(--space-32); */
  /* } */
</style>
