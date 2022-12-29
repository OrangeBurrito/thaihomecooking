<script>
  let showNav = false;

  function toggleNav() {
    showNav = !showNav;
  }

	function toggleActive(e) {
		if (e.target.tagName === 'A') {
			document.querySelector('.active').classList.remove('active')
			e.target.classList.add('active')
			showNav = false
		}
	}
</script>

<div id="navbar">
  <div class="bar">
		<a href="/">
			<h2 class="headline-2">Thai Home Cooking</h2>
		</a>
    <button class="button-menu" on:click={toggleNav}>☰</button>
  </div>
  <div class="overlay" class:show={showNav === true} on:click={e=>toggleActive(e)}>
    <nav>
      <a href="#cta" class="active">Home</a>
      <a href="#info">Info</a>
      <a href="#reviews">Reviews</a>
      <a href="#pricing">Pricing</a>
      <a href="#menu">Menu</a>
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
		z-index: 4;
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

	nav a.active {
		text-decoration: underline;
		font-weight: bold;
	}

	@media screen and (min-width: 1000px) {
		#navbar {
			height: 100vh;
			padding: var(--space-32) var(--space-48) var(--space-32) var(--space-32);
		}

		.overlay {
			display: block;
		}

		.button-menu { display: none }

		nav {
			width: auto;
			text-align: left;
			gap: var(--space-20);
			padding: 0;
		}

		.bar h2 {
			padding: 0;
			margin-bottom: var(--space-40);
		}
	}
</style>
