<script>
	export let icon = "/icons/translate.svg"
	export let text = ''
</script>

<div class="feature">
	<img src={icon} alt="">
	<p>{@html text}</p>
</div>

<style>
	.feature {
		display: flex;
	}
</style>