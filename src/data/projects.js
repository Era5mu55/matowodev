const projects = [
  {
    id: 1,
    title: 'CareerLink Africa',
    category: 'Web App',
    description:
      "Africa's #1 job platform connecting talent with employers across the continent. Features smart matching, employer dashboards, and mobile-optimised job alerts.",
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/images/careerlink.png',
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
    id: 2,
    title: 'Hireqo',
    category: 'Web App',
    description:
      'Verified hiring platform for US small businesses — background checks, scheduling, and payroll in one place. Cuts time-to-hire by over 60%.',
    tags: ['React', 'Node.js', 'Stripe'],
    image: '/images/hireqo.png',
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
    id: 3,
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
    id: 4,
    title: 'Want2Convert',
    category: 'Web App',
    description:
      'Free browser-based file conversion platform with 50+ tools — PDF, image, and developer utilities. Files never leave your browser thanks to WebAssembly-powered local processing.',
    tags: ['Next.js', 'WebAssembly', 'JavaScript'],
    image: '/images/want2convert.png',
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
    id: 5,
    title: 'TaxAndLoans',
    category: 'Web App',
    description:
      'Free financial calculator platform for US & Canadian users — mortgage, income tax, and auto loan estimates. All calculations run in the browser with no data sent to any server.',
    tags: ['Next.js', 'JavaScript', 'CSS'],
    image: '/images/taxandloans.png',
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
    id: 6,
    title: 'Event Planners Tanzania',
    category: 'Website',
    description:
      'Corporate website for a Dar es Salaam event production company serving banks, embassies, and telecoms across East Africa — showcasing 13 services from stage design to multilingual interpretation.',
    tags: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    image: '/images/eventplannerstanzania.png',
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
]

export default projects
