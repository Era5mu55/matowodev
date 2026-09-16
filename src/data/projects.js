const projects = [
  {
    id: 1,
    title: 'Tulia Safaris',
    category: 'Website',
    description:
      'Boutique safari brand website pairing Tanzania game drives with Zanzibar beach escapes — immersive full-screen storytelling built to convert high-end travelers.',
    tags: ['JavaScript', 'CSS'],
    image: '/images/TuliaSafaris.png',
    imageAlt: 'Tulia Safaris — Boutique safari website built by Matowo Dev',
    liveUrl: 'https://tuliasafaris.com/',
    repoUrl: null,
    caseStudy: {
      problem:
        'Tulia Safaris needed a premium web presence that could compete with established international safari brands — one that communicated a boutique, tailor-made experience rather than a generic tour listing site.',
      solution:
        'Built an immersive, full-screen storytelling site with cinematic imagery, a slideshow-driven hero, and clear paths into safari packages, destinations, and Zanzibar beach add-ons, backed by a fast direct-contact flow for crafting a custom safari.',
      results: [
        'Cinematic full-screen design built to convert high-end travelers',
        'Clear cross-sell path from safari to Zanzibar beach combos',
        'Fast, direct enquiry flow via WhatsApp and contact forms',
        'Mobile-friendly for travelers researching on the go',
      ],
      tech: ['JavaScript', 'CSS'],
      duration: '3 weeks',
    },
  },
  {
    id: 2,
    title: 'Olsero Expedition',
    category: 'Website',
    description:
      'Arusha-based safari and trekking operator site, established 2013, showcasing Serengeti and Ngorongoro safaris, Kilimanjaro treks, and a live trip-planning search widget.',
    tags: ['JavaScript', 'CSS'],
    image: '/images/OlseroExpedition.png',
    imageAlt: 'Olsero Expedition — Safari and trekking operator website built by Matowo Dev',
    liveUrl: 'https://www.olseroexpedition.com/',
    repoUrl: null,
    caseStudy: {
      problem:
        'Olsero Expedition, a local Arusha safari and trekking outfitter, needed a site that proved over a decade of on-the-ground expertise while making it easy for travelers to plan a trip by destination, length, and budget.',
      solution:
        'Built a content-rich site covering safari and trekking packages, destinations, and accommodations, anchored by a hero trip-planner widget for destination, trip length, travelers, and budget, plus direct WhatsApp and contact CTAs.',
      results: [
        'Interactive trip-planner widget surfaced directly in the hero section',
        'Full coverage of safari, trekking, destination, and accommodation offerings',
        'Direct WhatsApp contact integrated for fast inquiry response',
        'Mobile-friendly design for on-the-go trip research',
      ],
      tech: ['JavaScript', 'CSS'],
      duration: '3 weeks',
    },
  },
  {
    id: 3,
    title: 'The Extreme Wilderness',
    category: 'Website',
    description:
      'Safari tour operator website for a locally-owned Arusha outfitter — showcasing Tanzania, Kenya, and Rwanda safaris, Kilimanjaro treks, and Zanzibar beach combos with a 4.9 TripAdvisor rating.',
    tags: ['Next.js', 'JavaScript', 'CSS'],
    image: '/images/theextremewilderness.png',
    imageAlt: 'The Extreme Wilderness — Safari tour operator website built by Matowo Dev',
    liveUrl: 'https://www.theextremewilderness.com/en',
    repoUrl: null,
    caseStudy: {
      problem:
        'The Extreme Wilderness, a locally-owned Arusha safari outfitter, needed a website that could win trust with international travelers over larger foreign agencies — communicating tailor-made safari, Kilimanjaro trekking, and Zanzibar packages while proving local expertise and credibility.',
      solution:
        'Built a fast, multi-language Next.js site covering safari packages across Tanzania, Kenya, and Rwanda, Kilimanjaro summit expeditions, and Zanzibar beach combinations. Integrated TripAdvisor reviews, a blog with destination guides, monthly migration and Kilimanjaro condition trackers, and WhatsApp-based direct contact for fast inquiry response.',
      results: [
        '4.9 TripAdvisor rating with 200+ verified guest reviews showcased',
        'Coverage across 40+ countries of served travelers',
        'Under 2-hour average inquiry response time supported via WhatsApp integration',
        'Multi-language site built for an international travel audience',
      ],
      tech: ['Next.js', 'JavaScript', 'CSS'],
      duration: '4 weeks',
    },
  },
  {
    id: 4,
    title: 'CareerLink Africa',
    category: 'Web App',
    description:
      "Africa's #1 job platform connecting talent with employers across the continent. Features smart matching, employer dashboards, and mobile-optimised job alerts.",
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/images/CareerlinkNew.png',
    imageAlt: 'CareerLink Africa — Job platform web app built by Matowo Dev',
    liveUrl: 'https://careerlinkafrica.com',
    repoUrl: null,
    caseStudy: {
      problem:
        'CareerLink Africa needed a full-stack job platform capable of handling thousands of listings and applications across multiple countries — with employer dashboards, role-based access, and mobile-optimised job alerts — built from scratch.',
      solution:
        'Built a React + Node.js + MongoDB SPA with JWT auth, role-based dashboards for job-seekers, employers, and admins. Added smart search with location and category filters, real-time email alerts, and a mobile-first UI optimised for low-bandwidth East African connections.',
      results: [
        'Launched in under 8 weeks from first commit',
        '500+ job listings handled at launch',
        '78% of traffic is mobile — fully optimised',
        'Zero critical bugs reported in first 3 months post-launch',
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'EmailJS'],
      duration: '8 weeks',
    },
  },
  {
    id: 5,
    title: 'Hireqo',
    category: 'Web App',
    description:
      'Verified hiring platform for US small businesses — background checks, scheduling, and payroll in one place. Cuts time-to-hire by over 60%.',
    tags: ['React', 'Node.js', 'Stripe'],
    image: '/images/HireqoNew.png',
    imageAlt: 'Hireqo — US hiring platform web app built by Matowo Dev',
    liveUrl: 'https://hireqo.com',
    repoUrl: null,
    caseStudy: {
      problem:
        'US small businesses were losing candidates to slow, fragmented hiring tools — background checks, interview scheduling, and payroll lived in three different platforms. Hireqo needed a single, fast product to unify the entire workflow.',
      solution:
        'Built an end-to-end hiring platform with Stripe-backed payments, integrated background check API, calendar scheduling, and a payroll summary module. Designed with a clean dashboard that keeps hiring managers in flow from posting a job to sending an offer.',
      results: [
        'Time-to-hire reduced by 60% for early adopters',
        'Stripe payments integrated with zero charge failures at launch',
        'Background check results returned within 24 hours via third-party API',
        'Deployed and live within 10 weeks',
      ],
      tech: ['React', 'Node.js', 'Stripe', 'PostgreSQL', 'REST APIs'],
      duration: '10 weeks',
    },
  },
  {
    id: 6,
    title: 'NyumbaBora',
    category: 'Web App',
    description:
      'Property rental platform across East Africa with M-Pesa and MTN MoMo payments. Landlords list, tenants pay and sign leases — all from their phone.',
    tags: ['React', 'Node.js', 'M-Pesa API'],
    image: '/images/nyumbabora.png',
    imageAlt: 'NyumbaBora — Property rental platform East Africa built by Matowo Dev',
    liveUrl: 'https://nyumbabora.com',
    repoUrl: null,
    caseStudy: {
      problem:
        'East African landlords and tenants rely almost entirely on mobile phones and mobile money. Existing rental platforms ignored M-Pesa and MTN MoMo, forcing cash-based payments and paper leases. NyumbaBora needed a fully mobile-first solution.',
      solution:
        'Built separate landlord and tenant portals with property listings, image uploads, in-app messaging, M-Pesa STK push and MTN MoMo payment integrations, and a digital lease signing flow — all optimised for mobile screens and 3G connections.',
      results: [
        'Real-money M-Pesa and MTN MoMo transactions processing daily',
        'Landlord onboarding time under 10 minutes from sign-up to first listing',
        'Mobile-first: 85% of users access via smartphone',
        'Digital lease flow eliminated 100% of paper contracts for active landlords',
      ],
      tech: ['React', 'Node.js', 'M-Pesa API', 'MTN MoMo API', 'MongoDB'],
      duration: '12 weeks',
    },
  },
  {
    id: 7,
    title: 'Want2Convert',
    category: 'Web App',
    description:
      'Free browser-based file conversion platform with 50+ tools — PDF, image, and developer utilities. Files never leave your browser thanks to WebAssembly-powered local processing.',
    tags: ['Next.js', 'WebAssembly', 'JavaScript'],
    image: '/images/want2convertNew.png',
    imageAlt: 'Want2Convert — Browser-based file conversion platform built by Matowo Dev',
    liveUrl: 'https://want2convert.com',
    repoUrl: null,
    caseStudy: {
      problem:
        'Users needed a fast, privacy-first tool for everyday file conversions — PDFs, images, and developer utilities — without uploading sensitive files to a third-party server or creating an account.',
      solution:
        'Built a Next.js web app with 50+ tools powered by WebAssembly, keeping all processing entirely in the browser. Covers PDF merging, splitting, compression, format conversions (PDF ↔ Word/Excel/JPG/PNG), image resizing, OCR, and developer tools like JSON formatter, Base64 encoder, and QR code generator.',
      results: [
        '50+ tools shipped across PDF, image, and developer categories',
        'Zero file uploads — 100% client-side processing via WebAssembly',
        'No account required — zero friction for new users',
        'Covers US and international users with no data privacy concerns',
      ],
      tech: ['Next.js', 'WebAssembly', 'JavaScript', 'CSS'],
      duration: '6 weeks',
    },
  },
  {
    id: 8,
    title: 'TaxAndLoans',
    category: 'Web App',
    description:
      'Free financial calculator platform for US & Canadian users — mortgage, income tax, and auto loan estimates. All calculations run in the browser with no data sent to any server.',
    tags: ['Next.js', 'JavaScript', 'CSS'],
    image: '/images/TaxAndLoansNew.png',
    imageAlt: 'TaxAndLoans — Financial calculator platform built by Matowo Dev',
    liveUrl: 'https://taxandloans.com',
    repoUrl: null,
    caseStudy: {
      problem:
        'Homebuyers, employees, and loan applicants needed accurate, no-signup financial calculators that use real IRS and CRA formulas — without trusting a third-party server with sensitive financial data.',
      solution:
        'Built a Next.js calculator platform covering mortgage payments (PITI breakdown), federal/state income tax and FICA withholding, and auto loan estimates with sales tax. All math runs client-side using the same formulas lenders and tax agencies use, with full workings shown to the user.',
      results: [
        'Covers both US and Canadian tax and loan scenarios',
        'Zero server-side data transmission — full privacy by design',
        'Formulas sourced from IRS and CRA official publications',
        'No account required — instant results for any user',
      ],
      tech: ['Next.js', 'JavaScript', 'CSS'],
      duration: '4 weeks',
    },
  },
  {
    id: 9,
    title: 'Event Planners Tanzania',
    category: 'Website',
    description:
      'Corporate website for a Dar es Salaam event production company serving banks, embassies, and telecoms across East Africa — showcasing 13 services from stage design to multilingual interpretation.',
    tags: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    image: '/images/EventPlannersTanzaniaNew.png',
    imageAlt: 'Event Planners Tanzania — Corporate event production website built by Matowo Dev',
    liveUrl: 'https://www.eventplannerstanzania.co.tz',
    repoUrl: null,
    caseStudy: {
      problem:
        'Event Planners Tanzania needed a polished web presence that could win trust with corporate clients like banks, embassies, and telecoms — communicating the full breadth of their services and past client roster in a way that matched the scale of the events they produce.',
      solution:
        'Built a fast, content-rich Next.js site styled with Tailwind CSS, covering all 13 service lines, a client showcase, and a clear quotation contact flow. Deployed on Vercel for fast global delivery across East Africa and abroad.',
      results: [
        '13 service categories presented with dedicated detail',
        'Trusted client roster (Azania Bank, NMB, CRDB, US Embassy, UNDP, Vodacom) showcased',
        'Fast, server-rendered pages via Next.js on Vercel',
        'Mobile-friendly for clients researching on the go',
      ],
      tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
      duration: '3 weeks',
    },
  },
  {
    id: 10,
    title: 'Zeember',
    category: 'Web App',
    description:
      'Privacy-first insurance estimation platform with 50+ calculators across auto, life, home, renters, and health — all data sourced from the NAIC, all calculations run locally in the browser.',
    tags: ['Next.js', 'JavaScript', 'CSS'],
    image: '/images/ZeemberNew.png',
    imageAlt: 'Zeember — Insurance estimation platform built by Matowo Dev',
    liveUrl: 'https://zeember.com',
    repoUrl: null,
    caseStudy: {
      problem:
        'Consumers wanting to understand insurance costs faced a frustrating choice: share personal data with lead-gen aggregators or get nothing useful at all. There was no transparent, privacy-first tool that gave real cost breakdowns without demanding a phone number or email.',
      solution:
        'Built a Next.js platform with 50+ insurance calculators covering auto, life, home, renters, and health policies. All estimates run client-side using formulas derived from NAIC data. Added insurance guides and life-event-triggered recommendations so users can educate themselves alongside the numbers.',
      results: [
        '50+ calculators across 5 insurance categories shipped at launch',
        'Zero personal data collected — all processing stays in the browser',
        'NAIC-sourced formulas give estimates consumers can trust',
        'No account required — instant results for any visitor',
      ],
      tech: ['Next.js', 'JavaScript', 'CSS'],
      duration: '5 weeks',
    },
  },
  {
    id: 11,
    title: 'Hope Rising Congo',
    category: 'Website',
    description:
      'Premium NGO marketing site for a foundation working across the Democratic Republic of Congo — with a full admin CMS for stories, programs, and comment moderation, plus AI-generated image alt-text.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/HopeRisingCongoNew.png',
    imageAlt: 'Hope Rising Congo Foundation — NGO website built by Matowo Dev',
    liveUrl: 'https://hoperisingcongo.org',
    repoUrl: null,
    caseStudy: {
      problem:
        'Hope Rising Congo Foundation needed a credible, donor-facing web presence that could tell its story across education, healthcare, and economic-opportunity programs in the DRC — plus a way for the client to publish new stories and programs without needing a developer for every update.',
      solution:
        'Built a Next.js site on Cloudflare Workers with a password-protected admin dashboard backed by Cloudflare D1, letting the client manage stories, programs, and comment moderation directly. Added R2-backed image uploads with Workers AI auto-generating alt-text for accessibility, plus a governance-page newsletter signup.',
      results: [
        'Fully client-editable CMS — stories and programs publish without a redeploy',
        'AI-generated alt-text on every uploaded image for accessibility',
        'Custom domain live on Cloudflare with automatic GitHub Actions deploys',
        'Site reactions and comment moderation built directly into the admin panel',
      ],
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudflare D1', 'Cloudflare R2', 'Workers AI'],
      duration: '5 weeks',
    },
  },
  {
    id: 12,
    title: 'Olouwaru Safari',
    category: 'Website',
    description:
      'Multilingual Tanzania safari and trekking brand site covering wildlife safaris, mountain trekking, and beach stays — built for an international audience researching their trip in their own language.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/OlouwaruSafariNew.png',
    imageAlt: 'Olouwaru Safari — Tanzania safari and trekking website built by Matowo Dev',
    liveUrl: 'https://olouwarusafari.com',
    repoUrl: null,
    caseStudy: {
      problem:
        'Olouwaru Safari needed a site that could win trust with international travelers researching Tanzania safaris, Kilimanjaro-region trekking, and beach add-ons in their own language, rather than a single English-only brochure site.',
      solution:
        'Built a Next.js site with locale-based routing covering destinations, tours, trekking, and stays, backed by a direct WhatsApp and enquiry flow. Designed for ongoing locale expansion so new languages can be added without restructuring content.',
      results: [
        'Full destination, tour, trekking, and stays coverage in one site',
        'Locale-based routing built to expand into new languages over time',
        'Direct WhatsApp contact integrated for fast inquiry response',
        'Fast, modern Next.js build ready for international traffic',
      ],
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      duration: '4 weeks',
    },
  },
  {
    id: 13,
    title: 'Skyrose Premium Cleaning',
    category: 'Website',
    description:
      'Executive-standard commercial and hospitality cleaning company site for Dar es Salaam — covering office contracts, embassy/NGO accounts, and hotel turnover services. Launching soon.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/SkyroseCleaningNew.png',
    imageAlt: 'Skyrose Premium Cleaning — commercial cleaning company website built by Matowo Dev',
    liveUrl: 'https://skyrosepremiumcleaning.co.tz',
    repoUrl: null,
    caseStudy: {
      problem:
        'Skyrose Premium Cleaning needed a site that reads as executive-grade rather than a generic local cleaning listing — one that could win recurring commercial and embassy/NGO contracts, not just one-off residential bookings.',
      solution:
        'Built a Next.js site structured around commercial and hospitality service lines, with a district-coverage breakdown for Dar es Salaam and a clear request-a-quote flow. Styled with a dark, premium palette to match the "executive-standard" positioning.',
      results: [
        'Separate commercial and hospitality service tracks presented clearly',
        'District coverage (Masaki, Oysterbay, Msasani, Upanga, Posta) shown upfront',
        'Structured, checklist-driven service breakdown builds B2B trust',
        'Ready for launch on the client\'s own .co.tz domain',
      ],
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      duration: '3 weeks',
    },
  },
  {
    id: 14,
    title: 'DamuLink',
    category: 'Web App',
    description:
      "National blood-donor and hospital blood-stock platform for Tanzania — real-time donor registration, emergency blood search, and facility stock management across all NBTS zones plus Zanzibar.",
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    image: '/images/DamuLinkApp.png',
    imageAlt: 'DamuLink — national blood donor and hospital stock platform built by Matowo Dev',
    liveUrl: 'https://app.damulinktz.org',
    repoUrl: null,
    caseStudy: {
      problem:
        "Tanzania's blood donors, hospitals, and patients had no shared real-time system — blood-stock visibility and donor matching ran on phone calls and paper registers, a dangerous gap in emergencies like postpartum hemorrhage and trauma where minutes to secure screened blood determine survival.",
      solution:
        "Built a Next.js and Supabase platform around five core flows: donor self-registration with NIDA ID and eligibility checks, a donor dashboard for donation history and alerts, a public no-login blood search with geolocation and zone-aware facility matching, a facility dashboard for live per-blood-group stock, inter-facility transfers, donation verification and emergency broadcast composing, and a public national statistics page. Every hospital and donor is mapped into one of Tanzania's 7 mainland NBTS zones or Zanzibar so a unit can be traced from donor to patient across zone boundaries.",
      results: [
        'Live donor registration and hospital stock tracking running across all 8 NBTS zones (mainland + Zanzibar)',
        'Public, no-login blood search with GPS-aware results built for genuine emergencies',
        'Facility dashboard unifies stock, transfers, verification, and emergency broadcasts in one workflow',
        'Public statistics page structurally guarantees aggregate-only output — it cannot render individually identifiable donor or patient data',
      ],
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Cloudflare Workers'],
      duration: '2 weeks',
    },
  },
  {
    id: 15,
    title: 'DamuLink Foundation',
    category: 'Website',
    description:
      "Institutional marketing and press site for the national initiative behind Tanzania's blood-donor platform — covering mission, NBTS zone coverage, hospital and funder partnerships, and a press newsroom.",
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/images/DamuLinkFoundation.png',
    imageAlt: "DamuLink Foundation — institutional site for Tanzania's national blood initiative built by Matowo Dev",
    liveUrl: 'https://damulinktz.org',
    repoUrl: null,
    caseStudy: {
      problem:
        'DamuLink needed an institutional face separate from its donor app — one that could win trust with hospitals, funders, and journalists by explaining the mission, governance, and national NBTS zone coverage behind the platform, and give press a real newsroom instead of a single pitch page.',
      solution:
        'Built a multi-page React and Tailwind CSS site with real path-based routing instead of hash fragments, so every page is independently indexable, covering mission and governance, a breakdown of the digital blood logistics grid, a live map of all 8 NBTS zones and partner facilities, dedicated partnership tracks for hospitals and funders with an inline inquiry form wired to Supabase, and a press newsroom with a fast-facts sheet and downloadable media kit. Deployed on Cloudflare Workers with per-route SEO metadata and canonical tags.',
      results: [
        'Real per-route URLs with correct canonical and OG tags — fixed a bug where every subpage told Google the homepage was canonical',
        'Live partnership inquiry form submits directly to Supabase with a reference ID for follow-up',
        'Full NBTS zone and 24-facility coverage map presented for hospitals and funders',
        'Press newsroom with an institutional fast-facts sheet and downloadable media kit',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Cloudflare Workers'],
      duration: '1 week',
    },
  },
  {
    id: 16,
    title: 'PS Tanzania Ltd',
    category: 'Web App',
    description:
      "Real estate marketplace and diaspora services hub for a Dar es Salaam developer — verified property listings, a reserve/checkout flow, and a full diaspora client portal for remote property management, acquisition, and investment.",
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    image: '/images/PSTanzaniaLtd.png',
    imageAlt: 'PS Tanzania Ltd — real estate marketplace and diaspora services hub built by Matowo Dev',
    liveUrl: 'https://psrealestate.co.tz',
    repoUrl: null,
    caseStudy: {
      problem:
        "Peters Sinkamba Tanzania Ltd needed one site to serve two audiences: buyers browsing verified titled properties in Kigamboni, and diaspora clients abroad who had to trust the company to manage, acquire, or build on property they couldn't personally inspect — with no way to track progress once they'd handed over money.",
      solution:
        "Built a bilingual (English/Swahili) Next.js marketplace with property listings, detail pages, a paid viewing-appointment flow, and a reserve/checkout flow, alongside a four-service Diaspora Hub covering property management, acquisition, build supervision, and personal investment. Layered a real authenticated client portal on top of the diaspora side — Supabase-backed case tracking with milestones, documents, maintenance approvals, messaging, and automatically generated monthly financial statements — so every capability marketed on the public pages is backed by a working feature, not just a form.",
      results: [
        'Every Diaspora Hub service has a matching real feature in an authenticated client portal, not just a marketing page',
        'Monthly financial statements for Property Management and Investment clients generate automatically via a scheduled Cloudflare Worker job',
        "Maintenance spend on a client's property requires their in-portal approval before any work is authorized",
        'Bilingual EN/SW throughout, mobile-first for WhatsApp-driven diaspora traffic',
      ],
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Cloudflare Workers'],
      duration: '1 week',
    },
  },
]

export default projects
