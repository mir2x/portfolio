<script lang="ts">
	const experiences = [
		{
			company: 'Flexloop',
			url: 'https://www.flexloop.net/',
			role: 'Full-Stack Developer',
			period: 'Nov 2025 – Present',
			location: 'Remote — Bangladesh',
			bullets: [
				'Developing full-stack applications using ASP.NET Core (C#) and Next.js, with SQL Server for relational data modelling, AWS S3 for media storage, and SignalR for real-time WebSocket interactions.',
				'Reduced video load times by 80% by engineering a server-side FFmpeg transcoding pipeline generating multi-resolution HLS streams with adaptive bitrate quality.'
			],
			technologies: ['ASP.NET Core', 'C#', 'Next.js', 'SQL Server', 'SignalR', 'AWS S3', 'FFmpeg']
		},
		{
			company: 'RentYard Inc.',
			url: 'https://rentyard.com/about',
			role: 'Backend Developer',
			period: 'Mar 2025 – Oct 2025',
			location: 'Remote — United States',
			bullets: [
				'Designed the multi-tenant RESTful API (Node.js/Express/TypeScript) with 50+ endpoints, JWT auth, and RBAC. Built a hybrid search engine (Weaviate vector search, LLM intent extraction, fuzzy matching) achieving 90%+ accuracy.',
				'Delivered automated Stripe billing workflows, an async task queue (BullMQ + Redis) reducing response times by 5x, and a real-time chat system (Socket.IO).',
				'Deployed with Docker, CI/CD, and AWS. Recognised as "Best Employee of the Month" (Jul 2025).'
			],
			technologies: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ', 'Socket.IO', 'Docker', 'AWS', 'Stripe']
		},
		{
			company: 'Sparktech Agency',
			url: 'https://www.sparktech.agency/',
			role: 'Backend & DevOps Developer',
			period: 'Jun 2024 – Mar 2025',
			location: 'Dhaka, Bangladesh',
			bullets: [
				'Built backends (Node.js, ASP.NET Core/C#) powering 6+ client platforms with 100k+ daily API requests. Designed schemas in PostgreSQL and MongoDB, cutting query times by 50%.',
				'Integrated Stripe Connect for split payments, real-time messaging (Socket.IO/SignalR), and push notifications (Firebase).',
				'Led DevOps setup (Docker, CI/CD, AWS/DigitalOcean), reducing deployment cycles from hours to minutes.'
			],
			technologies: ['Node.js', 'ASP.NET Core', 'C#', 'PostgreSQL', 'MongoDB', 'Socket.IO', 'Firebase', 'Docker', 'AWS']
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
								<h3 class="company">
								<a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.company}</a>
							</h3>
								<p class="role">{exp.role}</p>
								<p class="location">{exp.location}</p>
							</div>
							<span class="period">{exp.period}</span>
						</div>
						<ul class="bullets">
							{#each exp.bullets as bullet}
								<li>{bullet}</li>
							{/each}
						</ul>
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

	.company a {
		color: inherit;
		text-decoration: none;
	}

	.company a:hover {
		color: var(--accent-primary);
	}

	.role {
		font-size: 1rem;
		color: var(--accent-primary);
		font-weight: 500;
	}

	.location {
		font-size: 0.875rem;
		color: var(--text-muted);
		font-style: italic;
		margin-top: 0.2rem;
	}

	.period {
		font-size: 0.875rem;
		color: var(--text-muted);
		font-family: var(--font-mono);
		background: var(--bg-tertiary);
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
	}

	.bullets {
		color: var(--text-secondary);
		margin: 0.75rem 0 1rem 1.1rem;
		padding: 0;
		line-height: 1.7;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.bullets li {
		font-size: 0.95rem;
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
