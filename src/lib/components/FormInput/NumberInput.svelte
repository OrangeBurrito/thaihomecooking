<script>
	export let id = "";
	export let name = "";
	export let label = ""
	export let placeholder = "";
	export let min = 0;
	export let max = 1;
	export let required = false;
</script>

<div class="number-input">
	<label for={id}>{label}</label>
	{#if required}
	<abbr title="required">*</abbr>
	<input type="number" {id} {name} {placeholder} {min} {max} required/>
	{:else}
	<input type="number" {id} {name} {placeholder}/>
	{/if}
	<slot/>
</div>