<script>
	export let id = ""
	export let name = ""
	export let type = "text"
	export let placeholder = ""
	export let required = false;
</script>

<div class="form-input">
	<label for={id}><slot/></label>
	{#if required}
		<input {type} {id} {name} {placeholder} required>
		{:else}
		<input {type} {id} {name} {placeholder}>
	{/if}
</div>