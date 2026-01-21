<script lang="ts">
	const skills = [
		{ name: 'Node.js', icon: '🟢' },
		{ name: 'TypeScript', icon: '💎' },
		{ name: 'Python', icon: '🐍' },
		{ name: 'PostgreSQL', icon: '🐘' },
		{ name: 'MongoDB', icon: '🍃' },
		{ name: 'Express', icon: '⚡' },
		{ name: 'Fastify', icon: '🚀' },
		{ name: 'Prisma', icon: '◮' },
		{ name: 'React', icon: '⚛️' },
		{ name: 'Next.js', icon: '▲' },
		{ name: 'Flutter', icon: '📱' },
		{ name: 'Docker', icon: '🐳' },
		{ name: 'Redis', icon: '🔴' },
		{ name: 'NLP/ML', icon: '🤖' }
	];
</script>

<section id="about" class="section about">
	<div class="container">
		<h2 class="section-title">About Me</h2>
		<p class="section-subtitle">
			A passionate backend developer focused on building scalable, efficient systems.
		</p>

		<div class="about-content">
			<div class="about-text">
				<p>
					I'm a <strong>Backend Developer</strong> with a passion for building robust and scalable systems. 
					I specialize in designing RESTful APIs, managing databases, and creating efficient server-side architectures.
				</p>
				<p>
					My journey has taken me through various roles where I've worked extensively with <strong>Node.js</strong>, 
					<strong>TypeScript</strong>, and <strong>Python</strong>. I'm also deeply interested in 
					<strong>Machine Learning</strong> and <strong>NLP</strong>, constantly exploring ways to integrate 
					AI capabilities into backend systems.
				</p>
				<p>
					Currently, I'm focused on <strong>microservices architecture</strong> and building 
					full-stack mobile applications with <strong>Flutter</strong>. I believe in writing clean, 
					maintainable code and following best practices in software development.
				</p>
			</div>

			<div class="skills-grid">
				<h3>Tech Stack</h3>
				<div class="skills">
					{#each skills as skill}
						<span class="skill-tag">
							<span class="skill-icon">{skill.icon}</span>
							{skill.name}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-content {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.about-text p {
		color: var(--text-secondary);
		margin-bottom: 1.25rem;
		font-size: 1.05rem;
		line-height: 1.8;
	}

	.about-text strong {
		color: var(--text-primary);
	}

	.skills-grid h3 {
		font-size: 1.25rem;
		margin-bottom: 1.5rem;
		color: var(--text-primary);
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
		padding: 0.6rem 1rem;
		background: var(--bg-tertiary);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		font-size: 0.9rem;
		color: var(--text-secondary);
		transition: all var(--transition-base);
	}

	.skill-tag:hover {
		border-color: var(--accent-primary);
		color: var(--text-primary);
		transform: translateY(-2px);
	}

	.skill-icon {
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		.about-content {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
	}
</style>
