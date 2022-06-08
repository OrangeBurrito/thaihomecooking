<script>
	export let id = "";
	export let name = "";
	export let label = ""
	export let placeholder = "";
	export let min = 0;
	export let max = 1;
	export let required = false;
	export let value

	function handleInput(e) {
		value = e.target.value
	}
</script>

<div class="number-input">
	<label for={id}>{label}</label>
	{#if required}
	<abbr title="required">*</abbr>
	<input type="number" {id} {name} {placeholder} {min} {max} on:input={handleInput} required/>
	{:else}
	<input type="number" {id} {name} {placeholder} on:input={handleInput}/>
	{/if}
	<slot/>
</div>