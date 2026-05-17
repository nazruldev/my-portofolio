import type { PortfolioTranslations } from "@/data/portfolio.types"

export const en: PortfolioTranslations = {
  seo: {
    title: "Nasrul | Full Stack Web Developer Portfolio — nazrul.dev",
    description:
      "Official portfolio of Nasrul (nazrul.dev), Full Stack Web Developer from Indonesia. React, Next.js, Laravel, React Native, Expo, and Python — modern web applications from UI to production deployment.",
    keywords:
      "Nasrul developer, nazrul.dev, full stack developer Indonesia, React developer, Next.js developer, Laravel developer, React Native developer, Expo developer, Python developer, web developer portfolio, Full Stack Web Developer",
    ogTitle: "Nasrul — Full Stack Web Developer | nazrul.dev",
    ogDescription:
      "Projects and experience in React, Next.js, Laravel, mobile apps, and production-ready web solutions. Based in Indonesia.",
  },
  site: {
    title: "Full Stack Web Developer",
    tagline:
      "Building modern websites and web apps — from interactive frontends to backends, databases, and production-ready deployment.",
    statLabels: {
      yearsExperience: "Years Experience",
      successfulProjects: "Successful Projects",
      expertDomains: "Expert Domains",
    },
  },
  ui: {
    skipToContent: "Skip to main content",
    viewProjects: "View My Projects",
    resume: "Resume",
    getInTouch: "Get In Touch",
    sendEmail: "Send Email",
    close: "Close",
    visitSite: "Visit site",
    reachOut: "Reach out anytime at:",
    contactIntro:
      "Have a project in mind or want to collaborate? I'd love to hear from you.",
    footerContact: "Contact",
    footerConnect: "Connect",
    footerEmail: "Email",
    footerPortfolio: "Portfolio",
    rightsReserved: "All rights reserved.",
    toggleTheme: "Toggle theme",
    openMenu: "Open menu",
    toggleLanguage: "Switch language",
    certificateBadgeFallback: "Badge",
    viewCertificate: "View certificate",
    viewCertificateHint: "Click to enlarge",
  },
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
  ],
  aboutIntro: { sectionLabel: "01. About", title: "About Me" },
  aboutParagraphs: [
    "I've been developing websites since 2016. As a Full Stack Web Developer, I build modern web applications from interactive frontends to backends, databases, and production deployment.",
    "Over the years I've worked with JavaScript ecosystems (React, Next.js, Vue, Node), mobile apps with React Native and Expo, Python for scripting and APIs (FastAPI, Django, Flask), PHP frameworks (Laravel, Livewire, CodeIgniter), and tools such as Docker, MongoDB, PostgreSQL, and MikroTik networking when projects require it.",
    "I'm comfortable across the stack: UI implementation, REST APIs, admin dashboards, integrations, and maintaining systems that teams rely on daily. I care about clean code, clear communication, and shipping work that holds up in production.",
    "If you're looking for someone who combines hands-on delivery with a broad toolkit, I'd be glad to connect.",
  ],
  skillsIntro: {
    sectionLabel: "02. Skills",
    title: "Technical Skills",
    description:
      "Since 2016 I've built a broad skill set across web development, mobile, and backend — adapting as the stack evolves.",
  },
  skillGroupTitles: {
    js: "Javascript & Frameworks",
    python: "Python",
    php: "PHP & Frameworks",
    css: "CSS & Frameworks",
    db: "Databases",
    server: "Web Server & Other",
  },
  projectsIntro: { sectionLabel: "03. Projects", title: "Featured Projects" },
  projectFilters: [
    { id: "all", label: "All" },
    { id: "mobile", label: "Mobile" },
    { id: "nextjs", label: "Next.js" },
    { id: "laravel", label: "Laravel" },
    { id: "livewire", label: "Livewire" },
  ],
  projects: {
    "human-compass-constantine": {
      title: "Human Compass — Constantine",
      description:
        "Mobile compass and navigation app for Constantine operations — built with React Native and Expo to help users find direction and location in the field.",
      highlight: "React Native + Expo — field compass & navigation",
    },
    "oneclick-garudafood": {
      title: "OneClick Garudafood",
      description:
        "OneClick mobile app for Garudafood — React Native and Expo platform for daily business and operational needs.",
      highlight: "React Native + Expo — Garudafood mobile platform",
    },
    "vdr-nusantara": {
      title: "VDR Nusantara — Virtual Data Room",
      description:
        "Next.js Virtual Data Room (VDR) — secure business document sharing for transactions, due diligence, and structured access control.",
      highlight: "Next.js — secure virtual data room (Nusantara)",
    },
    jibi: {
      title: "JIBI (Jaringan Bisnis Indonesia)",
      description:
        "Enterprise news portal raw content repository used by the corporate media team.",
      highlight: "Private enterprise news content repository",
    },
    "djp-ews": {
      title: "DJP - EWS DART",
      description:
        "Monitoring application for tax document workflows at the Directorate General of Taxes (DJP).",
      highlight: "Tax document workflow monitoring for DJP",
    },
    djki: {
      title: "DJKI (Image Brand Matching AI)",
      description:
        "POC for the Directorate General of Intellectual Property — brand similarity search powered by AI.",
      highlight: "Brand similarity POC for DJKI",
    },
    sportirena: {
      title: "Sportirena.com",
      description:
        "Discover and book sports venues based on user criteria.",
      highlight: "Sports venue discovery and booking",
      linkLabel: "Visit site",
    },
    udbjm: {
      title: "PT. UDBJM Manado",
      description:
        "Monitoring, transactions, and natural resource processing application.",
      highlight: "Natural resource processing & transactions",
    },
    sisfon: {
      title: "SISFON KUA Pohuwato",
      description:
        "Integrated documentation management across multiple villages.",
      highlight: "Integrated village documentation management",
    },
    agyman: {
      title: "AGYMAN - Gym Management System",
      description: "Simple application for gym operational management.",
      highlight: "Gym operations management system",
      linkLabel: "View product",
    },
    lavawail: {
      title: "Lavawail Downloader",
      description: "Web app to download video files with an easy-to-use UI.",
      highlight: "Simple web video downloader UI",
    },
  },
  certificatesIntro: { sectionLabel: "04. Certificates", title: "Certifications" },
  certificates: {
    "djp-nestjs-guest-speaker": {
      issuer: "Directorate General of Taxes (DJP) · PSIAP Team",
      description:
        "Guest speaker at the Examination Worksheet Workspace workshop on examination systems based on NestJS microservice architecture, held in Jakarta, 8–24 November 2024.",
    },
    "ibm-rpa-basic": {
      issuer: "Issued by IBM",
      description:
        "Badge earners can install WDG Automation with its programs and features, troubleshoot issues, and perform basic WDG Studio tasks including commands, scripts, variables, files, routines, assets, PDFs, data tables, and databases.",
    },
    "ibm-rpa-basic-ii": {
      issuer: "Issued by IBM",
      description:
        "Badge earners can install WDG Automation with its programs and features, troubleshoot issues, and perform basic WDG Studio tasks including commands, scripts, variables, files, routines, assets, PDFs, data tables, and databases.",
    },
  },
  experienceIntro: {
    sectionLabel: "05. Experience",
    title: "Project Experience",
  },
  experiences: [
    {
      title: "Jaringan Informasi Bisnis Indonesia (JIBI)",
      date: "2021 – 2022",
      place:
        "Frontend Developer · PT Jurnalindo Aksara Grafika (Bisnis Indonesia)",
      bullets: [
        "Designed and built the GUI for the enterprise news portal content repository application.",
        "Stack: Next.js, Node.js, Tailwind CSS.",
      ],
    },
    {
      title: "Facility Booking Management (Sportirena)",
      date: "2022",
      place: "Frontend Developer · PT Technova Optima Prima",
      bullets: [
        "Designed and built the GUI for sports venue search and booking.",
        "Stack: Next.js, Node.js, Tailwind CSS.",
      ],
    },
    {
      title: "Remote Development BJMAPPS",
      date: "2017 – 2019",
      place: "Full Stack Developer · UD. Bintang Jaya Mandiri Groups, Manado",
      bullets: [
        "Built GUI and backend plus networking for parallel machine communication.",
        "Stack: Laravel, Alpine.js, Livewire, Python, MikroTik API, Node.js, Tailwind CSS, Serial Port.",
      ],
    },
    {
      title: "Deputy Head IT Pustikom",
      date: "2019",
      place: "Universitas Pohuwato",
      bullets: [
        "Designed management and archiving apps: main website, PMB token, archive system, and centralized data system (planned).",
        "Stack: Laravel, Tailwind CSS, Python, React, Angular, Ionic, Node.js.",
      ],
    },
    {
      title: "Contributor OPENSID",
      date: "2017",
      place: "Open Source · OPENSID",
      bullets: [
        "Designed the OPENSID system installer and application themes.",
        "Stack: Laravel, Bootstrap.",
      ],
    },
    {
      title: "Freelancing",
      date: "2014 – 2021",
      place: "Freelancer.id, Projects.co.id, and other platforms",
      bullets: [
        "Delivered web development and IT projects for clients across freelancing platforms.",
      ],
    },
  ],
  educationIntro: { sectionLabel: "06. Education", title: "Education" },
  education: [
    {
      degree: "Bachelor of Computer Science (Informatics)",
      school: "Universitas Ichsan Gorontalo",
      schoolUrl: "https://uig.ac.id/",
      period: "2022",
    },
  ],
}
