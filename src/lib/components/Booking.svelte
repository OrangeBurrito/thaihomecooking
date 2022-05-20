<script>
  import MailForm from "$lib/components/MailForm.svelte";

  export let fullPage = false;
</script>

{#if fullPage}
  <MailForm fullForm={true} />
{:else}
  <div class="booking-preview">
    <h2>Book a cooking class</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    <MailForm />
  </div>
{/if}

<style>
  .booking-preview {
    background: var(--primary-variant);
    color: var(--on-primary-variant);
  }
</style>
