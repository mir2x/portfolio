<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.name} | Mir Tanim Ahmed</title>
	<meta name="description" content={project.description} />
</svelte:head>

<Nav />

<main class="project-page">
	<div class="container">
		<a href="/projects" class="back-link">
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M19 12H5M12 19l-7-7 7-7"/>
			</svg>
			All Projects
		</a>

		<article class="project-detail">

			<header class="project-header">
				<div class="title-row">
					{#if project.logo}
						<img src={project.logo} alt="{project.name} logo" class="project-logo" />
					{/if}
					<h1 class="project-name">{project.name}</h1>
				</div>
				<div class="project-actions">
					{#if project.website}
						<a href={project.website} target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
							</svg>
							Website
						</a>
					{/if}
					{#if project.playStore}
						<a href={project.playStore} target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
								<path d="M3.18 23.76a1.5 1.5 0 001.64-.17l11.25-6.5-2.83-2.83-10.06 9.5zM.5 1.5A1.5 1.5 0 000 2.63v18.74a1.5 1.5 0 00.5 1.13l.06.06 10.5-10.5v-.25L.56 1.44.5 1.5zM20.82 10.35l-2.88-1.66-3.17 3.17 3.17 3.17 2.9-1.67a1.7 1.7 0 000-3zM4.82.41L16.07 6.9l-2.83 2.83L3.18.24A1.5 1.5 0 014.82.41z"/>
							</svg>
							Play Store
						</a>
					{/if}
					{#if project.appStore}
						<a href={project.appStore} target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
								<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94.12.02.24.03.36.03.9 0 2.02-.55 2.45-1.36z"/>
							</svg>
							App Store
						</a>
					{/if}
					{#if project.github}
						<a href={project.github} target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
							GitHub
						</a>
					{/if}
				</div>
			</header>

			<p class="project-summary">{project.description}</p>

			<div class="tech-row">
				{#each project.technologies as tech}
					<span class="tag">{tech}</span>
				{/each}
			</div>

			{#if project.star}
				<div class="star-sections">
					<div class="star-block">
						<div class="star-label">
							<span class="star-letter">S</span>
							<span class="star-word">Situation</span>
						</div>
						<p class="star-text">{project.star.situation}</p>
					</div>

					<div class="star-block">
						<div class="star-label">
							<span class="star-letter">T</span>
							<span class="star-word">Task</span>
						</div>
						<p class="star-text">{project.star.task}</p>
					</div>

					<div class="star-block">
						<div class="star-label">
							<span class="star-letter">A</span>
							<span class="star-word">Actions</span>
						</div>
						<ul class="star-list">
							{#each project.star.actions as action}
								<li>{action}</li>
							{/each}
						</ul>
					</div>

					<div class="star-block highlight">
						<div class="star-label">
							<span class="star-letter">R</span>
							<span class="star-word">Results</span>
						</div>
						<ul class="star-list">
							{#each project.star.results as result}
								<li>{result}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/if}

		</article>
	</div>
</main>

<Footer />

<style>
	.project-page {
		padding-top: 100px;
		min-height: 100vh;
		padding-bottom: 5rem;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.9rem;
		color: var(--text-muted);
		margin-bottom: 2.5rem;
		transition: color var(--transition-fast);
	}

	.back-link:hover {
		color: var(--accent-primary);
	}

	.project-detail {
		max-width: 780px;
	}

	.project-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
		margin-bottom: 1.25rem;
	}

	.title-row {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.project-logo {
		width: 52px;
		height: 52px;
		object-fit: contain;
		border-radius: 10px;
	}

	.project-name {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: 800;
		color: var(--text-primary);
	}

	.project-actions {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		flex-shrink: 0;
	}

	.project-actions .btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	.project-summary {
		font-size: 1.05rem;
		color: var(--text-secondary);
		line-height: 1.8;
		margin-bottom: 1.5rem;
	}

	.tech-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 3rem;
	}

	.star-sections {
		display: flex;
		flex-direction: column;
		gap: 0;
		border: 1px solid var(--border-color);
		border-radius: 16px;
		overflow: hidden;
	}

	.star-block {
		display: grid;
		grid-template-columns: 140px 1fr;
		gap: 1.5rem;
		padding: 1.75rem 2rem;
		border-bottom: 1px solid var(--border-color);
	}

	.star-block:last-child {
		border-bottom: none;
	}

	.star-block.highlight {
		background: rgba(0, 212, 170, 0.04);
	}

	.star-label {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding-top: 0.1rem;
	}

	.star-letter {
		font-size: 1.1rem;
		font-weight: 800;
		color: var(--accent-primary);
		font-family: var(--font-mono);
		width: 1.5rem;
		flex-shrink: 0;
	}

	.star-word {
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-muted);
	}

	.star-text {
		color: var(--text-secondary);
		line-height: 1.75;
		font-size: 0.975rem;
	}

	.star-list {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.star-list li {
		color: var(--text-secondary);
		font-size: 0.975rem;
		line-height: 1.7;
		padding-left: 1.1rem;
		position: relative;
	}

	.star-list li::before {
		content: '–';
		position: absolute;
		left: 0;
		color: var(--accent-primary);
	}

	.star-block.highlight .star-list li::before {
		content: '✓';
		font-size: 0.85rem;
	}

	@media (max-width: 600px) {
		.star-block {
			grid-template-columns: 1fr;
			gap: 0.75rem;
		}

		.project-header {
			flex-direction: column;
		}
	}
</style>
