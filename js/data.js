/**
 * PORTFOLIO DATA CONFIG
 * ─────────────────────
 * Replace placeholder values below with your own content.
 * Videos: swap `src` and `poster` URLs. Keep paths relative if hosting locally.
 */

const SITE_CONFIG = {
  name: "[YOUR NAME]",
  title: "E-Commerce VSL Editor",
  email: "[YOUR EMAIL]",
  linkedin: "[YOUR LINKEDIN]",
  discord: "[YOUR CONTACT]",
  accent: "#c8ff00", // subtle lime accent — change to match your brand
};

const HERO_VIDEO = {
  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  poster: "https://images.unsplash.com/photo-1611162617474-5b21e939e113?w=1200&q=80",
};

const HERO_LABELS = ["VSL EDITING", "UGC", "MOTION DESIGN", "DIRECT RESPONSE"];

function asset() {
  return Array.prototype.slice.call(arguments).map(encodeURIComponent).join("/");
}

const PROJECTS = [
  {
    id: "clover-cove-main",
    number: "01",
    name: "CLOVER & COVE",
    category: "Beauty / Lifestyle",
    tags: ["VSL EDITING", "UGC", "RETENTION"],
    preview: asset("assets", "BEST VSL VIDEOS", "Clover & Cove", "Clover & Cove 1.mp4"),
    fullVideo: asset("assets", "BEST VSL VIDEOS", "Clover & Cove", "Clover & Cove 1.mp4"),
    description:
      "E-commerce VSL for Clover & Cove. Built to hold attention, educate the viewer, and move them toward the offer.",
    role: "VSL Editor",
    tools: ["Premiere Pro", "CapCut"],
    breakdown: [
      "Opening designed to stop the scroll",
      "Product-focused visual pacing",
      "Captions and motion for sound-off viewing",
      "Clear close toward action",
    ],
    results: null,
  },
  {
    id: "clover-cove-b049",
    number: "02",
    name: "CLOVER & COVE — B049",
    category: "Beauty / Lifestyle",
    tags: ["VSL EDITING", "HOOK", "UGC"],
    preview: asset("assets", "BEST VSL VIDEOS", "Clover & Cove", "B049 HOOK A.mp4"),
    fullVideo: asset("assets", "BEST VSL VIDEOS", "Clover & Cove", "B049 HOOK A.mp4"),
    description:
      "Hook-led Clover & Cove creative built to capture attention in the first seconds and carry viewers into the product story.",
    role: "VSL Editor",
    tools: ["Premiere Pro", "CapCut"],
    breakdown: [
      "Pattern-interrupt opening",
      "Tight pacing for paid social",
      "Product visuals stacked after the hook",
    ],
    results: null,
  },
  {
    id: "clover-cove-b052",
    number: "03",
    name: "CLOVER & COVE — B052",
    category: "Beauty / Lifestyle",
    tags: ["VSL EDITING", "HOOK", "UGC"],
    preview: asset("assets", "BEST VSL VIDEOS", "Clover & Cove", "B052 Hook A.mp4"),
    fullVideo: asset("assets", "BEST VSL VIDEOS", "Clover & Cove", "B052 Hook A.mp4"),
    description:
      "Alternate Clover & Cove hook angle. Same product, different first-frame approach for testing attention.",
    role: "VSL Editor",
    tools: ["Premiere Pro", "CapCut"],
    breakdown: [
      "New opening angle for hook testing",
      "Retention-focused cuts",
      "Product demonstration after the interrupt",
    ],
    results: null,
  },
  {
    id: "neurofuel-hook-3",
    number: "04",
    name: "RESTURAL NEUROFUEL — HOOK 3",
    category: "Health / Supplement",
    tags: ["VSL EDITING", "HOOK", "MOTION DESIGN"],
    preview: asset("assets", "BEST VSL VIDEOS", "Restural NeuroFuel", "HOOK 3.mp4"),
    fullVideo: asset("assets", "BEST VSL VIDEOS", "Restural NeuroFuel", "HOOK 3.mp4"),
    description:
      "Supplement VSL hook for Restural NeuroFuel. Built around curiosity, mechanism, and product-led visuals.",
    role: "VSL Editor",
    tools: ["Premiere Pro", "CapCut"],
    breakdown: [
      "Curiosity-driven opening",
      "Mechanism and benefit framing",
      "Product shots and captions for conversion",
    ],
    results: null,
  },
  {
    id: "neurofuel-2026-07-23",
    number: "05",
    name: "RESTURAL NEUROFUEL — JUL 23",
    category: "Health / Supplement",
    tags: ["VSL EDITING", "HOOK", "UGC"],
    preview: asset("assets", "BEST VSL VIDEOS", "Restural NeuroFuel", "Restural NeuroFuel - 2026-07-23 - Hook 01.mp4"),
    fullVideo: asset("assets", "BEST VSL VIDEOS", "Restural NeuroFuel", "Restural NeuroFuel - 2026-07-23 - Hook 01.mp4"),
    description:
      "NeuroFuel hook variation from July 23. Direct-response edit focused on the first 10 seconds and product education.",
    role: "VSL Editor",
    tools: ["Premiere Pro", "CapCut"],
    breakdown: [
      "Hook-first structure",
      "Dead space removed for faster pacing",
      "Product-led B-roll and captions",
    ],
    results: null,
  },
  {
    id: "neurofuel-2026-07-30",
    number: "06",
    name: "RESTURAL NEUROFUEL — JUL 30",
    category: "Health / Supplement",
    tags: ["VSL EDITING", "HOOK", "SOUND DESIGN"],
    preview: asset("assets", "BEST VSL VIDEOS", "Restural NeuroFuel", "Restural NeuroFuel - 2026-07-30 - Hook 01.mp4"),
    fullVideo: asset("assets", "BEST VSL VIDEOS", "Restural NeuroFuel", "Restural NeuroFuel - 2026-07-30 - Hook 01.mp4"),
    description:
      "NeuroFuel hook variation from July 30. Another opening angle for the same offer, edited for paid-social retention.",
    role: "VSL Editor",
    tools: ["Premiere Pro", "CapCut"],
    breakdown: [
      "Alternate hook angle",
      "Retention cuts and pattern interrupts",
      "Offer-ready product framing",
    ],
    results: null,
  },
  {
    id: "neurofuel-2026-08-27",
    number: "07",
    name: "RESTURAL NEUROFUEL — AUG 27",
    category: "Health / Supplement",
    tags: ["VSL EDITING", "HOOK", "UGC"],
    preview: asset("assets", "BEST VSL VIDEOS", "Restural NeuroFuel", "Restural NeuroFuel - 2026-08-27 - Hook 1.mp4"),
    fullVideo: asset("assets", "BEST VSL VIDEOS", "Restural NeuroFuel", "Restural NeuroFuel - 2026-08-27 - Hook 1.mp4"),
    description:
      "August NeuroFuel creative. Hook-led supplement VSL with tighter product storytelling after the open.",
    role: "VSL Editor",
    tools: ["Premiere Pro", "CapCut"],
    breakdown: [
      "Fresh first-frame hook",
      "Product education in the body",
      "Captions and motion for mobile viewing",
    ],
    results: null,
  },
  {
    id: "neurofuel-2026-09-16",
    number: "08",
    name: "RESTURAL NEUROFUEL — SEP 16",
    category: "Health / Supplement",
    tags: ["VSL EDITING", "HOOK", "RETENTION"],
    preview: asset("assets", "BEST VSL VIDEOS", "Restural NeuroFuel", "Restural NeuroFuel - 2026-09-16 - Hook 1.mp4"),
    fullVideo: asset("assets", "BEST VSL VIDEOS", "Restural NeuroFuel", "Restural NeuroFuel - 2026-09-16 - Hook 1.mp4"),
    description:
      "Latest NeuroFuel hook variation. Direct-response edit built to test a new opening while keeping the product story clear.",
    role: "VSL Editor",
    tools: ["Premiere Pro", "CapCut"],
    breakdown: [
      "Updated hook for creative testing",
      "Pacing tuned for completion",
      "Product visuals and CTA-ready close",
    ],
    results: null,
  },
];

