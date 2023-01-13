<script>
  import Image from "$lib/components/Image.svelte";
  import Button from "$lib/components/Button.svelte";
</script>

<div id="hero" class="flex-column inverted">
  <div class="text">
    <h1>Learn how to cook Thai Cuisine in my home kitchen</h1>
    <p class="large">Learn how to make authentic Thai dishes in my home kitchen in Bangkok with private cooking lessons in English or Thai.</p>
    <p class="large">You choose your dishes from my family cookbook containing 100+ recipes gathered over three generations.</p>
    <div class="buttons">
			<Button primary text="Sign up for a Class" large/>
			<Button ghost href="#info" text="Let me see it first ⇒" large/>
    </div>
  </div>
  <div class="banner-image">
    <div class="overlay" />
		<Image src="/images/banner_image.png"/>
  </div>
</div>

<style>
	#hero {
    position: relative;
    background: var(--primary);
		background-size: contain;
		padding: 0;
  }

	.banner-image {
		position: relative;
		opacity: 0.6;
	}

	#hero .text {
		padding: var(--space-32) var(--space-32) 0 var(--space-32);
	}

	#hero .overlay {
		position: absolute;
		width: 100%;
		height: var(--space-128);
		margin-top: -28px;
		background: linear-gradient(180deg, rgba(var(--primary-gradient), 1) 0%,rgba(var(--primary-gradient), 1) 25%,rgba(var(--primary-gradient), 0.7) 50%,rgba(var(--primary-gradient), 0) 100%);
		z-index: 2;
	}

	@media screen and (min-width: 800px) {
		#hero {
			padding: 56px 128px 72px 100px;
		}

    #hero .text {
      width: 65%;
      z-index: 3;
			padding: 0;
    }

    .banner-image {
			position: absolute;
      right: 0;
      width: 70%;
      height: calc(100% + var(--space-16));
    }

    #hero .overlay {
      position: absolute;
      width: 70%;
      height: 100%;
			margin-top: 0;
      background: linear-gradient(-270deg, rgba(var(--primary-gradient), 1) 0%,rgba(var(--primary-gradient), 1) 25%,rgba(var(--primary-gradient), 0.7) 50%,rgba(var(--primary-gradient), 0) 100%);
    }

    .banner-image img {
      width: 100%;
			height: 100%;
    }
	}
</style>