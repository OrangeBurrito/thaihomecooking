<script>
	import InlineSVG from 'svelte-inline-svg'

	export let color = 'var(--primary-variant)'
	export let glyph = 'mail'
	export let fill = 'var(--white)'

	$: attributes = {
    width: 'var(--space-xl)',
    height: 'var(--space-xl)',
		fill: fill
  }    

</script>

<div class="icon flex-center" style={`background: ${color};`}>
	<InlineSVG src={`/icons/${glyph}.svg`} {...attributes}/>
</div>

<style>
	.icon {
		height: var(--space-3xl);
		width: var(--space-3xl);
		border-radius: 50%;
	}
</style>