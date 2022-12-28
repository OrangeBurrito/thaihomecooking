<script>
  import Dishes from "../lib/components/Dishes.svelte";
  import Reviews from "../lib/components/Reviews.svelte";
  import Tripadvisor from "../lib/components/Tripadvisor.svelte";
</script>

<div id="cta" class="flex-column inverted">
  <div class="text">
    <h1 class="headline-1">Learn how to cook Thai Cuisine in my home kitchen</h1>
    <p class="large">Learn how to make authentic Thai dishes in my home kitchen in Bangkok with private cooking lessons in English or Thai.</p>
    <p class="large">You choose your dishes from my family cookbook containing 100+ recipes gathered over three generations.</p>
    <div class="buttons">
      <button class="button-large">Sign Up for a Class</button>
      <a href="#info">
        <button class="button-large button-ghost">Let me see it first ⇒</button>
      </a>
    </div>
  </div>
	<div class="banner-image">
		<div class="overlay"></div>
		<img src="/images/banner_image.jpg" alt="" />
	</div>
</div>
<div id="info">
  <section>
    <p>Unlike traditional cooking schools, I hold private Thai cooking lessons in English or in Thai.</p>
    <p>You choose date, time and the dishes you want to cook from my family cookbook, containing 100+ recipes gathered over three generations.</p>
  </section>
  <section class="feature flex-column">
    <div class="text">
      <h2 class="headline-2">Visit the market</h2>
      <p>For optional morning lessons, meet up with me at the local market to pick out fresh ingredients for your dishes.</p>
    </div>
    <img src="/images/market_visit.jpg" alt="" />
  </section>
  <section class="feature flex-column reverse">
    <div class="text">
      <h2 class="headline-2">Prepare your dishes</h2>
      <p>In my Thai kitchen, learn to prepare and cook the dishes of your choosing with the ingredients picked earlier.</p>
    </div>
    <img src="/images/students_cooking.jpg" alt="" />
  </section>
  <section class="feature flex-column">
    <div class="text">
      <h2 class="headline-2">Enjoy your dish</h2>
      <p>Finish and enjoy your new Thai dishes, with recipe printouts available.</p>
    </div>
    <img src="" alt="" />
  </section>
</div>
<div id="reviews" class="flex-center background">
  <h2 class="headline-2">Reviews from Students</h2>
  <div class="flex-column">
    <Tripadvisor />
    <Reviews />
  </div>
</div>
<div id="menu">
  <h1 class="headline-1">Our Menu</h1>
  <div class="dishes">
    <h2 class="headline-2">Dishes</h2>
    <Dishes type="dish" />
  </div>
  <div class="desserts" />
</div>
<div id="pricing" />
<div id="contact" />

<style>
  #cta {
    position: relative;
    background-color: var(--primary);
    /* background: linear-gradient(-270deg, rgba(var(--primary-gradient),1) 0%, rgba(var(--primary-gradient),1) 45%, rgba(var(--primary-gradient),0.7) 60%, rgba(var(--primary-gradient),0) 100%),
		url("/images/banner_image.jpg"); */
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
  }

	#cta img {
		width: 100%;
	}

  #info section {
    margin-bottom: var(--space-32);
  }

  #info img {
    object-fit: cover;
    width: 100%;
  }

  #reviews {
    gap: var(--space-32);
  }

  @media screen and (min-width: 800px) {
    #cta .text {
      width: 65%;
      z-index: 1;
    }

		#cta .banner-image {
			position: absolute;
			display: flex;
			justify-content: flex-end;
			height: calc(100% + var(--space-16));
		}

		#cta .overlay {
			position: relative;
			height: 100%;
			left: 32%;
			width: 50%;
			background: linear-gradient(-270deg, rgba(var(--primary-gradient),1) 0%, rgba(var(--primary-gradient),1) 25%, rgba(var(--primary-gradient),0.7) 50%, rgba(var(--primary-gradient),0) 100%);
		}

    #cta img {
			max-width: 60%;
      height: 100%;
    }

    #info .feature {
      margin-bottom: 0;
    }

    #info .feature.reverse {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    #info .feature .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 45%;
    }

    #info img {
      max-width: 45%;
      height: 250px;
    }
  }
</style>
