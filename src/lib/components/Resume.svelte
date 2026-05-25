<script lang="ts">
	const highlights = [
		{ label: 'Years Experience', value: '2+' },
		{ label: 'Projects Completed', value: '15+' },
		{ label: 'Technologies', value: '10+' },
		{ label: 'Products in Production', value: '4+' }
	];
</script>

<section id="resume" class="section resume">
	<div class="container">
		<h2 class="section-title">Resume</h2>
		<p class="section-subtitle">
			A quick overview of my experience and skills.
		</p>

		<div class="resume-content">
			<div class="highlights-grid">
				{#each highlights as item}
					<div class="highlight-card">
						<span class="highlight-value">{item.value}</span>
						<span class="highlight-label">{item.label}</span>
					</div>
				{/each}
			</div>

			<div class="resume-cta">
				<div class="resume-info">
					<h3>Want to know more?</h3>
					<p>View my resume for a detailed overview of my education, experience, and skills.</p>
				</div>
				<a href="/cv/Mir%20Tanim%20Ahmed.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
						<polyline points="14 2 14 8 20 8"/>
						<line x1="16" y1="13" x2="8" y2="13"/>
						<line x1="16" y1="17" x2="8" y2="17"/>
						<polyline points="10 9 9 9 8 9"/>
					</svg>
					View Resume
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.resume-content {
		max-width: 800px;
	}

	.highlights-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.highlight-card {
		text-align: center;
		padding: 2rem 1rem;
		background: var(--bg-card);
		border: 1px solid var(--border-color);
		border-radius: 12px;
		transition: all var(--transition-base);
	}

	.highlight-card:hover {
		border-color: var(--accent-primary);
		transform: translateY(-4px);
	}

	.highlight-value {
		display: block;
		font-size: 2.5rem;
		font-weight: 800;
		background: var(--accent-gradient);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-bottom: 0.5rem;
	}

	.highlight-label {
		font-size: 0.9rem;
		color: var(--text-secondary);
	}

	.resume-cta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem;
		background: var(--bg-card);
		border: 1px solid var(--border-color);
		border-radius: 16px;
		gap: 2rem;
	}

	.resume-info h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.resume-info p {
		color: var(--text-secondary);
	}

	@media (max-width: 768px) {
		.highlights-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.resume-cta {
			flex-direction: column;
			text-align: center;
		}
	}

	@media (max-width: 400px) {
		.highlights-grid {
			grid-template-columns: 1fr;
		}

		.highlight-value {
			font-size: 2rem;
		}
	}
</style>
