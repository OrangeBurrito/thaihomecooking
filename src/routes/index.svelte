<script context="module">
	export const prerender = true;
</script>

<script>
  import Dishes from "$lib/components/Dishes.svelte";
  import Features from "$lib/components/Features.svelte";
  import Reviews from "$lib/components/reviews/Reviews.svelte";
  import Gallery from "$lib/components/Gallery.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import MailForm from "$lib/components/forms/MailForm.svelte";
  import StepForm from "$lib/components/forms/StepForm.svelte";
  import reviews from "$lib/reviews.json";
	
  let menuCategory = "dishes";
</script>

<StepForm />

<div class="call-to-action">
  <div class="content">
    <h1>Private Thai Home Cooking Course in Bangkok</h1>
    <p>Learn how to cook authentic Thai food in my home kitchen.</p>
    <button>
      <a href="#booking-form">Book an appointment</a>
    </button>
  </div>
</div>

<Features />

<div class="about">
  <div class="content">
    <div class="text">
      <h2>Thai Cooking Classes</h2>
      <p>Learn how to cook authentic Thai food in my home kitchen.</p>
      <p>
        Unlike traditional cooking schools, I hold private Thai cooking lessons in English or in Thai. You choose day, time, and the dishes you want to cook
        from my family cookbook.
      </p>
      <p>Each lesson covers three dishes of your choice. The dishes are listed below, but you may also request dishes not listed in the dishes menu.</p>
      <p>All ingredients are included along with copies of the recipes in English.</p>
    </div>
    <div class="about-image" />
  </div>
</div>

<div class="menu">
  <h1>Menus</h1>

  <div class="category-btns">
    <button class="ghost-btn" class:selected={menuCategory === "dishes"} on:click={() => (menuCategory = "dishes")}>Dishes</button>
    <button class="ghost-btn" class:selected={menuCategory === "desserts"} on:click={() => (menuCategory = "desserts")}>Desserts</button>
  </div>

  <Dishes selected={menuCategory} />
</div>

<div class="booking" id="booking-form">
  <div class="text">
    <h2>Book a cooking class</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>

  <div class="form-wrap">
    <MailForm />
  </div>
</div>

<Reviews {reviews} />

<Gallery />

<Contact />

<style>
  .call-to-action {
    text-align: center;
    background-image: url("/images/overlay.png"), url("/images/menu/dishes/nam-prik-ong.JPEG");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: var(--on-background-image);
    padding: 2rem 1rem;
  }

  .call-to-action p {
    padding: 1rem 0;
  }

  .about {
    background: var(--surface);
    color: var(--on-surface);
    padding: 1.5rem;
  }

  .about .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .about h2 {
    margin-bottom: 1rem;
  }

  .about p {
    color: var(--on-surface-light);
    margin-bottom: 1rem;
  }

  .about-image {
    background-image: url("/images/angsana.jpg");
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 150px;
    margin: 0 auto;
    padding-top: 1rem;
  }

  .menu {
    padding: 2rem;
  }

  .menu h1 {
    text-align: center;
  }

  .menu .category-btns {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .menu .category-btns .selected {
    color: var(--primary-variant);
    text-decoration: underline;
    font-size: 1.1em;
    font-weight: bold;
  }

  .booking {
    background: var(--primary-variant);
    color: var(--on-primary-variant);
    padding: 1rem;
  }

  .booking .text {
    margin-bottom: 1rem;
  }

  @media (min-width: 600px) {
    .call-to-action {
      padding: 3rem 1rem;
    }

    .call-to-action .content {
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
    .booking {
      padding: 2rem;
    }

    .booking .text {
      margin: 0 auto 1.5rem auto;
    }

    .form-wrap,
    .booking .text {
      max-width: calc(var(--max-width) - 500px);
    }

    .form-wrap {
      margin: 0 auto;
    }
  }
</style>
