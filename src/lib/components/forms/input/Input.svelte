<script>
	export let type = "";
	export let id = "";
	export let name = "";
	export let label = ""
	export let placeholder = "";
	export let required = false;
	export let value = "";

	function handleInput(e) {
		value = e.target.value
	}
</script>

<div class="text-input">
	<label for={id}>{label}</label>
	{#if required}
	<abbr title="required">*</abbr>
	{/if}
	<input {type} {id} {name} {placeholder} on:input={handleInput} {required}/>
</div>