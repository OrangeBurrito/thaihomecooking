<script>
import Dishes from "$lib/components/Menu.svelte";
import Features from "$lib/components/Features.svelte";
import Testimonials from "$lib/components/Testimonials.svelte";
</script>

<div class="call-to-action">
	<h1>Private Thai Home Cooking Course in Bangkok</h1>
	<p>Learn how to cook authentic Thai food in my home kitchen.</p>
	<a href="/booking">Book an appointment</a>
</div>

<Features/>

<!-- <img src="/images/angsana.jpg" alt=""> -->

<div id="about">
	<h2>Thai Cooking Classes</h2>
	<p>Learn how to cook authentic Thai food in my home kitchen.</p>
	<p>Unlike traditional cooking schools, I hold private Thai cooking lessons in English or in Thai. You choose day, time, and the dishes you want to cook from my family cookbook.</p>
	<p>Each lesson covers three dishes of your choice.  The dishes are listed below, but you may also request dishes not listed in the dishes menu.</p>
	<p>All ingredients are included along with copies of the recipes in English.</p>
</div>

<Dishes/>

<Testimonials/>