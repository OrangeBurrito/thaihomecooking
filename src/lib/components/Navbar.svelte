<script>
	import { fade} from 'svelte/transition'
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

<div id="navbar" class:show={showNav}>
  <div class="bar">
		<a href="/">
			<h2 class="headline-2 mb-0">Thai Home Cooking</h2>
		</a>
    <button class="hamburger-menu" on:click={toggleNav} class:open={showNav}>
			<div class="one"/>
			<div class="two"/>
			<div class="three"/>
	</button>
  </div>
  <div class="overlay" transition:fade class:show={showNav === true} on:click={e=>toggleActive(e)}>
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
		z-index: 4;
  }
	
	:global(#navbar.show + main) {
		margin-top: -100vh;
	}
	
  .bar {
		display: flex;
    justify-content: space-between;
    align-items: center;
		background: var(--dark-gray);
  }

  .bar h2 {
    padding: var(--space-16);
  }

	.hamburger-menu {
		background: none;
		padding: 0 var(--space-16) 0 0;
	}

	.one, .two, .three {
		width: var(--space-32);
		height: var(--unit-sm);
		background: var(--headline-text-color);
		margin: 6px 0;
		border-radius: 1.3px;
		transition: 0.4s ease;
	}

	.open .one { transform: rotate(-45deg) translate(-8px, 6px); }
	.open .two { opacity: 0;}
	.open .three {transform: rotate(45deg) translate(-8px, -6px); }
	
  .overlay {
		position: sticky;
    opacity: 0;
  }

  .overlay.show {
		display: flex;
    justify-content: flex-end;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
		opacity: 1;
		transition: all .2s;
  }

  nav {
    display: flex;
    flex-direction: column;
		position: absolute;
		left: 100vw;
    width: 80vw;
    height: 100%;
    text-align: right;
    gap: var(--space-16);
    background: var(--dark-gray);
    padding: var(--space-32);
		transition: .2s ease-in;
  }
	
	.overlay.show nav {
		left: 20vw;
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
			background: var(--dark-gray);
		}

		.overlay, .overlay.show {
			position: fixed;
			display: block;
			width: fit-content;
			background: none;
		}

		.hamburger-menu { display: none }

		.overlay { opacity: 1 }

		nav {
			left: 0 !important;
			text-align: left;
			gap: var(--space-20);
			padding: 0;
		}

		.bar h2 {
			padding: 0;
			margin-bottom: var(--space-40) !important;
		}
	}
</style>
