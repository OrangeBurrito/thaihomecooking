<script>
  let showNav = false;

  function toggleNav() {
    showNav = !showNav;
  }
</script>

<div id="navbar">
  <div class="bar">
    <h2 class="headline-2">Thai Home Cooking</h2>
    <button class="button-menu" on:click={toggleNav}>☰</button>
  </div>
  <div class="overlay" class:show={showNav === true}>
    <nav>
      <a href="#cta" id="selected">Home</a>
      <a href="#info">Info</a>
      <a href="#reviews">Reviews</a>
      <a href="#menu">Menu</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact Me</a>
    </nav>
  </div>

  <!-- <div class="socials">
		<a href="/">Facebook</a>
		<a href="/">Instagram</a>
		<a href="/">TripAdvisor</a>
	</div> -->
</div>

<style>
  #navbar {
    position: sticky;
    top: 0;
		background: var(--dark-gray);
  }

  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bar h2 {
    padding: var(--space-16);
  }

  .button-menu {
    font-size: var(--headline-1);
    padding: var(--space-8) var(--space-16);
  }

  .overlay {
    display: none;
    z-index: 100;
  }

  .overlay.show {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }

  nav {
    text-align: right;
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 100%;
    gap: var(--space-16);
    background: var(--dark-gray);
    padding: var(--space-32);
  }

  nav a {
    text-decoration: none;
    color: var(--black);
  }

	nav a#selected {
		text-decoration: underline;
		font-weight: bold;
	}

	@media screen and (min-width: 600px) {
		#navbar {
			height: 100vh;
		}

		.overlay {
			display: block;
		}

		.button-menu { display: none }

		nav {
			width: auto;
			text-align: left;
			padding-top: 0;
		}
	}
</style>
