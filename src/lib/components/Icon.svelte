<script>
	import InlineSVG from 'svelte-inline-svg'

	export let icon = "mail"
	export let fill = "var(--black)"
	export let size = 'var(--space-med)'
	export let rounded = ""

	$: attributes = {
		width: size,
		height: size,
		fill: fill
	}
</script>

<div class="icon" class:rounded={rounded} style={`background: ${rounded}`}>
	<InlineSVG src={`/icons/${icon}.svg`} {...attributes}/>
</div>

<style>
	.icon {
		display: inline-block;
	}
	.rounded {
		display: flex;
		align-items: center;
		padding: var(--space-sm);
		border-radius: 50%;
	}
</style>