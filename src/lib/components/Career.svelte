<script lang="ts">
	const experiences = [
		{
			company: 'SparkTech',
			role: 'Backend & AI Developer',
			period: '2024 - Present',
			description: 'Developing scalable backend systems and integrating AI/ML solutions. Working with NLP, chatbots, and RAG architectures.',
			technologies: ['Node.js', 'TypeScript', 'Python', 'NLP', 'Prisma']
		},
		{
			company: 'RentYard',
			role: 'Backend Developer',
			period: '2023 - 2024',
			description: 'Built and maintained RESTful APIs for property rental platform. Designed database schemas and implemented authentication systems.',
			technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis']
		}
	];
</script>

<section id="career" class="section career">
	<div class="container">
		<h2 class="section-title">Career</h2>
		<p class="section-subtitle">
			My professional journey in software development.
		</p>

		<div class="timeline">
			{#each experiences as exp, i}
				<div class="timeline-item">
					<div class="timeline-marker">
						<div class="marker-dot"></div>
						{#if i < experiences.length - 1}
							<div class="marker-line"></div>
						{/if}
					</div>
					<div class="timeline-content card">
						<div class="timeline-header">
							<div>
								<h3 class="company">{exp.company}</h3>
								<p class="role">{exp.role}</p>
							</div>
							<span class="period">{exp.period}</span>
						</div>
						<p class="description">{exp.description}</p>
						<div class="technologies">
							{#each exp.technologies as tech}
								<span class="tag">{tech}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.timeline {
		position: relative;
		max-width: 800px;
	}

	.timeline-item {
		display: flex;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.timeline-marker {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-shrink: 0;
	}

	.marker-dot {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--accent-gradient);
		box-shadow: 0 0 20px rgba(0, 212, 170, 0.4);
	}

	.marker-line {
		width: 2px;
		flex-grow: 1;
		background: linear-gradient(to bottom, var(--accent-primary), transparent);
		margin-top: 0.5rem;
	}

	.timeline-content {
		flex-grow: 1;
	}

	.timeline-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.company {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
	}

	.role {
		font-size: 1rem;
		color: var(--accent-primary);
		font-weight: 500;
	}

	.period {
		font-size: 0.875rem;
		color: var(--text-muted);
		font-family: var(--font-mono);
		background: var(--bg-tertiary);
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
	}

	.description {
		color: var(--text-secondary);
		margin-bottom: 1rem;
		line-height: 1.7;
	}

	.technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	@media (max-width: 600px) {
		.timeline-item {
			flex-direction: column;
			gap: 1rem;
		}

		.timeline-marker {
			flex-direction: row;
			gap: 1rem;
		}

		.marker-line {
			width: auto;
			height: 2px;
			flex-grow: 1;
			margin-top: 0;
			background: linear-gradient(to right, var(--accent-primary), transparent);
		}

		.timeline-header {
			flex-direction: column;
		}
	}
</style>
