<div id="contact" class="flex-column background">
  <div class="text">
    <div class="text">
      <h2 class="headline-2">Contact Me</h2>
      <p>Contact me for more information, or to make an appointment.</p>
    </div>
    <div class="contact-info">
      <div class="address">
        <h2 class="headline-2 mb-0">Thai Home Cooking</h2>
        <h2 class="headline-2">123 Sukhumvit Soi 12, Bangkok, TH 12345</h2>
      </div>
      <hr />
      <div class="personal">
        <p>Angsana</p>
        <p>(+66) 022 252 2202</p>
        <p>angsana@thaihomecooking.com</p>
      </div>
      <hr />
      <div class="socials">
        <a href=""><button class="button-ghost">Facebook</button></a>
        <a href=""><button class="button-ghost">Instagram</button></a>
        <a href=""><button class="button-ghost">Tripadvisor</button></a>
      </div>
    </div>
  </div>
  <iframe
    class="map"
    title="Thai Homecooking Google Maps Location"
    src="https://www.google.com/maps/d/embed?mid=1mlD7YtwF_4_AZ4Eau5wRKfCAhvE&ehbc=2E312F"
    frameborder="0"
    style="border:0"
    allowfullscreen
  />
</div>

<style>
  #contact {
    gap: var(--space-32);
		align-items: flex-end;
  }

  #contact > .text {
    padding-bottom: var(--space-16);
  }
  hr {
    border-color: var(--border-color);
    background-color: var(--border-color);
    margin: var(--space-16) 0;
  }

  .address h2 {
    font-family: var(--body-font);
    font-weight: 600;
  }

  .address h2.mb-0 {
    font-weight: 500;
    opacity: 0.8;
  }

  .personal p {
    margin-bottom: 0;
  }

  .personal p:first-child {
    font-weight: 600;
  }

  .socials button {
    font-weight: 500;
  }

  iframe {
    position: relative;
    flex-grow: 1;
    padding: 0;
    margin: 0;
    border: none;
		min-height: 400px;
  }

  @media screen and (min-width: 1000px) {
		#contact {
			gap: var(--space-72);
    	padding: 56px 0 0 100px;
		}

		#contact > .text {
			padding-bottom: var(--space-72);
		}

    iframe {
      width: 65%;
    }
  }
</style>
