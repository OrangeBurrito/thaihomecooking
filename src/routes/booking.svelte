<script context="module">
  export async function load({ params, request }) {
    let text = params.data
		console.log(...text)
    return {
      props: {
        text,
      },
    };
  }
</script>

<script>
  import Booking from "$lib/components/Booking.svelte";

  export let text;
</script>

<h1>book a cooking class</h1>
<p>{text}</p>
<Booking fullPage={true} />

