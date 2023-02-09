<script>
  import Button from "$lib/components/Button.svelte";
  import Link from "$lib/components/Link.svelte";


</script>
<div id="contact" class="flex-column background">
  <div class="text">
    <div class="text">
      <h2 class="accent">Book a Class</h2>
      <p>Contact me via email or telephone to book a class and discuss further details.</p>
    </div>
    <div class="contact-info">
      <div class="personal">
        <p class="mb-0">Angsana</p>
		<Link href="tel:+66-081-455-5808" text="(+66) 081 455 5808"/>
		<Link href="mailto:angsana@thaihomecooking.com" text="angsana@thaihomecooking.com" />
		<Link href="mailto:angsana.andersson@gmail.com" text="angsana.andersson@gmail.com" />
      </div>
      <hr />
      <div class="socials">
				<Button ghost href="https://www.facebook.com/thaihomecooking" text="Facebook"/>
				<Button ghost href="https://www.instagram.com/chef.angsana/" text="Instagram"/>
				<Button ghost href="https://www.tripadvisor.com/Attraction_Review-g293916-d1997519-Reviews-Thai_Home_Cooking_Class_since_2004-Bangkok.html" text="TripAdvisor"/>
      </div>
	  <hr/>
	  <a href="https://goo.gl/maps/ZyBoLTqpojBYCkf88">
		<div class="address slide-in">
			<h3>Address</h3>
					<h2 class="slide-in-link mb-0">Thai Home Cooking</h2>
					<h2 class="slide-in-link mb-0">364 Sukhumvit Soi 79, Bangkok,</h2>
					<br>
					<h2 class="slide-in-link">TH 10260</h2>
				</div>
			</a>
      
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

  .address {
	margin-top: var(--space-48);
  }

  .address h2 {
    font-family: var(--body-font);
    font-weight: 600;
  }

  .address h2:first-of-type {
    font-weight: 500;
    opacity: 0.8;
  }

  .personal {
	display: flex;
	gap: var(--space-8);
	flex-direction: column;
  }

  .personal p {
    font-weight: 600;
  }

	.socials {
		display: flex;
		gap: var(--space-16);
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
			padding-bottom: var(--space-48);
		}

    iframe {
      width: 65%;
	  min-height: 600px;
	  margin-top: -56px;
    }
  }
</style>
