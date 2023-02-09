<script>
  import Price from "$lib/components/Price.svelte";
  import Button from "$lib/components/Button.svelte";

</script>
<div id="pricing" class="background">
	<h2>Pricing</h2>
	<div class="prices flex-center">
		<Price people="1 person" price="฿4,000" per="per lesson"/>
		<Price people="2-4 people" price="฿3,500" per="per person and lesson" highlighted/>
		<Price people="5-6 people" price="฿3,000" per="per person and lesson"/>
	</div>
	<Button primary dark large href="#contact" text="Book a Class Now"/>
</div>

<style>
	#pricing {
		text-align: center;
		padding-top: var(--space-32);
	 }

	#pricing .prices {
		
		align-items: stretch;
		gap: var(--space-24);
		margin: var(--space-48) 0;
	}

	@media screen and (min-width: 600px) {
		#pricing .prices {
			flex-direction: row;
		}
	}

</style>