<script>
  export let id = "";
  export let name = "";
  export let label = "";
  export let placeholder = "";
  export let required = false;
</script>

<div class="textarea-input">
  <label for={id}>{label}</label>
  {#if required}
    <abbr title="required">*</abbr>
  {/if}
  <textarea {id} {name} {placeholder} {required} />
</div>
