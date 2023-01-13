<script>
  import Button from "$lib/components/Button.svelte";
  import Link from "$lib/components/Link.svelte";

  export let navLinks = [];

  let open = false;
  let activeLink = "";

  function toggleNav() {
    open = !open;
    document.body.classList.toggle("noscroll");
		// document.documentElement.classList.toggle("noscroll");
  }

  function toggleActive(e) {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    toggleNav();
  }
</script>

<div id="navbar">
  <header class="flex">
    <a href="#hero">
      <h3 class="accent mb-0">Thai Home Cooking</h3>
    </a>

    <div class="menu">
      <Button menu on:click={toggleNav} {open}/>
    </div>
  </header>
  <nav class="flex-gap" class:open>
    <ul>
      {#each navLinks as link}
        <Link href={link.href} text={link.text} nav active={link.active} on:click={(e) => toggleActive(e)} />
      {/each}
    </ul>
  </nav>
</div>

<style>
  #navbar {
    position: sticky;
    top: 0;
    z-index: 4;
    background: var(--dark-gray);
  }

  header {
    position: relative;
    align-items: center;
    justify-content: space-between;
    background: var(--dark-gray);
    padding: var(--space-16);
    z-index: 3;
  }

  header h3 {
    background: linear-gradient(135deg, rgba(222,72,44,1) 0%, rgb(44, 169, 105) 64%, rgb(13, 117, 89) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
		padding-bottom: var(--unit-sm);
  }

  nav {
    display: none;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--space-24);
    background: var(--dark-gray);
  }

  @media screen and (max-width: 999px) {
    nav.open {
      position: absolute;
      display: flex;
      height: 100vh;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
    }

    nav.open ul {
      position: fixed;
      inset: 0 0 0 30%;
      padding: var(--space-72) var(--space-32);
    }
  }

  @media screen and (min-width: 1000px) {
    #navbar {
      height: 100vh;
      width: 20%;
      padding-right: var(--space-32);
    }

    header {
      padding: var(--space-32);
    }

    nav {
      display: flex;
    }

    nav ul {
      align-items: flex-start;
      gap: var(--space-16);
      padding: 0 var(--space-32);
    }

    .menu {
      display: none;
    }
  }
</style>
