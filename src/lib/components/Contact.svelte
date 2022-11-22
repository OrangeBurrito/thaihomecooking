<script>
  import Icon from "./Icon.svelte";
</script>

<section class="contact flex space-between fullpage">
  <section class="main-info">
    <div class="text large-text">
      <h2 class="accent">Contact Me</h2>
      <p class="italic">Contact me for more information, or to make an appointment.</p>
    </div>
    <div class="contact-info flex">
      <div class="info large-text">
        <div class="location">
          <h4>Thai Home Cooking</h4>
          <p>123 Sukhumvit Soi 12, Bangkok 12345</p>
          <a href="https://www.google.com/maps/d/viewer?mid=1mlD7YtwF_4_AZ4Eau5wRKfCAhvE&usp=sharing" target="_blank"
            >Get Directions <Icon icon="open_in_new" fill="var(--link)" /></a
          >
        </div>
        <div class="email">
          <h5 class="subheader">Email</h5>
          <p>chef@thaihomecooking.com</p>
        </div>
        <div class="number">
          <h5 class="subheader">Phone</h5>
          <p>(+66) 02 2222 2202</p>
        </div>
      </div>
			<div class="social-media flex">
        <a href="https://www.facebook.com/thaihomecooking" target="_blank">
          <Icon icon="facebook" fill={"var(--on-background)"} size={"var(--space-xl)"} />
        </a>
        <a href="https://www.tripadvisor.com/Attraction_Review-g293916-d1997519-Reviews-Thai_Home_Cooking_Class-Bangkok.html" target="_blank">
          <Icon icon="tripadvisor" fill={"var(--on-background)"} size={"var(--space-xl)"} />
        </a>
      </div>
    </div>
		<!-- <a class="iframe-header" href="https://www.google.com/maps/d/u/0/viewer?mid=1mlD7YtwF_4_AZ4Eau5wRKfCAhvE" target="_blank">
			<h4>Thai Home Cooking</h4>
			<Icon icon="open_in_new" fill="var(--on-background)"/>
		</a> -->
  </section>
  <iframe
    class="map"
    title="Thai Homecooking Google Maps Location"
    src="https://www.google.com/maps/d/embed?mid=1mlD7YtwF_4_AZ4Eau5wRKfCAhvE&ehbc=2E312F"
    frameborder="0"
    style="border:0"
    allowfullscreen
  />
</section>

<style>
  .contact {
    width: 100%;
    height: 100%;
    background: var(--surface);
  }

  .main-info {
    position: relative;
    padding: var(--space-xl) var(--space-2xl);
  }

  .main-info .text {
    margin-bottom: var(--space-lg);
  }

	.contact-info {
		flex-direction: column;
	}
	
  .contact-info .subheader {
		margin-bottom: var(--space-xxs);
  }
	
  .info > * {
		padding-bottom: var(--space-base);
  }

	.social-media {

	}
	
  /* .social-media a {
		display: block;
    margin-bottom: var(--space-base);
  }
	 */
  iframe {
		position: relative;
    flex-grow: 1;
    border: none;
    padding: 0;
    margin: 0;
  }

	.iframe-header {
    position: absolute;
		display: flex;
		gap: 0.5rem;

    z-index: 1;
    top: 0.8rem;
    right: calc(-3rem - 25ch - 3rem);
		padding: 0.4rem 1rem;

		color: var(--on-background);
    background: var(--background);
		border: 4px solid var(--on-background);
		border-radius: 25px;
  }

	.iframe-header h4 {font-weight: normal ; font-family: 'Integral CF'}

  @media (max-width: 750px) {
    .contact {
      flex-direction: column;
    }

    .social-media {
      display: flex;
      gap: var(--space-base);
    }

    .social-media a {
      margin-top: var(--space-base);
      margin-bottom: 0;
    }

    iframe {
      height: 300px;
    }
  }

	@media screen and (min-width: 650px) {
		.main-info {
			padding: var(--space-2xl) var(--space-4xl);
		}
	}
</style>
