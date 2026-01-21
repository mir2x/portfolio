<script lang="ts">
	const projects = [
		{
			name: 'Podlove',
			description: 'Full-stack podcast application with backend API and Flutter mobile app. Features audio streaming, subscriptions, and personalized recommendations.',
			technologies: ['TypeScript', 'Node.js', 'Flutter', 'PostgreSQL'],
			github: 'https://github.com/mir2x/podlove_backend',
			featured: true
		},
		{
			name: 'Gig Geni',
			description: 'Backend and frontend for a gig economy platform. Includes user authentication, job matching, and payment processing.',
			technologies: ['TypeScript', 'Next.js', 'Prisma', 'PostgreSQL'],
			github: 'https://github.com/mir2x/gig_geni_backend',
			featured: true
		},
		{
			name: 'Tha Drop Backend',
			description: 'Scalable backend service for a content delivery platform with caching, queue management, and real-time features.',
			technologies: ['TypeScript', 'Node.js', 'Redis', 'MongoDB'],
			github: 'https://github.com/mir2x/tha_drop_backend',
			featured: true
		},
		{
			name: 'Video Feature Extraction API',
			description: 'Python-based API for extracting features from videos using machine learning and computer vision techniques.',
			technologies: ['Python', 'FastAPI', 'OpenCV', 'ML'],
			github: 'https://github.com/mir2x/Video-Feature-Extraction-Tool-API',
			featured: false
		},
		{
			name: 'Podcast Backend',
			description: 'RESTful API for podcast management application with episode handling, user subscriptions, and analytics.',
			technologies: ['TypeScript', 'Express', 'PostgreSQL'],
			github: 'https://github.com/mir2x/podcast_backend',
			featured: false
		},
		{
			name: 'Social Backend',
			description: 'Backend service for social networking features including posts, comments, likes, and user relationships.',
			technologies: ['TypeScript', 'Node.js', 'MongoDB'],
			github: 'https://github.com/mir2x/social_backend',
			featured: false
		}
	];
</script>

<section id="projects" class="section projects">
	<div class="container">
		<h2 class="section-title">Projects</h2>
		<p class="section-subtitle">
			Some of the projects I've built, from full-stack applications to specialized APIs.
		</p>

		<div class="projects-grid">
			{#each projects as project}
				<article class="project-card card" class:featured={project.featured}>
					<div class="project-header">
						<div class="folder-icon">
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<path d="M3 7v13a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6.5l-2-2H5a2 2 0 00-2 2z"/>
							</svg>
						</div>
						<div class="project-links">
							<a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
							</a>
						</div>
					</div>
					<h3 class="project-title">{project.name}</h3>
					<p class="project-description">{project.description}</p>
					<div class="project-technologies">
						{#each project.technologies as tech}
							<span class="tag">{tech}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>

		<div class="more-projects">
			<a href="https://github.com/mir2x?tab=repositories" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
				View All on GitHub
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M7 17L17 7M17 7H7M17 7v10"/>
				</svg>
			</a>
		</div>
	</div>
</section>

<style>
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.5rem;
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

	.folder-icon {
		color: var(--accent-primary);
	}

	.project-links a {
		color: var(--text-muted);
		transition: color var(--transition-fast);
	}

	.project-links a:hover {
		color: var(--accent-primary);
	}

	.project-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
	}

	.project-card:hover .project-title {
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

	.more-projects {
		margin-top: 3rem;
		text-align: center;
	}

	@media (max-width: 600px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
