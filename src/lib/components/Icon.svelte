<script>
	import InlineSVG from 'svelte-inline-svg'

	export let color = ''
	export let small = false
	export let dark = false
	export let glyph = 'mail'

	$: attributes = {

    width: small ? 'var(--space-med)' : 'var(--space-xl)',
    height: small ? 'var(--space-med)' : 'var(--space-xl)',
		fill: dark ? 'var(--black)' : 'var(--white)'
  }    

</script>

<div class="icon flex-center" class:color={color} class:small={small} style={`background: ${color};`}>
	<InlineSVG src={`/icons/${glyph}.svg`} {...attributes}/>
</div>

<style>
	.color {
		height: var(--space-3xl);
		width: var(--space-3xl);
		border-radius: 50%;
	}

	.small {
		height: var(--space-med);
		width: var(--space-med);
	}
</style>