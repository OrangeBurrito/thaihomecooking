<script>
  export let type = "text";
  export let id = "";
  export let name = "";
	export let min = undefined;
	export let max = undefined;
	export let value = undefined;
  export let label = "";
  export let placeholder = "";
  export let required = false;
	export let suffix = ''
</script>

<div class="input">
  <label for={id}>{label}</label>
  {#if required}
    <abbr title="required">*</abbr>
  {/if}
	{#if type === 'select'}
		<select {id} {name} {required}>
			<slot/>
		</select>
	{:else }
  <input {type} {id} {name} {min} {max} {placeholder} {value} {required} />
	{/if}
	<span>{suffix}</span>
</div>

<style>
	span {
		font-style: italic;
	}
</style>