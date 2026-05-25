<script lang="ts">
</script>

<section id="about" class="section about">
	<div class="container">
		<h2 class="section-title">About Me</h2>
		<p class="section-subtitle">
			Mostly backend, but I go wherever the project takes me.
		</p>

		<div class="about-content">
			<div class="about-text">
				<p>
					I'm a backend developer who spends most of his time building APIs, designing data models,
					and wiring up real-time and payment systems. I work mainly with <strong>.NET</strong>,
					<strong>Node.js</strong>, and <strong>Python</strong>, depending on what the project calls for.
				</p>
				<p>
					I've also built Flutter mobile apps, Next.js frontends, and admin dashboards when the
					project needed it — and recently I've been integrating AI features like semantic search
					and automated evaluation into the products I work on.
				</p>
				<p>
					I like understanding how the whole product fits together, not just my corner of it.
				</p>
			</div>
		</div>

	</div>
</section>

<style>
	.about-content {
		margin-bottom: clamp(3rem, 5vw, 5rem);
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

	@media (max-width: 768px) {
		.about-content {
			margin-bottom: 2.5rem;
		}
	}
</style>
