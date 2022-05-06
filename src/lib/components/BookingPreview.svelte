<script>
	import FormInput from '$lib/components/FormInput.svelte'
</script>

<div class="booking">
	<h2>Book a cooking class</h2>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

	<form action="/booking" method="get">
		<FormInput type="text" id="text" name="text">Text</FormInput>
		<button type="submit">Submit</button>
	</form>
</div>

<style>
	.booking {
		background: var(--primary-variant);
		color: var(--on-primary-variant);
	}
</style>