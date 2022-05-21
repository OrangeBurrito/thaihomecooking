<script>
  import MailForm from "$lib/components/MailForm.svelte";

  export let fullPage = false;
</script>

{#if fullPage}
  <MailForm fullForm={true} />
{:else}
  <div class="booking-preview">
		<div class="text">
			<h2>Book a cooking class</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		</div>

		<div class="form-wrap">
			<MailForm />
		</div>
  </div>
{/if}

<style>
  .booking-preview {
    background: var(--primary-variant);
    color: var(--on-primary-variant);
		padding: 1rem;
  }

	.text {
		margin-bottom: 1rem;
	}

	@media (min-width: 600px) {
		.booking-preview {
			padding: 2rem;
		}

		.text {
			margin: 0 auto 1.5rem auto;
		}

		.form-wrap, .text {
			max-width: calc(var(--max-width) - 500px);
		}

		.form-wrap { margin: 0 auto }
	}
</style>
