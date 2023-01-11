<script>
  import Image from "$lib/components/Image.svelte";
</script>

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
		<Image src="/images/info/market_visit.jpg" alt="picking out ingredients at the local market" width="var(--img-width)" height="var(--img-height)"/>
  </section>
  <section class="feature flex-column reverse">
		<div class="text">
			<h2 class="headline-2">Prepare your dishes</h2>
      <p>In my Thai kitchen, learn to prepare and cook the dishes of your choosing with the ingredients picked earlier.</p>
    </div>
		<Image src="/images/info/preparing_food.png" alt="teaching a student how to prepare a dish" width="var(--img-width)" height="var(--img-height)"/>
  </section>
  <section class="feature flex-column mb-0">
    <div class="text">
      <h2 class="headline-2">Enjoy your dish</h2>
      <p>Finish and enjoy your new Thai dishes, with recipe printouts available.</p>
    </div>
		<Image src="/images/info/finished_food.jpg" alt="me, the students and my grandmother standing next to completed thai dishes" width="var(--img-width)" height="var(--img-height)"/>
  </section>
</div>

<style>
	#info {
		--img-width: 100%;
		--img-height: 200px;
	}
	
	#info section {
    margin-bottom: var(--space-32);
  }

	@media screen and (min-width: 800px) {
		#info {
			--img-width: 45%;
			--img-height: 300px;
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
	}
</style>