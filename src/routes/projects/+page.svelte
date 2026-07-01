<script lang="ts">
	import { projects } from '$lib/data/projects';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Projects | Mir Tanim Ahmed</title>
	<meta name="description" content="All projects by Mir Tanim Ahmed — backend systems, APIs, and full-stack applications." />
</svelte:head>

<Nav />

<main class="projects-page">
	<div class="container">
		<div class="page-header">
			<a href="/#projects" class="back-link">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M19 12H5M12 19l-7-7 7-7"/>
				</svg>
				Back
			</a>
			<h1 class="section-title">All Projects</h1>
			<p class="section-subtitle">A full list of things I've built.</p>
		</div>

		<div class="projects-grid">
			{#each projects as project}
				<article class="project-card card" class:featured={project.featured}>
					<div class="project-header">
						<div class="project-icon">
							{#if project.logo}
								<img src={project.logo} alt={project.name} class="project-logo" />
							{:else}
								<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
									<path d="M3 7v13a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6.5l-2-2H5a2 2 0 00-2 2z"/>
								</svg>
							{/if}
						</div>
						<div class="project-links">
							{#if project.website}
								<a href={project.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
									</svg>
								</a>
							{/if}
							{#if project.playStore}
								<a href={project.playStore} target="_blank" rel="noopener noreferrer" aria-label="Google Play Store">
									<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
										<path d="M3.18 23.76a1.5 1.5 0 001.64-.17l11.25-6.5-2.83-2.83-10.06 9.5zM.5 1.5A1.5 1.5 0 000 2.63v18.74a1.5 1.5 0 00.5 1.13l.06.06 10.5-10.5v-.25L.56 1.44.5 1.5zM20.82 10.35l-2.88-1.66-3.17 3.17 3.17 3.17 2.9-1.67a1.7 1.7 0 000-3zM4.82.41L16.07 6.9l-2.83 2.83L3.18.24A1.5 1.5 0 014.82.41z"/>
									</svg>
								</a>
							{/if}
							{#if project.appStore}
								<a href={project.appStore} target="_blank" rel="noopener noreferrer" aria-label="Apple App Store">
									<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
										<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94.12.02.24.03.36.03.9 0 2.02-.55 2.45-1.36z"/>
									</svg>
								</a>
							{/if}
							{#if project.github}
								<a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
								</a>
							{/if}
						</div>
					</div>
					<a href="/projects/{project.slug}" class="project-title-link">
						<h3 class="project-title">{project.name}</h3>
					</a>
					<p class="project-description">{project.description}</p>
					<div class="project-technologies">
						{#each project.technologies as tech}
							<span class="tag">{tech}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</main>

<Footer />

<style>
	.projects-page {
		padding-top: 100px;
		min-height: 100vh;
	}

	.page-header {
		margin-bottom: 3rem;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.9rem;
		color: var(--text-muted);
		margin-bottom: 1.5rem;
		transition: color var(--transition-fast);
	}

	.back-link:hover {
		color: var(--accent-primary);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.5rem;
		padding-bottom: 4rem;
	}

	.project-card {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.project-card.featured {
		border-color: rgba(0, 212, 170, 0.2);
	}

	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1.25rem;
	}

	.project-icon {
		color: var(--accent-primary);
	}

	.project-logo {
		width: 40px;
		height: 40px;
		object-fit: contain;
		border-radius: 8px;
	}

	.project-links {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.project-links a {
		color: var(--text-muted);
		transition: color var(--transition-fast);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
	}

	.project-links a svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.project-links a:hover {
		color: var(--accent-primary);
	}

	.project-title-link {
		text-decoration: none;
	}

	.project-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
	}

	.project-title-link:hover .project-title {
		color: var(--accent-primary);
	}

	.project-description {
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.6;
		flex-grow: 1;
		margin-bottom: 1.25rem;
	}

	.project-technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: auto;
	}

	@media (max-width: 600px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
