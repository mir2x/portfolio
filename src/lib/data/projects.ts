export type Star = {
	situation: string;
	task: string;
	actions: string[];
	results: string[];
};

export type Project = {
	slug: string;
	name: string;
	description: string;
	technologies: string[];
	github?: string;
	website?: string;
	playStore?: string;
	featured: boolean;
	logo?: string;
	star?: Star;
};

export const projects: Project[] = [
	{
		slug: 'petsocial',
		name: 'PetSocial',
		description: 'Social networking platform for pet owners — backend, Next.js web app, and admin CMS. HLS video pipeline, SignalR real-time chat/feed, multi-device presence, S3+CloudFront, Docker + CI/CD. Built at Flexloop.',
		technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'Redis', 'SignalR', 'Next.js', 'TypeScript', 'Flutter', 'Firebase'],
		website: 'https://web.thepetsocial.net/',
		playStore: 'https://play.google.com/store/apps/details?id=com.PetCentrals.petsocial&hl=en_SG',
		featured: true,
		logo: '/logos/petsocial.svg',
		star: {
			situation: 'Flexloop needed a full social networking platform for pet owners built from scratch — covering content sharing (posts, reels, stories), real-time messaging, a B2B marketplace for pet services, and an admin CMS — served across a Next.js web app, an admin dashboard, and Flutter iOS/Android apps simultaneously.',
			task: 'I owned the backend API, the Next.js user-facing web app, and the admin CMS dashboard. The backend had to handle real-time events, heavy media (video), and multi-device presence without managed infrastructure.',
			actions: [
				'Built a RESTful API in ASP.NET Core (.NET 10) with 20+ controllers — auth, pet profiles, social content, messaging, business profiles, notifications, bookmarks, and search.',
				'Engineered a server-side HLS transcoding pipeline using FFmpeg: adaptive bitrate at 360p/720p/1080p (resolution-aware with portrait/landscape detection), libx264 encoding, 4-second segments, parallel uploads (up to 10 concurrent) of .m3u8 and .ts files directly to S3 — so video starts playing in seconds instead of waiting for a full file download.',
				'Implemented three SignalR hubs: ChatHub (typing indicators, 3-level delivery/read receipts, multi-device presence via ConcurrentDictionary connection tracking), FeedHub (live new-post counts, unread notification badges), and ContentHub (real-time likes and comments per content item).',
				'Designed secure auth with 2-minute JWT access tokens + 30-day rotating refresh tokens (BCrypt password hashing, token revocation chain stored in DB).',
				'Integrated AWS S3 + CloudFront CDN for media delivery — presigned URL uploads, multipart for files over 16MB (6MB chunks, max 200MB), and a background FileCleanupService that purges unused S3 assets every 6 hours.',
				'Ran two ASP.NET Core hosted background services: StoryCleanupService (expires stories every hour) and FileCleanupService (S3 asset GC every 6 hours).',
				'Integrated Firebase Cloud Messaging for cross-platform push notifications (likes, comments, follows, messages) with fire-and-forget async dispatch.',
				'Added OTP-based email/phone verification via Gmail SMTP, Twilio, and Bird SMS with 10-minute expiry.',
				'Built a multi-stage Docker image (SDK build → ASP.NET runtime, non-root user UID 1001, FFmpeg bundled, curl health check) and a GitHub Actions CI/CD pipeline that builds, compresses, SCPs the image to EC2, deploys with --restart unless-stopped, and retries health checks 6 times before marking the deploy successful.',
				'Built the user-facing Next.js 16 web app with Zustand state management, @microsoft/signalr for real-time PawChat, react-easy-crop for profile/post image editing, and full feature parity with the mobile app — feed, reels, stories, pet profiles, search, and notifications.',
				'Developed the Next.js admin CMS with dashboards for user/pet moderation, FAQ management, support messages, event management, and terms/policy editing — giving Flexloop full operational control without engineering involvement.'
			],
			results: [
				'HLS adaptive streaming cut video start time to seconds — mobile users on 360p load a fraction of the data vs. a full video file download.',
				'Multi-device real-time presence (online/offline, typing, read receipts) handled entirely in-memory with zero Redis dependency using a ConcurrentDictionary connection registry.',
				'Automated CI/CD pipeline reduced deployments to a single git push to main, with health-check-gated rollout to EC2.',
				'Single API served web, iOS, and Android clients in production simultaneously.'
			]
		}
	},
	{
		slug: 'islami-jindegi',
		name: 'Islami Jindegi',
		description: 'Independent Islamic knowledge platform — sole technical maintainer. ASP.NET Core .NET 10 backend + Flutter app with offline-first content sync, prayer alarm engine, Quran/audio streaming, and Riverpod reactive state.',
		technologies: ['Flutter', 'Riverpod', 'ASP.NET Core', 'C#', 'PostgreSQL', 'EF Core', 'AWS S3', 'Firebase', 'Drift', 'just_audio'],
		website: 'https://islamijindegi.com/',
		playStore: 'https://play.google.com/store/apps/details?id=com.islami_jindegi&hl=en_SG',
		featured: true,
		logo: '/logos/ij.png',
		star: {
			situation: 'Islami Jindegi needed a comprehensive Islamic knowledge platform for Bengali-speaking Muslims — covering Quran access with multiple mushafs and tafsir, audio sermons (bayans), daily teachings (malfuzats), Islamic Q&A (masails), duas, prayer times, Qibla finder, and mosque locator — all accessible online and offline.',
			task: 'I built both the ASP.NET Core backend and the Flutter mobile app end-to-end: content delivery infrastructure on the server side, and the full offline-first user experience on the client side.',
			actions: [
				'Built an ASP.NET Core (.NET 10) minimal API with 8 endpoint groups (authors, books, bayans, chapters, categories, malfuzats, masails, duas) — each with search, category/author filtering, published status, and PagedResult<T> pagination.',
				'Designed the PostgreSQL schema with EF Core: self-referencing hierarchical Category (parent/children), many-to-many junctions (book_authors, book_categories, bayan_categories, etc.), and a Book → Chapter → SubChapter tree with position-based ordering.',
				'Integrated Tigris S3-compatible object storage via AWS SDK — images (JPEG/PNG/WebP, max 10MB) and PDFs (max 100MB) uploaded to static.islamijindegi.com with public-read ACL and randomised GUID keys.',
				'Containerised with a multi-stage Docker build (SDK → ASP.NET runtime) and deployed on Fly.io (Mumbai region) with auto-scaling 0→1 machines — zero idle cost, HTTPS-enforced, EF Core migrations run automatically on startup.',
				'Built the Flutter app with Riverpod 2 as the reactive backbone — FutureProvider for async API calls with autoDispose, AsyncNotifier for download tracking, StateProvider for playback state — and go_router with 30+ named typed routes including wakelock auto-management per route.',
				'Implemented a multi-layer offline strategy: a pre-bundled read-only Quran SQLite DB loaded via Drift ORM, plus an 8-feature offline DB prefetch system (books, duas, malfuzats, articles, madrasahs, masails, bayans, misc) that downloads and atomically swaps per-feature databases in the background with version tracking in SharedPreferences — seamlessly switching between online Dio API and offline SQLite service per feature.',
				'Built a prayer alarm engine using the Adhan algorithm for location-based prayer time calculation — GPS + reverse geocoding + DST-aware timezone handling, 4 configurable azan sounds, pre/post waqt offset modes, weekday-specific scheduling, and deterministic alarm IDs (101–105 before, 201–205 after) that survive app kill via the device alarm system.',
				'Implemented Quran recitation and bayan audio streaming with just_audio: resolves local cached file first before streaming, ownership tracking to prevent disposal race conditions, and verse-level indexed scroll via scrollable_positioned_list with 8 bundled Arabic/Quranic typefaces.',
				'Shipped an Android home screen widget updated every 15 minutes via a Workmanager background isolate writing prayer times to SharedPreferences — fully decoupled from the main app process.',
				'Integrated Firebase FCM with on-tap notification routing (pushes to named go_router screen or launches URL), Crashlytics for crash reporting, and Analytics for event tracking — both enabled only in release builds.'
			],
			results: [
				'Live at islamijindegi.com with app published on Google Play — serves Bengali-speaking users across web and mobile.',
				'App functions fully offline after initial sync — users read books, listen to bayans, and access duas without any internet connection.',
				'Prayer alarms fire reliably even when the app is killed, backed by the device native alarm system.',
				'Zero idle infrastructure cost on Fly.io auto-scaling — backend spins up on first request and stops when inactive.'
			]
		}
	},
	{
		slug: 'rentyard',
		name: 'RentYard',
		description: 'Property rental marketplace with AI-powered semantic search (Weaviate + LLM + fuzzy matching), Stripe subscription billing, BullMQ async queues, Socket.IO chat, and AWS S3 media pipeline.',
		technologies: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'Weaviate', 'BullMQ', 'Redis', 'Stripe', 'Socket.IO', 'AWS S3'],
		website: 'https://rentyard.com/',
		playStore: 'https://play.google.com/store/apps/details?id=com.rentyard.rentyard&hl=en_SG',
		featured: true,
		logo: '/logos/rentyard.png',
		star: {
			situation: 'RentYard needed a full property rental marketplace covering four property types (single homes, apartments, condominiums, dorms) — with AI-powered search, tenant and lease lifecycle management, recurring Stripe billing, real-time chat, and multi-device push notifications — served across web and mobile clients.',
			task: 'I designed and built the entire backend API: 53 modules, a multi-tenant data model, a hybrid NLP search pipeline, Stripe subscription infrastructure with webhooks, an async job system, and real-time messaging.',
			actions: [
				'Built a 53-module Node.js/TypeScript/Express API with Zod validation on every DTO, a custom catchAsync wrapper, and a structured error hierarchy (Zod, Mongoose, CastError, DuplicateError, Multer) that normalises all failures into a consistent response envelope.',
				'Engineered a hybrid semantic search pipeline: Weaviate vector DB stores property embeddings generated locally with Xenova all-MiniLM-L6-v2 (384-dim, mean-pooled, L2-normalised) or Google Gemini embeddings-001 as fallback. A Gemini 1.5 Flash LLM extracts structured intent (beds, location, property type, rent range) from free-text queries; fuzzy matching via fastest-levenshtein normalises location and property type before vector similarity search — achieving 90%+ search accuracy on natural language queries.',
				'Integrated Stripe with full webhook handling (invoice.created, invoice.payment_succeeded, invoice.payment_failed) — dynamic fee calculation per payment method (2.9%+$0.30 card, 0.8% ACH capped at $5, fixed $0.80 iDEAL), subscription auto-pay with retry tracking, and automatic Stripe customer provisioning on social login.',
				'Implemented Firebase Admin SDK for Google and Apple social login with auto-user creation, Stripe customer ID provisioning, and JWT + refresh token issuance in a single auth flow.',
				'Built an async email pipeline with BullMQ backed by Redis — email jobs queued out of the request cycle, processed by a dedicated Worker with completed/failed lifecycle hooks, Handlebars HTML templates rendered per job, and Nodemailer/Gmail SMTP for delivery — reducing email-related request latency by 5×.',
				'Scheduled four background jobs with node-cron/node-schedule: rent invoice generation (runs every minute, checks reminderDate per property), subscription auto-pay, subscription invoice creation, and move-out resident processing — covering the full tenant billing lifecycle without manual intervention.',
				'Built Socket.IO real-time chat with JWT handshake auth, per-user socket rooms, bidirectional message history, typing indicators, bulk read-receipt updates via MongoDB aggregation pipeline, and unread message count broadcasting.',
				'Integrated AWS S3 with Sharp image optimisation — WebP conversion, metadata stripping, compression — for single and batch media uploads; constructed CloudFront CDN URLs for delivery.',
				'Implemented Redis query caching for apartment unit listings with SHA1-hashed cache keys from sorted query objects, eliminating redundant DB hits on repeated filtered/paginated requests.',
				'Added Firebase FCM multi-device push notifications using Promise.allSettled for partial delivery tolerance, $addToSet token deduplication on login, and per-notification data payloads.',
				'Configured Weaviate via Docker Compose for local and production vector store deployment, and enforced code quality with Husky pre-commit hooks running ESLint + Prettier via lint-staged.'
			],
			results: [
				'Platform live at rentyard.com with app on Google Play — natural language queries like "2-bed near downtown under $1500" resolve to semantically ranked listings at 90%+ accuracy.',
				'BullMQ async email queue decoupled notification delivery from API response time, cutting email-related latency by 5×.',
				'Stripe autopay cron + webhook pipeline handles all recurring billing and payment failures without manual intervention.',
				'Recognised as Best Employee of the Month (July 2025) at RentYard Inc.'
			]
		}
	},
	{
		slug: 'deshileague',
		name: 'DeshiLeague',
		description: 'Multi-sport tournament platform (Cricket, Football, Badminton, Carrom, Free Fire) with live ball-by-ball scoring, real-time Socket.IO, bracket engine, and Expo push notifications.',
		technologies: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Socket.IO', 'Cloudinary', 'Expo'],
		website: 'https://deshileague.com/en',
		playStore: 'https://play.google.com/store/apps/details?id=com.deshileague.app&hl=en_SG',
		featured: true,
		logo: '/logos/deshileague.png',
		star: {
			situation: 'DeshiLeague needed a tournament management and live-scoring platform covering five sports — Cricket, Football, Badminton, Carrom, and Free Fire esports — with real-time scoring, bracket generation, player stat tracking, and a mobile app on top.',
			task: 'I built the entire backend API: 32 modules, a complex relational data model, real-time WebSocket infrastructure, and the scoring engines for each sport — all serving a Next.js web app, Expo mobile app (iOS/Android), and a Vite admin dashboard from a single API.',
			actions: [
				'Designed and built a modular Node.js/TypeScript/Express API across 32 route modules, with Zod schemas on every DTO for runtime validation and a consistent sendResponse wrapper across all endpoints.',
				'Modelled the entire domain in PostgreSQL via 16 separate Prisma schema files — 30+ entities covering the full tournament lifecycle: Users (5 roles), Organizers, Teams, Players, Tournaments, Fixtures, Matches, and sport-specific models.',
				'Built a ball-by-ball cricket scoring engine tracking innings, over/ball number, batsman, non-striker, and bowler — with dismissal types (BOWLED, CAUGHT, LBW, RUN_OUT, STUMPED, HIT_WICKET, OBSTRUCTING_FIELD), extra types (WIDE, NO_BALL, BYE, LEG_BYE), boundary detection, and auto-aggregated batting/bowling stats per player.',
				'Implemented a tournament bracket engine supporting both KNOCKOUT and LEAGUE formats, with fixture dependency resolution via dependsOnMatchId — so bracket slots advance automatically as match results are submitted.',
				'Built a Free Fire esports module with placement + kill-point scoring configs per tournament, screenshot proof submission, and a verification workflow (PENDING → VERIFIED → DISPUTED) for result integrity.',
				'Implemented Socket.IO with JWT auth middleware — real-time handlers for cricket ball-by-ball updates, football match state (timer, half tracking, live goals), and online user presence tracking with a per-userId socket room.',
				'Designed a 5-role authorization system (Admin, Organizer, Manager, Player, Sponsor) with an approval workflow for organizers, role-gated route middleware, and 15-minute JWT access tokens + 30-day refresh tokens.',
				'Integrated Cloudinary behind an abstract IStorageProvider interface (with a local storage fallback) for team logos, profile pictures, and tournament banners — multer handles buffering before upload.',
				'Built an Expo push notification service with 3-attempt exponential backoff, batch chunking to respect Expo API limits, delivery receipt tracking, and automatic removal of DeviceNotRegistered tokens.',
				'Scheduled a monthly leaderboard snapshot job with node-cron (runs at 00:01 on the 1st) that captures per-sport rankings — cricketBatsman, cricketBowler, footballGoals, and more — with period-keyed snapshots for historical leaderboards.',
				'Added OTP-based phone verification (4-digit, 5-minute expiry via SMS) for registration and account recovery, with a dev mode that returns the OTP in the response for testing.'
			],
			results: [
				'Single API serving Next.js web, Expo iOS/Android, and Vite admin dashboard simultaneously — live at deshileague.com with the app published on Google Play.',
				'Ball-by-ball cricket scoring runs in real-time across all active matches, with stats automatically aggregated per player after each delivery.',
				'Free Fire esports tournaments fully self-managed by organizers — result submission, screenshot verification, and leaderboard ranking without admin intervention.'
			]
		}
	},
	{
		slug: 'influencer-cave',
		name: 'Influencer Cave',
		description: 'B2B influencer marketplace — implemented real-time order-scoped chat, Stripe payment processing with dynamic fee/tax calculation, and a dual-mode invoice system with automated email notifications.',
		technologies: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'Socket.IO', 'Stripe', 'AWS S3'],
		playStore: 'https://play.google.com/store/apps/details?id=com.influencercave.influencercave',
		featured: false,
		logo: '/logos/ic.png',
		star: {
			situation: 'Influencer Cave is a B2B marketplace connecting clients with influencers for promotional services. The platform needed real-time messaging tied to orders, a complete Stripe payment flow with saved methods and dynamic fees, and a flexible invoice system supporting both standard orders and custom billing.',
			task: 'I was brought in to implement three specific features on an existing Node.js/Express/MongoDB backend: the real-time chat system, the Stripe payment module, and the full invoice lifecycle — working within the established codebase architecture.',
			actions: [
				'Built order-scoped Socket.IO chat: each conversation is tied to an orderId room, messages are persisted to MongoDB with sender/receiver references and an S3 image array, unread counts are updated per participant using MongoDB array filters when the receiver is offline, and a sendImage endpoint handles multipart uploads to S3.',
				'Implemented the full Stripe payment flow: SetupIntent creation for card and US bank account, off-session PaymentIntent charges against saved payment methods, dynamic fee calculation (2.9%+$0.30 domestic card, 4.4%+$0.30 international, 0.8% ACH capped at $5, $0.80 flat iDEAL), Stripe Tax API integration for address-based tax calculation, and full payment method management (list, set default, delete, update billing).',
				'Built a dual-mode invoice system: order-based invoices auto-created on package purchase (unique alphanumeric demoId — 3 letters + 4 digits, uniqueness-checked in DB) with an initial chat message linking buyer and seller; custom invoices created by sellers for clients by email with HTML email notification dispatch.',
				'Handled both online and offline payment paths: online payments charge via Stripe PaymentIntent, mark the invoice paid, increment the influencer\'s myBalance, record an expense entry, and dispatch confirmation emails to both buyer and seller via Nodemailer HTML templates; offline payments store deposit proof, set a pending admin-approval state, and notify both parties.',
				'Wired Socket.IO events throughout — newMessage on invoice creation, updatedMessage on payment completion — keeping all connected clients in sync without polling.'
			],
			results: [
				'All three features shipped and integrated into the live platform available on Google Play.',
				'Dual-path invoice flow (online Stripe + offline deposit with admin approval) gave the platform flexibility for clients unwilling to pay by card.',
				'Order-scoped chat rooms kept messaging context isolated per transaction, preventing cross-order message confusion.'
			]
		}
	},
	// {
	// 	slug: 'podlove',
	// 	name: 'Podlove',
	// 	description: 'Full-stack podcast application with backend API and Flutter mobile app. Features audio streaming, subscriptions, and personalized recommendations.',
	// 	technologies: ['TypeScript', 'Node.js', 'Flutter', 'PostgreSQL'],
	// 	github: 'https://github.com/mir2x/podlove_backend',
	// 	featured: true
	// },
	{
		slug: 'gig-geni',
		name: 'GigGeni',
		description: 'Skill-based talent competition platform with a 4-round elimination system, Gemini 2.0 Flash AI quiz generation and subjective grading, BullMQ async workers, and a Next.js 15 frontend.',
		technologies: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'Socket.IO', 'BullMQ', 'Redis', 'Gemini AI', 'Next.js', 'Cloudinary'],
		website: 'https://www.giggeni.com/',
		featured: false,
		star: {
			situation: 'GigGeni needed a talent discovery platform where employers post skill-based competitions and candidates compete through four elimination rounds — quiz, video submission, interview, and final task — with AI-assisted evaluation to scale the screening process without manual review.',
			task: 'I built the entire backend API and the Next.js web application: the competition state machine, AI evaluation pipeline, async job infrastructure, real-time notifications, and the full employer/candidate-facing frontend.',
			actions: [
				'Built a 16-module Node.js/TypeScript/Express API with a 4-round competition state machine per participant: Round 1 (AI-generated quiz), Round 2 (video submission review), Round 3 (scheduled Zoom interview), Round 4 (task submission and final presentation).',
				'Integrated Gemini 2.0 Flash for two AI features: automatic quiz generation from competition details (title, description, skills, criteria → structured MCQ/true-false/short-answer/essay JSON with configurable point distribution), and automated subjective answer grading that evaluates free-text responses against correctness criteria and awards partial credit (0–100% of question points) — eliminating manual Round 1 scoring.',
				'Set up BullMQ backed by Redis with three queues (email-sending, competition-updates, notification-sending) and a dedicated competition worker process running concurrently via the concurrently package — score aggregation runs out of the API process so heavy computation never blocks requests.',
				'Implemented Socket.IO with JWT-authenticated connections and per-user rooms — live notification delivery dispatched from the notificationQueue worker, keeping all connected clients updated on round progression and competition results.',
				'Handled media with Cloudinary streaming upload for both images and videos with auto-cleanup on deletion — covering profile pictures, Round 2 video submissions, and task deliverables.',
				'Multi-token JWT strategy: 15-minute access token, 7-day refresh token, and a separate 15-minute reset token — each with its own secret — plus SHA256-hashed 6-digit OTPs with 15-minute expiry for email verification.',
				'Added Mongoose post-save hooks that automatically recalculate and persist profile completion percentages per role (Employee: skills, experience, education; Employer: company details, LinkedIn) after every profile update.',
				'Applied Helmet security headers, express-rate-limit (100 req/15 min), CORS whitelist (giggeni.com, admin.giggeni.com), and Pino structured JSON logging across the API.',
				'Built the Next.js 15 frontend with Redux Toolkit + RTK Query (tag-based cache invalidation, automatic Bearer token injection, auto token refresh on 401), shadcn/ui components, Framer Motion animations, and dark/light mode via next-themes — covering competition browsing, quiz manager with AI generation UI, participant round tracker, video review, Zoom scheduling, and leaderboard.'
			],
			results: [
				'Platform live at giggeni.com — employers can run end-to-end talent competitions without any manual Round 1 screening thanks to AI quiz generation and grading.',
				'Separate BullMQ worker process keeps score aggregation and email delivery fully decoupled from API response times.',
				'4-round elimination flow handles the full hiring funnel — quiz to final task — within a single platform.'
			]
		}
	},
	// {
	// 	slug: 'tha-drop-backend',
	// 	name: 'Tha Drop Backend',
	// 	description: 'Scalable backend service for a content delivery platform with caching, queue management, and real-time features.',
	// 	technologies: ['TypeScript', 'Node.js', 'Redis', 'MongoDB'],
	// 	github: 'https://github.com/mir2x/tha_drop_backend',
	// 	featured: false
	// },
	// {
	// 	slug: 'video-feature-extraction-api',
	// 	name: 'Video Feature Extraction API',
	// 	description: 'Python-based API for extracting features from videos using machine learning and computer vision techniques.',
	// 	technologies: ['Python', 'FastAPI', 'OpenCV', 'ML'],
	// 	github: 'https://github.com/mir2x/Video-Feature-Extraction-Tool-API',
	// 	featured: false
	// },
	// {
	// 	slug: 'podcast-backend',
	// 	name: 'Podcast Backend',
	// 	description: 'RESTful API for podcast management application with episode handling, user subscriptions, and analytics.',
	// 	technologies: ['TypeScript', 'Express', 'PostgreSQL'],
	// 	github: 'https://github.com/mir2x/podcast_backend',
	// 	featured: false
	// },
	// {
	// 	slug: 'social-backend',
	// 	name: 'Social Backend',
	// 	description: 'Backend service for social networking features including posts, comments, likes, and user relationships.',
	// 	technologies: ['TypeScript', 'Node.js', 'MongoDB'],
	// 	github: 'https://github.com/mir2x/social_backend',
	// 	featured: false
	// }
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find(p => p.slug === slug);
}
