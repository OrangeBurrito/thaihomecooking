<script>
	export let type = "text"
	export let id = ""
	export let name = ""
	export let label = ""
	export let placeholder = ""
	export let required = false;

	export let min = 0;
	export let max = 0;
</script>

<div class="form-input">
	<label for={id}>{label}</label>
	{#if type == "select"}
		{#if required}
			<select {id} {name} required>
				<slot/>
			</select>
			{:else}
			<select {id} {name}>
				<slot/>
			</select>
		{/if}
	{:else if type == "number"}
			{#if required}
				<abbr title="required">*</abbr>
				<input {type} {id} {name} {placeholder} {min} {max} required>
			{:else}
				<input {type} {id} {name} {placeholder} {min} {max}>
			{/if}
			<slot/>
	{:else}
		{#if required}
			<abbr title="required">*</abbr>
			<input {type} {id} {name} {placeholder} required>
			{:else}
			<input {type} {id} {name} {placeholder}>
		{/if}
	{/if}
</div>