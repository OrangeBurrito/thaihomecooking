<script context="module">
  export const prerender = true;
</script>

<script>
  import "../styles/global.css";
  import Menu from "$lib/components/Menu.svelte";
  import Reviews from "$lib/components/reviews/Reviews.svelte";
  import Contact from "$lib/components/Contact.svelte";
import Pricing from "$lib/components/Pricing.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<section class="hero-banner flex-vertical center fullpage">
  <img class="logo" src="/images/thaihomecooking_logo_light.png" alt="" />
  <div class="text">
    <h1>Private Thai Cooking Course in Bangkok</h1>
    <p>Learn how to cook authentic Thai food in my home kitchen</p>
  </div>
</section>


<section class="about">
  <section class="text flex gap-xl">
		<div class="text">
			<h2 class="accent">Thai Cooking Classes</h2>
			<p>Learn how to cook authentic Thai food in my home kitchen.</p>
			<p>Unlike traditional cooking schools, I hold private Thai cooking lessons in English or in Thai.</p>
			<p>You choose the day, time and the dishes you want to cook from my family cookbook containing 100+ recipes gathered over three generations. </p>
		</div>
		<img src="/images/angsana.jpg" alt="">
  </section>
	<section class="text flex">
		<img src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/286361277_5385921434793364_4998705551832895895_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=zLC5Ij7ydOkAX8I1_hO&_nc_ht=scontent.fbkk13-1.fna&oh=00_AT_YSiUhKSACWCPRMKYy5zzQSs46vTUxBT0hv1QQtOQscA&oe=631A0560" alt="">
		<div class="text">
			<p>Each lesson covers three dishes of your choice. The dishes are listed below, but you may also request dishes not listed in the dishes menu.</p>
			<p>Optional trip to the market is available for morning lessons, please let me know when booking if you would like to go to the market with me.</p>
			<p>All ingredients are included along with copies of the recipes in English.</p>
		</div>
	</section>
	<section>
		<Pricing/>
	</section>
</section>

<Contact />

<section class="flex grow-to-fullpage center">
	<Reviews/>
</section>

<section class="fullpage">
  <Menu/>
</section>

<Footer/>

<style>
  .hero-banner {
    background-image: url("/images/overlay.png"), url("/images/menu/dishes/nam-prik-ong.JPEG");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    gap: var(--space-lg);
    text-align: center;
    color: var(--on-background-image);
    padding: var(--space-base) 0 var(--space-4xl) 0;
  }

  .logo {
    height: var(--space-4xl);
		margin-bottom: var(--space-xl);
  }

  .hero-banner .text {
    max-width: 60ch;
  }

  .hero-banner p {
		color: var(--white);
  }

  .about {
    background: var(--background);
    color: var(--on-background);
    padding: var(--space-xl);
  }

	.about p::first-letter {
		font-weight: bold;
		font-size: var(--text-xl);
		color: var(--on-background);
	}

	.about img {
		max-width: 200px;
		height: auto;
	}
/* 
  .about-image {
    background-image: url("/images/angsana.jpg");
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 150px;
    margin: 0 auto;
    padding-top: 1rem;
  } */

  /* @media (min-width: 600px) {
    .hero-banner {
      padding: 3rem 1rem;
    }

    .hero-banner .content {
      max-width: calc(var(--max-width) / 2);
      margin: 0 auto;
    }

    .about {
      padding: 3rem;
    }

    .about .content {
      max-width: var(--max-width);
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 0 auto;
    }

    .about-image {
      width: 250px;
      height: 100%;
    }
  }*/
</style>
