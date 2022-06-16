<script>
  export let id = "";
  export let name = "";
  export let label = "";
  export let required = false;
</script>

<div class="text-input">
  <label for={id}>{label}</label>
  {#if required}
    <abbr title="required">*</abbr>
  {/if}
  <select {id} {name} {required}>
    <slot />
  </select>
</div>
