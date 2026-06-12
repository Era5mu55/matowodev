const projects = [
  {
    id: 1,
    title: 'CareerLink Africa',
    category: 'Web App',
    description:
      "Africa's #1 job platform connecting talent with employers across the continent. Features smart matching, employer dashboards, and mobile-optimised job alerts.",
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/images/careerlink.png',
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
]

export default projects
