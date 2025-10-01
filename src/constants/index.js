import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Works",
    url: "#features",
  },
  {
    id: "2",
    title: "How it works",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "What I’m Working On",
    url: "#roadmap",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "AI Development",
  "Smart Automation",
  "Creative Direction",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Instagram DM AI Setter",
    text: "A conversational AI agent that handles IG DMs, qualifies leads, overcomes objections, and books qualified prospects into calls.Automated scraping + filtering system for finding relevant Instagram leads with follower & bio filters.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Product Ad Generator",
    text: "Automatically turn product images into cinematic ads with our AI-powered creative engine. Upload your product, and our system generates stunning visuals and videos tailored to your brand in seconds.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Share Market Prediction System",
    text: "An AI-driven analytics platform that predicts stock trends using historical data, real-time market feeds, and machine learning models, helping users make smarter investment decisions.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "I’m on a mission to build tools that help people work smarter, grow faster, and create with ease..";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "customer service & receptionist (Voice + Calendar)",
    text: "I built an customer service & receptionist management system that connects inbound calls and AI agents to calendars. When a webhook detects an event, the flow searches or creates the contact, fetches free slots from the calendar, and either books, reschedules, or cancels appointments. It integrates with LeadConnector’s calendar API and CRM, returning confirmations in real time. This automation reduces no-shows and makes booking frictionless, essentially functioning as a virtual receptionist that runs 24/7",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Instagram DM AI Chatbot",
    text: "I designed an AI appointment-setting system for Instagram DMs that qualifies leads like a real sales setter. The flow uses a webhook to capture messages, then a LangChain agent powered by GPT follows a structured script. It asks about income, goals, and blockers, handles objections (like cost or time), and routes users accordingly. Leads making under $1k/month get a free resource, while qualified ones are smoothly booked into a consultation call. The result is a natural, human-sounding DM sequence that drives sales conversions on autopilot",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "YouTube Story Builder",
    text: "This workflow turns a spreadsheet idea into a full storyboard for short videos. It starts with a Google Sheet where each row is a video concept. When triggered, GPT expands the idea into a JSON storyboard of scenes, each with a 7–12 word voiceover line, an image prompt in YAML, and a video prompt. It ensures a cinematic arc (intro, build-up, conclusion) and feeds everything back into Sheets. This gives content creators ready-to-use AI-generated storyboards for YouTube, ads, or short films.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Outbound Dialer",
    text: "This is a cold-calling automation that pairs AI voice calls with Airtable lead management. Every minute, the workflow pulls leads marked “TBC” from Airtable, maps their details, and passes them to VAPI.ai, which places an AI phone call in a human-like voice. After each call attempt, the lead status is updated in Airtable. This creates a fully automated outbound system that continuously dials fresh leads, making outreach scalable and effortless.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Instagram Outreach Automation",
    text: "This workflow automates Instagram lead discovery by combining API scraping with AI filtering. It pulls public IG accounts via Parser.im, filters them by keywords (e.g., “Fitness Coach” or “Mentor”), applies follower limits, and ensures only relevant, open profiles are returned. The flow runs in batches and updates status back to Telegram for live progress. By layering an AI model on top, the system refines results into a curated list of influencers and prospects, saving hours of manual research.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Ultimate Personal Assistant",
    text: "I built a Telegram-based AI assistant that works like a personal “Jarvis.” The flow connects a Telegram bot with GPT-4o, allowing both text and voice interactions. It transcribes audio notes into text, remembers up to 50 previous messages for context, and integrates with email, calendar, and a calculator. This gives the assistant real productivity powers—scheduling meetings, drafting warm email replies, and handling quick calculations—directly from a chat interface.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
