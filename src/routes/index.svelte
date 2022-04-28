<script>
  import Dishes from "$lib/components/Dishes.svelte";
  import Features from "$lib/components/Features.svelte";
  import Reviews from "$lib/components/reviews/Reviews.svelte";
  import reviews from "$lib/reviews.json";
	import Gallery from "$lib/components/Gallery.svelte";
	import Contact from "$lib/components/Contact.svelte";

	let menuCategory = 'dishes';
</script>

<div class="call-to-action">
  <h1>Private Thai Home Cooking Course in Bangkok</h1>
  <p>Learn how to cook authentic Thai food in my home kitchen.</p>
	<button>
		<a href="/#booking">Book an appointment</a>
	</button>
</div>

<Features />


<div class="about">
	<h2>Thai Cooking Classes</h2>
  <p>Learn how to cook authentic Thai food in my home kitchen.</p>
  <p>
		Unlike traditional cooking schools, I hold private Thai cooking lessons in English or in Thai. You choose day, time, and the dishes you want to cook from my
    family cookbook.
  </p>
  <p>Each lesson covers three dishes of your choice. The dishes are listed below, but you may also request dishes not listed in the dishes menu.</p>
  <p>All ingredients are included along with copies of the recipes in English.</p>
	<div class="about-image"/>
</div>

<div class="menu">
	<button on:click={()=> menuCategory = 'dishes'}>Dishes</button>
	<button on:click={()=> menuCategory = 'desserts'}>Desserts</button>
	
	<Dishes selected={menuCategory}/>
</div>

<div id="booking">
	<h2>bookng</h2>
</div>

<Reviews {reviews} />

<Gallery/>

<Contact/>

<style>
	.call-to-action {
		text-align: center;
		background-image: url('https://images.unsplash.com/photo-1610452220299-5edf90b8a6ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80');
		background-size: cover;
		background-position: center;
		color: var(--on-background-image);
		padding: 2rem 1rem;
	}

	.call-to-action p {
		padding: 1rem 0;
	}

	.about {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background: var(--surface);
		color: var(--on-surface);
		padding: 1.5rem;
	}

	.about p {
		color: var(--on-surface-light);
	}

	.about-image {
		background-image: url('/images/angsana.jpg');
		background-position: center;
		background-size: cover;
		width: 200px;
		height: 150px;
		margin: 0 auto;
		padding-top: 1rem;
	}
</style>