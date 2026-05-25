<script lang="ts">
	import { onMount } from 'svelte';

	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => { scrolled = window.scrollY > 50; };
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section id="hero" class="hero">
	<div class="container hero-content">
		<div class="hero-text">
			<p class="greeting animate-fade-in">Hello, I'm</p>
			<h1 class="name animate-fade-in animate-delay-1">Mir Tanim Ahmed</h1>
			<div class="role-wrapper animate-fade-in animate-delay-2">
				<span class="role-text">Backend Engineer</span>
			</div>
			<p class="tagline animate-fade-in animate-delay-3">
				Building backend systems and the products around them.
			</p>
			<div class="hero-cta animate-fade-in animate-delay-4">
				<a href="#projects" class="btn btn-primary">
					View My Work
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14M12 5l7 7-7 7"/>
					</svg>
				</a>
				<a href="#contact" class="btn btn-secondary">Get in Touch</a>
			</div>
		</div>

		<div class="hero-visual animate-fade-in animate-delay-3">
			<div class="code-window">
				<div class="window-header">
					<span class="dot red"></span>
					<span class="dot yellow"></span>
					<span class="dot green"></span>
				</div>
				<div class="code-content">
					<pre><code><span class="keyword">const</span> <span class="var">developer</span> = {'{'}</code>
<code>  <span class="prop">name</span>: <span class="string">"Mir Tanim Ahmed"</span>,</code>
<code>  <span class="prop">role</span>: <span class="string">"Backend Engineer"</span>,</code>
<code>  <span class="prop">languages</span>: [<span class="string">"TypeScript"</span>, <span class="string">"Python"</span>, <span class="string">"C#"</span>],</code>
<code>  <span class="prop">stack</span>: [<span class="string">"NestJS"</span>, <span class="string">"Express"</span>, <span class="string">"FastAPI"</span>, <span class="string">"ASP.NET Core"</span>],</code>
<code>  <span class="prop">also</span>: [<span class="string">"Flutter"</span>, <span class="string">"Next.js"</span>, <span class="string">"AI"</span>],</code>
<code>  <span class="prop">passion</span>: <span class="string">"Building useful things"</span></code>
<code>{'}'}</code></pre>
				</div>
			</div>
		</div>
	</div>

	<div class="scroll-indicator" class:hidden={scrolled}>
		<div class="scroll-inner">
			<div class="mouse">
				<div class="wheel"></div>
			</div>
			<span>Scroll Down</span>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: 80px;
		position: relative;
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.greeting {
		font-size: 1.125rem;
		color: var(--accent-primary);
		font-weight: 500;
		margin-bottom: 0.5rem;
		opacity: 0;
	}

	.name {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 800;
		line-height: 1.1;
		margin-bottom: 0.75rem;
		opacity: 0;
	}

	.role-wrapper {
		display: flex;
		align-items: center;
		margin-bottom: 1.5rem;
		min-height: 2rem;
		opacity: 0;
	}

	.role-text {
		font-size: 1.5rem;
		font-weight: 600;
		background: var(--accent-gradient);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

.tagline {
		font-size: 1.125rem;
		color: var(--text-secondary);
		line-height: 1.7;
		max-width: 500px;
		margin-bottom: 2rem;
		opacity: 0;
	}

	.hero-cta {
		display: flex;
		gap: 1rem;
		opacity: 0;
	}

	.hero-visual {
		opacity: 0;
	}

	.code-window {
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: var(--shadow-md);
	}

	.window-header {
		display: flex;
		gap: 8px;
		padding: 12px 16px;
		background: var(--bg-tertiary);
		border-bottom: 1px solid var(--border-color);
	}

	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.dot.red { background: #ff5f56; }
	.dot.yellow { background: #ffbd2e; }
	.dot.green { background: #27c93f; }

	.code-content {
		padding: 1.5rem;
		font-family: var(--font-mono);
		font-size: 0.9rem;
		line-height: 1.8;
	}

	.code-content code {
		display: block;
	}

	.keyword { color: #c678dd; }
	.var { color: #e5c07b; }
	.prop { color: #e06c75; }
	.string { color: #98c379; }

	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		opacity: 1;
		transition: opacity 0.4s ease;
	}

	.scroll-indicator.hidden {
		opacity: 0;
		pointer-events: none;
	}

	.scroll-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		color: var(--text-muted);
		font-size: 0.8rem;
		animation: float 2s ease-in-out infinite;
	}

	.mouse {
		width: 24px;
		height: 40px;
		border: 2px solid var(--text-muted);
		border-radius: 12px;
		display: flex;
		justify-content: center;
		padding-top: 8px;
	}

	.wheel {
		width: 4px;
		height: 8px;
		background: var(--text-muted);
		border-radius: 2px;
		animation: pulse 1.5s infinite;
	}

	@media (max-width: 900px) {
		.hero-content {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.tagline {
			margin-left: auto;
			margin-right: auto;
		}

		.hero-cta {
			justify-content: center;
			flex-wrap: wrap;
		}

		.hero-visual {
			order: -1;
			max-width: 400px;
			margin: 0 auto;
		}

		.scroll-indicator {
			display: none;
		}
	}
</style>
