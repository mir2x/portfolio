<script lang="ts">
	import { onMount } from 'svelte';

	let typedText = $state('');
	const roles = ['Backend Developer', 'Full-Stack Developer', 'ML Enthusiast'];
	let currentRoleIndex = $state(0);
	let isDeleting = $state(false);

	onMount(() => {
		const typeEffect = () => {
			const currentRole = roles[currentRoleIndex];
			
			if (!isDeleting) {
				typedText = currentRole.substring(0, typedText.length + 1);
				
				if (typedText === currentRole) {
					setTimeout(() => { isDeleting = true; }, 2000);
				}
			} else {
				typedText = currentRole.substring(0, typedText.length - 1);
				
				if (typedText === '') {
					isDeleting = false;
					currentRoleIndex = (currentRoleIndex + 1) % roles.length;
				}
			}
		};

		const interval = setInterval(typeEffect, isDeleting ? 50 : 100);
		return () => clearInterval(interval);
	});
</script>

<section id="hero" class="hero">
	<div class="container hero-content">
		<div class="hero-text">
			<p class="greeting animate-fade-in">Hello, I'm</p>
			<h1 class="name animate-fade-in animate-delay-1">Mir Tanim Ahmed</h1>
			<div class="role-wrapper animate-fade-in animate-delay-2">
				<span class="role-text">{typedText}</span>
				<span class="cursor">|</span>
			</div>
			<p class="tagline animate-fade-in animate-delay-3">
				Building scalable backend systems with Node.js, TypeScript & Python. 
				Exploring ML, NLP, and microservices architecture.
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
<code>  <span class="prop">role</span>: <span class="string">"Backend Developer"</span>,</code>
<code>  <span class="prop">stack</span>: [<span class="string">"Node.js"</span>, <span class="string">"TypeScript"</span>],</code>
<code>  <span class="prop">passion</span>: <span class="string">"Building APIs"</span></code>
<code>{'}'}</code></pre>
				</div>
			</div>
		</div>
	</div>

	<div class="scroll-indicator">
		<div class="mouse">
			<div class="wheel"></div>
		</div>
		<span>Scroll Down</span>
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

	.cursor {
		font-size: 1.5rem;
		color: var(--accent-primary);
		animation: blink 1s infinite;
		margin-left: 2px;
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
