<script>
  import Icon from "./Icon.svelte";
</script>

<section class="contact flex space-between fullpage">
  <section class="main-info">
    <div class="text">
      <h2>Contact Me</h2>
      <p>Contact me for more information, or to make an appointment.</p>
    </div>
    <div class="contact-info flex">
      <div class="social-media">
        <a href="https://www.facebook.com/thaihomecooking" target="_blank">
          <Icon icon="facebook" fill={"var(--white)"} size={"var(--space-xl)"} rounded={"var(--facebook-blue)"} />
        </a>
        <a href="https://www.tripadvisor.com/Attraction_Review-g293916-d1997519-Reviews-Thai_Home_Cooking_Class-Bangkok.html" target="_blank">
          <Icon icon="tripadvisor" size={"var(--space-xl)"} rounded={"var(--tripadvisor-green)"} dark />
        </a>
      </div>
      <div class="info">
        <div class="location">
          <h4>Thai Home Cooking</h4>
          <p>123 Sukhumvit Soi 12, Bangkok 12345</p>
          <a href="https://www.google.com/maps/d/viewer?mid=1mlD7YtwF_4_AZ4Eau5wRKfCAhvE&usp=sharing" target="_blank"
            >Get Directions <Icon icon="open_in_new" fill="var(--link)" /></a
          >
        </div>
        <div class="email oneline">
          <h5 class="subheader">Email:</h5>
          <p>chef@thaihomecooking.com</p>
        </div>
        <div class="number oneline">
          <h5 class="subheader">Phone:</h5>
          <p>(+66) 02 2222 2202</p>
        </div>
      </div>
    </div>
  </section>
  <iframe class="map" title="Thai Homecooking Google Maps Location" src="https://www.google.com/maps/d/embed?mid=1mlD7YtwF_4_AZ4Eau5wRKfCAhvE&ehbc=2E312F" allowfullscreen></iframe>
</section>

<style>
  .contact {
		/* --contactHeight: clamp(400px, 50%, 380px); */
		/* height: var(--contactHeight); */
		width: 100%; height: 100%;
    background: var(--surface);
  }

  .main-info {
    padding: var(--space-2xl) var(--space-4xl);
  }

  .contact-info .oneline > * {
    display: inline-block;
  }

  .info > * {
    padding-bottom: var(--space-base);
  }

  .social-media a {
    display: block;
    margin-bottom: var(--space-base);
  }

	iframe {
		flex-grow: 1; border: none; margin: 0; padding: 0;
	}

  @media (max-width: 750px) {

    .contact-info {
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
			display: none;
		}
  }
</style>
