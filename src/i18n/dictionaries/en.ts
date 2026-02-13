import type { Dictionary } from "../dictionary-type";

const en: Dictionary = {
  metadata: {
    title: "One Media - Learning Platform",
    description: "Learning platform for online income",
  },
  header: {
    courses: "Courses",
    aboutUs: "About Us",
    wantToEarn: "Start Earning",
    learningFromPractitioners: "Learn from Experts",
    selectTraining: "Find a Course",
  },
  hero: {
    forBeginners: "For Beginners",
    onlineIncome: "Online Income",
    title: "Learning platform for online income",
    subtitlePrefix: "Start from zero — income from",
    subtitleAmount: "$1000",
    chooseCourse: "Choose a Course",
    freeConsultation: "Free Consultation",
    features: [
      {
        title: "Teaching arbitrage, P2P and AI professions based on real practice",
        icon: "cometIcon",
      },
      {
        title: "Our own learning system built within the team",
        icon: "GoogleIcon",
      },
      {
        title: "Working with these niches since 2022",
        icon: "globusIcon",
      },
      {
        title: "Real cases, tools and work with the live market",
        icon: "academyIcon",
      },
    ],
    startedFromZero: "started from scratch",
  },
  courses: {
    sectionTitle: "Choose a Course",
    sectionSubtitle: "Niches where people really earn",
    detailsButton: "Learn More",
    cantDecide: "Can\u2019t decide on a course? Don\u2019t stress!",
    takeTest: "Take a Quiz",
    categories: [
      { id: "top", title: "TOP NICHES" },
      { id: "arbitrage", title: "Traffic Arbitrage" },
      { id: "ai-creator", title: "Artificial Intelligence" },
      { id: "p2p-arbitrage", title: "P2P Arbitrage" },
      { id: "it-dev", title: "IT \u2014 Getting Started" },
      { id: "office", title: "Office Software" },
    ],
    items: [
      {
        id: "top",
        title: "Traffic Arbitrage Course",
        description: "Learn to launch ads and earn from traffic without coding. Perfect for starting from zero.",
        tags: ["Nutra", "Facebook", "Google", "iGaming"],
        video: "/video/arbitrage-1.mp4",
      },
      {
        id: "top",
        title: "Universal Arbitrageur Course",
        description: "Flagship course: systematic approach to arbitrage, scaling, and consistent results.",
        tags: ["VIP", "iGaming", "Crupto", "Exchange"],
        video: "/video/universal.mp4",
      },
      {
        id: "top",
        title: "P2P Arbitrage Course",
        description: "Earning from crypto rate differences. No trading, with a focus on security and practice.",
        tags: ["Binance", "USDT", "Crypto", "Exchange"],
        video: "/video/p2p-2.mp4",
      },
      {
        id: "top",
        title: "AI Creator Course",
        description: "Learn to use AI for content, design, and task automation in work and business.",
        tags: ["AI", "IT Niche"],
        video: "/video/ai-creator.mp4",
      },
      {
        id: "arbitrage",
        title: "iGaming Traffic Arbitrage Course",
        description: "Launching and scaling iGaming offer ads on Facebook and other sources. Practice + real cases.",
        tags: ["iGaming", "Facebook"],
        video: "/video/iGambling.mp4",
      },
      {
        id: "arbitrage",
        title: "Nutra Traffic Arbitrage Course",
        description: "Working with Nutra offers: ad launches, creative testing, and scaling profitable bundles.",
        tags: ["Nutra", "Facebook"],
        video: "/video/nutra.mp4",
      },
      {
        id: "arbitrage",
        title: "Telegram Traffic Arbitrage Course",
        description: "Driving traffic through Telegram: channels, ads, and audience monetization.",
        tags: ["Earning"],
        video: "/video/tg-1.mp4",
      },
      {
        id: "ai-creator",
        title: "AI for Business Course",
        description: "How to use AI for automation, marketing, and sales.",
        tags: ["AI", "IT Niche"],
        video: "/video/cola.mp4",
      },
      {
        id: "ai-creator",
        title: "AI Video & Content Course",
        description: "Creating videos for TikTok, Reels, and ads using AI. No filming, actors, or complex editing.",
        tags: ["AI", "IT Niche", "iGaming", "Facebook"],
        video: "/video/content.mp4",
      },
      {
        id: "ai-creator",
        title: "AI Automation Course",
        description: "Optimizing processes and routine tasks through AI. Less manual work \u2014 more results.",
        tags: ["AI", "IT Niche", "iGaming", "Facebook"],
        video: "/video/auto.mp4",
      },
      {
        id: "p2p-arbitrage",
        title: "Build Your First Crypto Portfolio Course",
        description: "Understand crypto from scratch, learn to buy assets and build a portfolio without unnecessary risks.",
        tags: ["Binance", "USDT", "Crypto", "Exchange"],
        video: "/video/p2p.mp4",
      },
      {
        id: "it-dev",
        title: "Building Telegram Bots & AI Bots",
        description: "Learn to build bots for business, sales, and automation. Integrations, auto-funnels, CRM, AI responses.",
        tags: ["AI", "IT Niche"],
        img: "/images/courses/bot.jpg",
      },
      {
        id: "it-dev",
        title: "No-Code / Low-Code Development",
        description: "Building websites, services, and automations without coding.",
        tags: ["AI", "IT Niche"],
        img: "/images/courses/dev-1.jpg",
      },
      {
        id: "office",
        title: "Excel & Google Sheets PRO",
        description: "Formulas, pivot tables, calculation automation, financial models. Working with large datasets.",
        tags: ["Analytics", "Office Skills"],
        img: "/images/courses/exel.jpg",
      },
      {
        id: "office",
        title: "Business Presentations (PowerPoint / Google Slides) + AI",
        description: "How to use AI for automation, marketing, and sales. Presentations for clients, investors, and teams.",
        tags: ["AI", "Office Skills"],
        img: "/images/courses/power-point.jpg",
      },
      {
        id: "office",
        title: "Office Management & Process Organization",
        description: "Planning, task managers, CRM, company internal structure.",
        tags: ["CRM", "Management"],
        img: "/images/courses/office.jpg",
      },
    ],
  },
  explaner: {
    sectionTitle: "How the Learning Works",
    selectTraining: "Find a Course",
    items: [
      {
        titleParts: ["Focus on", "results and income"],
        descriptionParts: [
          "We teach with a clear goal \u2014 to prepare you for real work and your first earnings.",
          "Format: 20% theory, 80% practice on real tasks.",
        ],
        image: "/images/explaner-1.png",
      },
      {
        titleParts: ["Market practitioners", "\u2014 your mentors"],
        descriptionParts: [
          "You are guided by experts who work in the field right now.",
          "They help you understand topics, correct mistakes, and hold live Q&A sessions",
        ],
        image: "/images/explaner-2.png",
      },
      {
        titleParts: ["A platform that has", "everything"],
        descriptionParts: [
          "Video lessons, practice, assignments, and progress \u2014 all in one place.",
          "Learn at your own pace and immediately apply knowledge in practice.",
        ],
        image: "/images/explaner-3.png",
      },
    ],
  },
  studyWays: {
    sectionTitle: "How the Learning Works",
    tabs: [
      {
        id: "couches",
        category: "Experienced Coaches",
        title: "Detailed Feedback",
        descriptionParts: [
          "Each of your assignments is reviewed by a practicing curator with real experience.",
          "You get a clear breakdown: what\u2019s already good, what to improve, and how to do it in practice \u2014 no complicated jargon or fluff",
        ],
        img: "/images/study-1.jpg",
      },
      {
        id: "warranty",
        category: "Job Placement Guarantee",
        title: "Job Placement Guarantee",
        descriptionParts: [
          "We partner with teams and projects in the arbitrage, P2P, and digital market who need trained specialists.",
          "During the course you gain practical skills and work with real tools, and after graduation we help you enter the market: with recommendations, interview prep, and candidate referrals to partners.",
        ],
        video: "/video/study-2.mp4",
      },
      {
        id: "comunity",
        category: "Community",
        title: "Community",
        descriptionParts: [
          "We partner with teams and projects in the arbitrage, P2P, and digital market who need trained specialists.",
          "During the course you gain practical skills and work with real tools, and after graduation we help you enter the market: with recommendations, interview prep, and candidate referrals to partners.",
        ],
        video: "/video/study-3.mp4",
      },
    ],
    cards: [
      {
        title: "Learning with Practice",
        text: "Every module is real tasks and practice, not just dry theory.",
        image: "/images/explaner-2.1.png",
      },
      {
        title: "Unlimited Access",
        text: "access to the course and all updates",
        image: "/images/explaner-2.2.png",
      },
      {
        title: "Focus on Results and Income",
        text: "Learning with a practical approach and focus on results.",
        image: "/images/explaner-2.3.png",
      },
    ],
  },
  team: {
    sectionTitle: "In the Rhythm of Our Team",
    subtitle: "Get inspired by our team\u2019s people and ideas, join our activities",
    videoText: "Learning, practice, and real work \u2014 all in one environment",
    learnMore: "Learn More",
  },
  reviews: {
    label: "Reviews",
    title: "Our students\u2019 results speak louder than we do",
  },
  form: {
    title: "Start your journey today!",
    description: "Sign up for a consultation and take the first step towards a new profession. Our manager will help you choose a learning direction.",
    namePlaceholder: "Name",
    phonePlaceholder: "Phone Number",
    telegramPlaceholder: "Telegram Username",
    agreeWith: "You agree to the",
    offer: "Offer Agreement",
    and: "and",
    privacyPolicy: "Privacy Policy",
    submit: "Submit",
  },
  warranty: {
    title: "How does the job placement guarantee work?",
    paragraph1: "We partner with teams and projects in the arbitrage, P2P, and digital market who need trained specialists.",
    paragraph2: "During the course you gain practical skills and work with real tools, and after graduation we help you enter the market: with recommendations, interview prep, and candidate referrals to partners.",
  },
  slogan: {
    line1: "How to earn $300/day",
    line2: "Without a team or office",
    button: "I want to learn",
  },
  faq: [
    {
      title: "How does learning on the platform work?",
      text: "Learning takes place online in a convenient format. Access to video lessons, practical assignments, and materials opens after registration. You can study at your own pace with platform team support.",
    },
    {
      title: "Can I pay for courses in installments?",
      text: "Yes, installment payments are available. Terms are discussed after submitting an application.",
    },
    {
      title: "Can I study without a technical background?",
      text: "Yes. Courses are designed for learning from scratch and don\u2019t require prior technical or IT experience.",
    },
    {
      title: "Will I receive a certificate or diploma?",
      text: "Yes, upon completing the course, a certificate of completion is issued.",
    },
    {
      title: "How do I get a free consultation?",
      text: "You need to submit an application on the website. A manager will contact you for a consultation.",
    },
  ],
  formModal: {
    contactUs: "CONTACT US",
    needMoreInfo: "Need more information?",
    benefits: [
      "Get answers to all your questions",
      "Find out which learning format suits you",
      "Learn about our exclusive offers",
    ],
    nameLabel: "Name",
    namePlaceholder: "John",
    phoneLabel: "Phone",
    telegramLabel: "Telegram",
    telegramPlaceholder: "@os_platform",
    submitButton: "Get a Consultation",
    disclaimerPrefix: "By clicking \u201CGet a Consultation\u201D, you agree to our",
    termsOfUse: "Terms of Use",
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    and: "and",
  },
  phoneInput: {
    searchCountry: "Search country...",
    nothingFound: "Nothing found",
  },
  footer: {
    coursesTitle: "Courses",
    payCourse: "Pay for Course",
    contactsTitle: "Contacts",
    instagramText: "We have a cool Instagram where we share IT news. Join us!",
    navigation: [
      {
        title: "Traffic Arbitrage",
        list: [
          { title: "Nutra", to: "Nutra" },
          { title: "iGaming", to: "Nutra" },
          { title: "Universal Arbitrageur", to: "Nutra" },
          { title: "PPC", to: "Nutra" },
          { title: "TikTok", to: "Nutra" },
        ],
      },
      {
        title: "Crypto",
        list: [
          { title: "P2P", to: "Nutra" },
          { title: "Build Your First Crypto Portfolio", to: "Nutra" },
        ],
      },
      {
        title: "Artificial Intelligence",
        list: [
          { title: "AI Creator", to: "Nutra" },
          { title: "AI Website Building", to: "Nutra" },
          { title: "AI Content Generation", to: "Nutra" },
          { title: "AI Automation", to: "Nutra" },
        ],
      },
      {
        title: "Blog",
        list: [
          { title: "Contacts", to: "Nutra" },
          { title: "About Us", to: "Nutra" },
          { title: "Offer Agreement", to: "Nutra" },
          { title: "Privacy Policy", to: "Nutra" },
        ],
      },
    ],
  },
  languageSwitcher: {
    uk: "Ukr",
    en: "Eng",
    ru: "Rus",
  },
  validation: {
    required: "This field is required.",
    invalidPhone: "Invalid phone number. It must contain 10 to 15 digits.",
  },
  error: {
    title: "Error",
    tryAgain: "Try again",
  },
  notFound: {
    title: "404",
    message: "The requested page could not be found.",
  },
};

export default en;
