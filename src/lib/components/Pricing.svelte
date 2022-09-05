<script>
	let pricingOptions = [
		{
			"pricingPlan": "1 person",
			"price": "3500",
			"per": "per lesson"
		},
		{
			"pricingPlan": "2-4 people",
			"price": "2500",
			"per": "/person and lesson"
		},
		{
			"pricingPlan": "5-6 people",
			"price": "2000",
			"per": "/person and lesson"
		}
	]
</script>

<div class="pricing flex-vertical">
	<h2 class="pad accent">Pricing</h2>
	{#each pricingOptions as option}
		<div class="pricing-option">
			<h4 class="subheader">{option.pricingPlan}</h4>
			<span>
				<span class="currency">฿ {option.price}</span>
				<span class="secondary">{option.per}</span>
			</span>
		</div>
	{/each}
</div>

<style>
	.pricing {
		gap: var(--space-xs);
	}
	.pricing-option {
		display: grid;
		grid-template-columns: 1fr 2fr;
		align-items: center;
		width: 50%;
	}

	.currency {
		font-weight: bold;
		font-size: var(--text-lg);
	}
</style>