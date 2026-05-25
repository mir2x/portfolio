<script lang="ts">
	let formData = $state({
		name: '',
		email: '',
		message: ''
	});
	let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');

	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/mir2x',
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/mir-tanim-ahmed',
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
		},
		{
			name: 'Email',
			url: 'mailto:mir.tanim.ahmed1@gmail.com',
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
		},
		{
			name: '+880 1921 685616',
			url: 'tel:+8801921685616',
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
		}
	];

	async function handleSubmit(e: Event) {
		e.preventDefault();
		status = 'sending';

		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData)
		});

		if (res.ok) {
			status = 'sent';
			formData = { name: '', email: '', message: '' };
			setTimeout(() => { status = 'idle'; }, 3000);
		} else {
			status = 'error';
			setTimeout(() => { status = 'idle'; }, 3000);
		}
	}
</script>

<section id="contact" class="section contact">
	<div class="container">
		<h2 class="section-title">Get in Touch</h2>
		<p class="section-subtitle">
			Have a project in mind or want to collaborate? Feel free to reach out!
		</p>

		<div class="contact-content">
			<div class="contact-info">
				<h3>Let's Connect</h3>
				<p>
					I'm always interested in hearing about new projects and opportunities. 
					Whether you have a question or just want to say hi, I'll do my best to get back to you!
				</p>

				<div class="social-links">
					{#each socialLinks as link}
						<a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link" aria-label={link.name}>
							{@html link.icon}
							<span>{link.name}</span>
						</a>
					{/each}
				</div>

				<div class="email-direct">
					<span class="email-label">Or email me directly at</span>
					<a href="mailto:mir.tanim.ahmed1@gmail.com" class="email-address">
						mir.tanim.ahmed1@gmail.com
					</a>
				</div>
			</div>

			<form class="contact-form" onsubmit={handleSubmit}>
				<div class="form-group">
					<label for="name">Name</label>
					<input 
						type="text" 
						id="name" 
						bind:value={formData.name}
						required 
						placeholder="Your name"
					/>
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input 
						type="email" 
						id="email" 
						bind:value={formData.email}
						required 
						placeholder="your@email.com"
					/>
				</div>
				<div class="form-group">
					<label for="message">Message</label>
					<textarea 
						id="message" 
						bind:value={formData.message}
						required 
						rows="5"
						placeholder="Your message..."
					></textarea>
				</div>
				<button type="submit" class="btn btn-primary" class:btn-error={status === 'error'} disabled={status === 'sending'}>
					{#if status === 'sending'}
						Sending...
					{:else if status === 'sent'}
						Message Sent! ✓
					{:else if status === 'error'}
						Failed to send. Try again.
					{:else}
						Send Message
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
						</svg>
					{/if}
				</button>
			</form>
		</div>
	</div>
</section>

<style>
	.contact-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
	}

	.contact-info h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.contact-info > p {
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.social-links {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.social-link {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		color: var(--text-secondary);
		font-size: 1rem;
		transition: all var(--transition-base);
		padding: 0.75rem 1rem;
		background: var(--bg-card);
		border: 1px solid var(--border-color);
		border-radius: 8px;
	}

	.social-link:hover {
		color: var(--accent-primary);
		border-color: var(--accent-primary);
		transform: translateX(8px);
	}

	.email-direct {
		padding-top: 1.5rem;
		border-top: 1px solid var(--border-color);
	}

	.email-label {
		display: block;
		font-size: 0.9rem;
		color: var(--text-muted);
		margin-bottom: 0.5rem;
	}

	.email-address {
		font-size: 1.1rem;
		color: var(--accent-primary);
		font-weight: 500;
	}

	.contact-form {
		background: var(--bg-card);
		border: 1px solid var(--border-color);
		border-radius: 16px;
		padding: 2rem;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group label {
		display: block;
		font-size: 0.9rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
		color: var(--text-secondary);
	}

	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 0.875rem 1rem;
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		color: var(--text-primary);
		font-size: 1rem;
		font-family: inherit;
		transition: border-color var(--transition-fast);
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--accent-primary);
	}

	.form-group input::placeholder,
	.form-group textarea::placeholder {
		color: var(--text-muted);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 120px;
	}

	.contact-form .btn {
		width: 100%;
		justify-content: center;
	}

	.contact-form .btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.btn-error {
		background: #e53e3e !important;
	}

	@media (max-width: 768px) {
		.contact-content {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
	}
</style>
