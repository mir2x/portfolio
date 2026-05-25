<script lang="ts">
	import Icon from '@iconify/svelte';

	type TechItem = {
		name: string;
		icon: string;
	};

	type TechLayer = {
		title: string;
		items: TechItem[];
	};

	const techLayers: TechLayer[] = [
		{
			title: 'Language',
			items: [
				{ name: 'C#', icon: 'devicon:csharp' },
				{ name: 'JavaScript', icon: 'devicon:javascript' },
				{ name: 'TypeScript', icon: 'devicon:typescript' },
				{ name: 'Python', icon: 'devicon:python' },
				{ name: 'Java', icon: 'devicon:java' },
				{ name: 'C', icon: 'devicon:c' },
				{ name: 'Dart', icon: 'devicon:dart' }
			]
		},
		{
			title: 'Backend',
			items: [
				{ name: 'REST API', icon: 'mdi:api' },
				{ name: 'Socket.IO', icon: 'devicon:socketio' },
				{ name: 'SignalR', icon: 'devicon:dot-net' },
				{ name: 'Express', icon: 'devicon:express' },
				{ name: 'Django', icon: 'logos:django-icon' },
				{ name: 'FastAPI', icon: 'devicon:fastapi' },
				{ name: 'ASP.NET Core', icon: 'devicon:dotnetcore' }
			]
		},
		{
			title: 'Database',
			items: [
				{ name: 'PostgreSQL', icon: 'devicon:postgresql' },
				{ name: 'SQL Server', icon: 'devicon:microsoftsqlserver' },
				{ name: 'MongoDB', icon: 'devicon:mongodb' },
				{ name: 'SQLite', icon: 'devicon:sqlite' },
				{ name: 'Redis', icon: 'devicon:redis' },
				{ name: 'Prisma', icon: 'devicon:prisma' },
				{ name: 'EF Core', icon: 'devicon:dotnetcore' },
				{ name: 'SQLAlchemy', icon: 'simple-icons:sqlalchemy' },
				{ name: 'SQLModel', icon: 'ph:database-fill' }
			]
		},
		{
			title: 'Web',
			items: [
				{ name: 'React', icon: 'devicon:react' },
				{ name: 'Next.js', icon: 'devicon:nextjs' },
				{ name: 'Tailwind CSS', icon: 'devicon:tailwindcss' },
				{ name: 'Redux', icon: 'devicon:redux' },
				{ name: 'RTK Query', icon: 'devicon:redux' },
				{ name: 'Zustand', icon: 'devicon:redux' }
			]
		},
		{
			title: 'App',
			items: [
				{ name: 'Flutter', icon: 'devicon:flutter' },
				{ name: 'Riverpod', icon: 'devicon:flutter' },
				{ name: 'Dio', icon: 'devicon:flutter' }
			]
		},
		{
			title: 'DevOps',
			items: [
				{ name: 'Git', icon: 'devicon:git' },
				{ name: 'Docker', icon: 'devicon:docker' },
				{ name: 'Linux', icon: 'devicon:linux' },
				{ name: 'Bash', icon: 'devicon:bash' },
				{ name: 'CI/CD (GitHub Actions)', icon: 'devicon:githubactions' },
				{ name: 'AWS EC2', icon: 'simple-icons:amazonec2' },
				{ name: 'AWS S3', icon: 'simple-icons:amazons3' }
			]
		},
		{
			title: 'Service',
			items: [
				{ name: 'Stripe', icon: 'simple-icons:stripe' },
				{ name: 'RevenueCat', icon: 'simple-icons:revenuecat' }
			]
		}
	];
</script>

<section id="tech-stack" class="section tech-stack">
	<div class="container">
		<h2 class="section-title">Tech Stack</h2>
		<p class="section-subtitle">
			Languages, frameworks, tools, and services I use across backend, web, app, and DevOps work.
		</p>
		<div class="layer-list">
			{#each techLayers as layer}
				<div class="layer-row">
					<h4>{layer.title}</h4>
					<div class="skills">
						{#each layer.items as item}
							<span class="skill-tag">
								<span class="skill-logo-wrap">
									<Icon icon={item.icon} width="100%" height="100%" />
								</span>
								{item.name}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.tech-stack {
		width: 100%;
	}

	.tech-stack .section-subtitle {
		margin-bottom: 2rem;
	}

	.layer-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.layer-row {
		display: grid;
		grid-template-columns: 150px 1fr;
		align-items: start;
		gap: 1.25rem;
		padding: 1.5rem 1.6rem;
		min-height: unset;
		border-radius: 16px;
		border: 1px solid var(--border-color);
		background: var(--bg-card);
		transition: all var(--transition-base);
	}

	.layer-row:hover {
		border-color: var(--border-hover);
		transform: translateY(-2px);
		box-shadow: var(--shadow-sm);
	}

	.layer-row h4 {
		margin: 0;
		font-size: 1rem;
		color: var(--text-primary);
		letter-spacing: 0.03em;
		text-transform: uppercase;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.skill-tag {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.4rem 0.75rem;
		background: var(--bg-tertiary);
		border-radius: 6px;
		font-size: 0.875rem;
		color: var(--text-secondary);
		font-family: var(--font-mono);
		transition: all var(--transition-base);
	}

	.skill-tag:hover {
		color: var(--text-primary);
		background: rgba(0, 212, 170, 0.12);
	}

	.skill-logo-wrap {
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	@media (max-width: 768px) {
		.layer-row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}
	}
</style>
