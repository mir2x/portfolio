<script lang="ts">
	import { onMount } from 'svelte';

	let scrolled = $state(false);
	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '#about', label: 'About' },
		{ href: '#career', label: 'Career' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#tech-stack', label: 'Tech Stack' },
		{ href: '#resume', label: 'Resume' },
		{ href: '#contact', label: 'Contact' }
	];

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="nav" class:scrolled>
	<div class="nav-container container">
		<a href="/" class="logo">
			<span class="logo-text">M<span class="logo-accent">.</span></span>
		</a>

		<button class="mobile-toggle" onclick={() => mobileMenuOpen = !mobileMenuOpen} aria-label="Toggle menu">
			<span class="hamburger" class:open={mobileMenuOpen}></span>
		</button>

		<ul class="nav-links" class:open={mobileMenuOpen}>
			{#each navLinks as link}
				<li>
					<a href={link.href} onclick={closeMenu}>{link.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: 1rem 0;
		transition: all var(--transition-base);
	}

	.nav.scrolled {
		background: rgba(10, 10, 15, 0.9);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid var(--border-color);
	}

	.nav-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-size: 1.75rem;
		font-weight: 800;
	}

	.logo-accent {
		color: var(--accent-primary);
	}

	.nav-links {
		display: flex;
		gap: 2.5rem;
	}

	.nav-links a {
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--text-secondary);
		transition: color var(--transition-fast);
		position: relative;
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--accent-gradient);
		transition: width var(--transition-base);
	}

	.nav-links a:hover {
		color: var(--text-primary);
	}

	.nav-links a:hover::after {
		width: 100%;
	}

	.mobile-toggle {
		display: none;
		width: 32px;
		height: 32px;
		position: relative;
	}

	.hamburger,
	.hamburger::before,
	.hamburger::after {
		position: absolute;
		width: 24px;
		height: 2px;
		background: var(--text-primary);
		transition: all var(--transition-base);
	}

	.hamburger {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.hamburger::before,
	.hamburger::after {
		content: '';
		left: 0;
	}

	.hamburger::before {
		top: -8px;
	}

	.hamburger::after {
		top: 8px;
	}

	.hamburger.open {
		background: transparent;
	}

	.hamburger.open::before {
		top: 0;
		transform: rotate(45deg);
	}

	.hamburger.open::after {
		top: 0;
		transform: rotate(-45deg);
	}

	@media (max-width: 768px) {
		.mobile-toggle {
			display: block;
		}

		.nav-links {
			position: fixed;
			top: 70px;
			left: 0;
			right: 0;
			background: var(--bg-secondary);
			flex-direction: column;
			align-items: center;
			gap: 0;
			padding: 0;
			max-height: 0;
			overflow: hidden;
			transition: all var(--transition-base);
			border-bottom: 1px solid transparent;
		}

		.nav-links.open {
			max-height: 400px;
			padding: 1rem 0;
			border-color: var(--border-color);
		}

		.nav-links li {
			width: 100%;
			text-align: center;
		}

		.nav-links a {
			display: block;
			padding: 1rem;
		}
	}
</style>
