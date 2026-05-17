import type { PortfolioTranslations } from "@/data/portfolio.types"

export const id: PortfolioTranslations = {
  seo: {
    title: "Nasrul | Portofolio Full Stack Web Developer — nazrul.dev",
    description:
      "Portofolio resmi Nasrul (nazrul.dev), Full Stack Web Developer dari Indonesia. React, Next.js, Laravel, React Native, Expo, dan Python — aplikasi web modern dari antarmuka hingga deployment produksi.",
    keywords:
      "Nasrul developer, nazrul.dev, full stack developer Indonesia, developer React, developer Next.js, developer Laravel, React Native Indonesia, developer web, portofolio developer, Full Stack Web Developer",
    ogTitle: "Nasrul — Full Stack Web Developer | nazrul.dev",
    ogDescription:
      "Proyek dan pengalaman di React, Next.js, Laravel, aplikasi mobile, dan solusi web siap produksi. Berbasis di Indonesia.",
  },
  site: {
    heroGreeting: "Selamat datang di nazrul.dev",
    title: "Full Stack Web Developer",
    tagline:
      "Membangun website dan aplikasi web modern — dari frontend interaktif hingga backend, database, dan deployment yang siap produksi.",
    typewriterWords: [
      "Pengembangan Frontend",
      "React Native & Expo",
      "Python & REST API",
      "Laravel & Next.js",
    ],
    statLabels: {
      yearsExperience: "Tahun Pengalaman",
      successfulProjects: "Proyek Sukses",
      expertDomains: "Bidang Keahlian",
    },
  },
  ui: {
    skipToContent: "Lewati ke konten utama",
    viewProjects: "Lihat Proyek Saya",
    learnMore: "Tentang Saya",
    resume: "Unduh CV",
    getInTouch: "Hubungi Saya",
    sendEmail: "Kirim Email",
    close: "Tutup",
    visitSite: "Kunjungi situs",
    viewProduct: "Lihat produk",
    reachOut: "Hubungi saya kapan saja di:",
    contactIntro:
      "Ada proyek atau ingin berkolaborasi? Saya senang mendengar dari Anda.",
    footerAbout: "Tentang",
    footerContact: "Kontak",
    footerConnect: "Terhubung",
    footerEmail: "Email",
    footerPortfolio: "Portfolio",
    rightsReserved: "Hak cipta dilindungi.",
    toggleTheme: "Ganti tema",
    openMenu: "Buka menu",
    toggleLanguage: "Ganti bahasa",
    certificateBadgeFallback: "Badge",
  },
  navLinks: [
    { href: "#home", label: "Beranda" },
    { href: "#about", label: "Tentang" },
    { href: "#skills", label: "Keahlian" },
    { href: "#projects", label: "Proyek" },
    { href: "#certificates", label: "Sertifikat" },
    { href: "#experience", label: "Pengalaman" },
    { href: "#education", label: "Pendidikan" },
  ],
  aboutIntro: { sectionLabel: "01. Tentang", title: "Tentang Saya" },
  aboutParagraphs: [
    "Saya mengembangkan website sejak 2016. Sebagai Full Stack Web Developer, saya membangun aplikasi web modern dari frontend interaktif, backend, database, hingga deployment produksi.",
    "Selama bertahun-tahun saya bekerja dengan ekosistem JavaScript (React, Next.js, Vue, Node), aplikasi mobile React Native dan Expo, Python untuk skrip dan API (FastAPI, Django, Flask), framework PHP (Laravel, Livewire, CodeIgniter), serta Docker, MongoDB, PostgreSQL, dan jaringan MikroTik bila proyek membutuhkannya.",
    "Saya nyaman di seluruh lapisan: implementasi UI, REST API, dashboard admin, integrasi, dan memelihara sistem yang dipakai tim setiap hari. Saya peduli pada kode yang rapi, komunikasi jelas, dan hasil yang bertahan di produksi.",
    "Jika Anda mencari seseorang yang menggabungkan eksekusi langsung dengan toolkit luas, saya siap terhubung.",
  ],
  skillsIntro: {
    sectionLabel: "02. Keahlian",
    title: "Keahlian Teknis",
    subtitle: "Daftar keahlian saya",
    description:
      "Sejak 2016 saya membangun skill set yang luas di web development, mobile, dan backend — beradaptasi seiring perkembangan teknologi.",
  },
  skillGroupTitles: {
    js: "Javascript & Framework",
    python: "Python",
    php: "PHP & Framework",
    css: "CSS & Framework",
    db: "Database",
    server: "Web Server & Lainnya",
  },
  projectsIntro: { sectionLabel: "03. Proyek", title: "Proyek Unggulan" },
  projectFilters: [
    { id: "all", label: "Semua" },
    { id: "mobile", label: "Mobile" },
    { id: "nextjs", label: "Next.js" },
    { id: "laravel", label: "Laravel" },
    { id: "livewire", label: "Livewire" },
  ],
  projects: {
    "human-compass-constantine": {
      title: "Human Compass — Constantine",
      description:
        "Aplikasi mobile compass dan navigasi untuk operasional Constantine — dibangun dengan React Native dan Expo, membantu pengguna menentukan arah dan lokasi di lapangan.",
      highlight: "React Native + Expo — compass & navigasi lapangan",
    },
    "oneclick-garudafood": {
      title: "OneClick Garudafood",
      description:
        "Aplikasi mobile OneClick untuk Garudafood — platform React Native dan Expo untuk operasional dan kebutuhan bisnis harian.",
      highlight: "React Native + Expo — platform mobile Garudafood",
    },
    "vdr-nusantara": {
      title: "VDR Nusantara — Virtual Data Room",
      description:
        "Platform web Virtual Data Room (VDR) berbasis Next.js — berbagi dokumen bisnis secara aman untuk transaksi, due diligence, dan kontrol akses terstruktur.",
      highlight: "Next.js — virtual data room aman (Nusantara)",
    },
    jibi: {
      title: "JIBI (Jaringan Bisnis Indonesia)",
      description:
        "Repositori konten mentah portal berita perusahaan untuk tim media korporat.",
      highlight: "Repositori konten berita enterprise",
    },
    "djp-ews": {
      title: "DJP - EWS DART",
      description:
        "Aplikasi pemantauan alur kerja dokumen pajak di Direktorat Jenderal Pajak.",
      highlight: "Pemantauan dokumen pajak untuk DJP",
    },
    djki: {
      title: "DJKI (Image Brand Matching AI)",
      description:
        "POC Direktorat Jenderal Kekayaan Intelektual — pencarian kemiripan merek dengan AI.",
      highlight: "POC kemiripan merek untuk DJKI",
    },
    sportirena: {
      title: "Sportirena.com",
      description:
        "Mencari dan memesan venue olahraga berdasarkan kriteria pengguna.",
      highlight: "Pencarian & pemesanan venue olahraga",
      linkLabel: "Kunjungi situs",
    },
    udbjm: {
      title: "PT. UDBJM Manado",
      description:
        "Aplikasi monitoring, transaksi, dan pengolahan hasil olahan alam.",
      highlight: "Pengolahan sumber daya alam & transaksi",
    },
    sisfon: {
      title: "SISFON KUA Pohuwato",
      description:
        "Manajemen dokumentasi terintegrasi dengan berbagai desa.",
      highlight: "Manajemen dokumentasi desa terintegrasi",
    },
    agyman: {
      title: "AGYMAN - Sistem Manajemen GYM",
      description: "Aplikasi sederhana untuk manajemen operasional gym.",
      highlight: "Sistem manajemen operasional gym",
      linkLabel: "Lihat produk",
    },
    lavawail: {
      title: "Lavawail Downloader",
      description:
        "Aplikasi web untuk mengunduh file video dengan antarmuka yang mudah digunakan.",
      highlight: "UI pengunduh video sederhana",
    },
  },
  certificatesIntro: { sectionLabel: "04. Sertifikat", title: "Sertifikasi" },
  certificates: {
    "ibm-rpa-basic": {
      issuer: "Diterbitkan oleh IBM",
      description:
        "Pemegang badge dapat menginstal WDG Automation beserta program dan fiturnya, mengatasi masalah yang muncul, serta melakukan tugas dasar di WDG Studio termasuk perintah, skrip, variabel, file, rutinitas, aset, PDF, tabel data, dan database.",
    },
    "ibm-rpa-basic-ii": {
      issuer: "Diterbitkan oleh IBM",
      description:
        "Pemegang badge dapat menginstal WDG Automation beserta program dan fiturnya, mengatasi masalah yang muncul, serta melakukan tugas dasar di WDG Studio termasuk perintah, skrip, variabel, file, rutinitas, aset, PDF, tabel data, dan database.",
    },
  },
  experienceIntro: {
    sectionLabel: "05. Pengalaman",
    title: "Pengalaman Proyek",
    description:
      "Pengalaman proyek sebagai Frontend dan Full Stack Developer untuk klien korporat, kampus, dan platform freelancing sejak 2014.",
  },
  experiences: [
    {
      title: "Jaringan Informasi Bisnis Indonesia (JIBI)",
      date: "2021 – 2022",
      place:
        "Frontend Developer · PT Jurnalindo Aksara Grafika (Bisnis Indonesia)",
      bullets: [
        "Terlibat dalam perancangan dan pembangunan antarmuka pengguna (GUI) untuk aplikasi repositori konten portal berita perusahaan.",
        "Stack: Next.js, Node.js, Tailwind CSS.",
      ],
    },
    {
      title: "Facility Booking Management (Sportirena)",
      date: "2022",
      place: "Frontend Developer · PT Technova Optima Prima",
      bullets: [
        "Terlibat dalam perancangan dan pembangunan GUI untuk aplikasi pencarian dan pemesanan venue olahraga.",
        "Stack: Next.js, Node.js, Tailwind CSS.",
      ],
    },
    {
      title: "Remote Development BJMAPPS",
      date: "2017 – 2019",
      place:
        "Full Stack Developer · UD. Bintang Jaya Mandiri Groups, Manado",
      bullets: [
        "Merancang dan membangun GUI serta backend, termasuk sistem jaringan untuk komunikasi paralel antar mesin.",
        "Stack: Laravel, Alpine.js, Livewire, Python, MikroTik API, Node.js, Tailwind CSS, Serial Port.",
      ],
    },
    {
      title: "Deputy Head IT Pustikom",
      date: "2019",
      place: "Universitas Pohuwato",
      bullets: [
        "Merancang berbagai aplikasi kebutuhan manajemen dan arsip: website utama, token PMB, sistem arsip, serta perencanaan sistem data terpusat.",
        "Stack: Laravel, Tailwind CSS, Python, React, Angular, Ionic, Node.js.",
      ],
    },
    {
      title: "Contributor OPENSID",
      date: "2017",
      place: "Open Source · OPENSID",
      bullets: [
        "Merancang system installer OPENSID dan membuat tema untuk aplikasi OPENSID.",
        "Stack: Laravel, Bootstrap.",
      ],
    },
    {
      title: "Freelancing",
      date: "2014 – 2021",
      place: "Freelancer.id, Projects.co.id, dan platform lainnya",
      bullets: [
        "Mengerjakan berbagai proyek web development dan teknologi informasi dari klien di berbagai platform freelancing.",
      ],
    },
  ],
  educationIntro: { sectionLabel: "06. Pendidikan", title: "Pendidikan" },
  education: [
    {
      degree: "S1 Teknik Informatika",
      school: "Universitas Ichsan Gorontalo",
      schoolUrl: "https://uig.ac.id/",
      period: "2022",
    },
  ],
}
