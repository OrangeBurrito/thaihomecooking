<script>
  import Hero from "$lib/components/sections/Hero.svelte";
  import Info from "$lib/components/sections/Info.svelte";
  import Reviews from "$lib/components/sections/Reviews.svelte";
  import Pricing from "$lib/components/sections/Pricing.svelte";
  import Menu from "$lib/components/sections/menu/Menu.svelte";
  import Contact from "$lib/components/sections/Contact.svelte";

	import menu from '$lib/menu.json'
	import blogposts from '$lib/blogposts.json'
</script>

<Hero/>
<Info/>
<Reviews {blogposts}/>
<Pricing/>
<Menu {menu}/>
<Contact/>