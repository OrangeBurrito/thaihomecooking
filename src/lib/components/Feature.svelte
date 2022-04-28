<script>
	import InlineSVG from 'svelte-inline-svg'
	export let icon = "/icons/translate.svg"
	export let text = ''
</script>

<div class="feature">
	<InlineSVG src={icon}/>
	<p>{@html text}</p>
</div>

<style>
	.feature {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>