<script lang="ts">
	const blogPosts = [
		{
			title: 'Building Scalable APIs with Node.js and TypeScript',
			excerpt: 'Learn best practices for designing and implementing production-ready REST APIs that can handle millions of requests.',
			date: 'Coming Soon',
			tags: ['Node.js', 'TypeScript', 'API Design'],
			comingSoon: true
		},
		{
			title: 'Introduction to RAG Architecture',
			excerpt: 'Explore Retrieval-Augmented Generation and how to integrate it into your applications for better AI responses.',
			date: 'Coming Soon',
			tags: ['AI', 'NLP', 'RAG'],
			comingSoon: true
		},
		{
			title: 'Microservices vs Monolith: When to Choose What',
			excerpt: 'A practical guide to help you decide the right architecture for your next project.',
			date: 'Coming Soon',
			tags: ['Architecture', 'Microservices'],
			comingSoon: true
		}
	];
</script>

<section id="blog" class="section blog">
	<div class="container">
		<h2 class="section-title">Blog</h2>
		<p class="section-subtitle">
			Thoughts, tutorials, and insights on backend development and technology.
		</p>

		<div class="blog-grid">
			{#each blogPosts as post}
				<article class="blog-card card">
					<div class="blog-meta">
						<span class="blog-date">{post.date}</span>
						{#if post.comingSoon}
							<span class="coming-soon-badge">Coming Soon</span>
						{/if}
					</div>
					<h3 class="blog-title">{post.title}</h3>
					<p class="blog-excerpt">{post.excerpt}</p>
					<div class="blog-tags">
						{#each post.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.blog-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.5rem;
	}

	.blog-card {
		position: relative;
		overflow: hidden;
	}

	.blog-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: var(--accent-gradient);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform var(--transition-base);
	}

	.blog-card:hover::before {
		transform: scaleX(1);
	}

	.blog-meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.blog-date {
		font-size: 0.85rem;
		color: var(--text-muted);
		font-family: var(--font-mono);
	}

	.coming-soon-badge {
		font-size: 0.7rem;
		padding: 0.25rem 0.5rem;
		background: rgba(124, 58, 237, 0.2);
		color: var(--accent-secondary);
		border-radius: 4px;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.blog-title {
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
		line-height: 1.4;
	}

	.blog-card:hover .blog-title {
		color: var(--accent-primary);
	}

	.blog-excerpt {
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.6;
		margin-bottom: 1.25rem;
	}

	.blog-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	@media (max-width: 600px) {
		.blog-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
