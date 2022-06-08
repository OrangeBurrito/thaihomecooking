<script>
	export let id = "";
	export let name = "";
	export let label = ""
	export let required = false;
</script>

<div class="text-input">
	<label for={id}>{label}</label>
	{#if required}
	<abbr title="required">*</abbr>
	<select {id} {name} required>
		<slot/>
	</select>
	{:else}
	<select {id} {name}>
		<slot/>
	</select>
	{/if}
</div>