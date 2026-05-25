<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Career from '$lib/components/Career.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Resume from '$lib/components/Resume.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Mir Tanim Ahmed | Backend Developer</title>
	<meta name="description" content="Backend Engineer specializing in ASP.NET Core, Node.js, and Python. Building production-grade APIs, real-time systems, and full-stack products." />
	<meta name="keywords" content="Backend Developer, Node.js, TypeScript, Python, API, Full-Stack, Software Engineer" />
	<meta name="author" content="Mir Tanim Ahmed" />
	<meta property="og:title" content="Mir Tanim Ahmed | Backend Developer" />
	<meta property="og:description" content="Backend Developer specializing in Node.js, TypeScript, and Python." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
</svelte:head>

<Nav />

<main>
	<Hero />
	<About />
	<Career />
	<Projects />
	<TechStack />
	<Resume />
	<Contact />
</main>

<Footer />