const VSL_TIMELINE = [
  {
    stage: "01",
    title: "HOOK",
    description: "Stop the scroll in the first 3 seconds. Pattern interrupt, curiosity gap, or bold claim.",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1611162617474-5b21e939e113?w=600&q=80",
  },
  {
    stage: "02",
    title: "PROBLEM",
    description: "Agitate the pain. Make the viewer feel understood before offering anything.",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "https://images.unsplash.com/photo-1570194065650-d99fb4b31108?w=600&q=80",
  },
  {
    stage: "03",
    title: "MECHANISM",
    description: "Explain why past solutions failed and introduce the unique mechanism.",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    poster: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
  },
  {
    stage: "04",
    title: "SOLUTION",
    description: "Bridge the mechanism to the product. Show how it solves the core problem.",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    poster: "https://images.unsplash.com/photo-1472851294607-0627db8bd656?w=600&q=80",
  },
  {
    stage: "05",
    title: "PRODUCT",
    description: "Hero the product. Demonstrations, features, and benefit-driven visuals.",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    poster: "https://images.unsplash.com/photo-1550572017-edd951aa8f68?w=600&q=80",
  },
  {
    stage: "06",
    title: "SOCIAL PROOF",
    description: "Testimonials, reviews, before/afters — stack credibility before the ask.",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sublime.mp4",
    poster: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    stage: "07",
    title: "OFFER",
    description: "Present the offer stack. Price anchoring, bonuses, and urgency where appropriate.",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    stage: "08",
    title: "CTA",
    description: "Clear, direct call to action. Remove friction and tell them exactly what to do.",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];

const RAW_FINAL = {
  raw: {
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    poster: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80",
    label: "RAW",
  },
  final: {
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1611162617474-5b21e939e113?w=900&q=80",
    label: "FINAL",
  },
  changes: [
    "Removed dead space",
    "Improved pacing",
    "Added B-roll",
    "Added product visuals",
    "Added captions",
    "Added motion graphics",
    "Added sound design",
    "Added pattern interrupts",
  ],
};

const MOTION_PROJECTS = [
  { title: "PRODUCT CALLOUTS", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", poster: "https://images.unsplash.com/photo-1550572017-edd951aa8f68?w=600&q=80" },
  { title: "BENEFIT ANIMATIONS", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", poster: "https://images.unsplash.com/photo-1570194065650-d99fb4b31108?w=600&q=80" },
  { title: "INGREDIENT BREAKDOWNS", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", poster: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80" },
  { title: "BEFORE / AFTER", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", poster: "https://images.unsplash.com/photo-1472851294607-0627db8bd656?w=600&q=80" },
  { title: "OFFER GRAPHICS", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", poster: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
  { title: "PRODUCT VISUALIZATION", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sublime.mp4", poster: "https://images.unsplash.com/photo-1611162617474-5b21e939e113?w=600&q=80" },
];

// Set hasMetrics: true and fill metrics when you have real performance data
const SOCIAL_PROOF = {
  hasMetrics: false,
  metrics: [
    { value: "+42%", label: "CTR" },
    { value: "68%", label: "VSL COMPLETION" },
    { value: "240K", label: "VIEWS" },
    { value: "3.2", label: "ROAS" },
  ],
  trustedBrands: ["Brand One", "Brand Two", "Brand Three", "Brand Four", "Brand Five"],
  testimonials: [
    {
      name: "Alex Rivera",
      role: "Creative Director, Performance Agency",
      quote: "Consistently delivers VSL edits that hold attention past the hook. Our completion rates improved across multiple campaigns.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    {
      name: "Jordan Lee",
      role: "Head of Creative, DTC Brand",
      quote: "Understands direct-response structure better than most editors we've worked with. Fast turnaround, sharp instincts.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    {
      name: "Marcus Chen",
      role: "Media Buyer",
      quote: "The hooks alone were worth it. Clear communication, understands what media buyers need from a VSL.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
  ],
};

const PROCESS_STEPS = [
  { number: "01", title: "UNDERSTAND THE PRODUCT", description: "Deep dive into the offer, audience, and competitive landscape before touching the timeline." },
  { number: "02", title: "BREAK DOWN THE SCRIPT", description: "Map the VSL structure — hook, problem, mechanism, solution, proof, offer, CTA." },
  { number: "03", title: "BUILD THE HOOK", description: "Test multiple opening angles. The first 10 seconds determine whether anyone watches." },
  { number: "04", title: "EDIT FOR RETENTION", description: "Cut dead space, add pattern interrupts, pace for mobile attention spans." },
  { number: "05", title: "ADD VISUAL STORYTELLING", description: "B-roll, motion graphics, captions, and product visuals that reinforce the script." },
  { number: "06", title: "POLISH & DELIVER", description: "Sound design, color consistency, export specs, and revision rounds until it's ready to run." },
];

const ABOUT = {
  photo: "assets/MARVIC%20PORTRAIT.jpg",
  bio: "I'm a video editor specializing in e-commerce VSLs and direct-response creatives. I turn raw footage, UGC, product assets, and scripts into engaging videos designed to hold attention and move viewers toward action.",
  toolkit: [
    { name: "Adobe Premiere Pro", use: "main video editing" },
    { name: "Adobe Photoshop", use: "image/product asset editing" },
    { name: "CapCut", use: "quick edits and social-style creatives" },
    { name: "Canva", use: "graphic design and marketing assets" },
    { name: "AI Image Generation", use: "product images, lifestyle shots, variations, different POVs" },
    { name: "AI Video Generation", use: "image-to-video, cinematic scenes, B-roll" },
  ],
};
