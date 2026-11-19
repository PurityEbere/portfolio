// ─────────────────────────────────────────────────────────────
// Edit this file to fill in your own content.
// Put images/videos in /public/assets and reference them as
// "/assets/<file>". Tall phone screenshots (~1312x2710) match
// the original layout best. `video` is optional — when set, a
// play button appears on the project page.
// ─────────────────────────────────────────────────────────────

export type Project = {
  slug: string;
  title: string;
  role: string;
  company?: string; // optional line under the role, e.g. "Raven"
  year: string;
  // Optional description, one string per paragraph. Shown under the year on
  // desktop only (hidden on phones/tablets), exactly like the original site.
  description?: string[];
  image: string;
  width: number; // intrinsic image width in px
  height: number; // intrinsic image height in px
  video?: string;
  credits: string[];
};

// A bio paragraph is a list of plain strings and links.
export type BioPart = string | { text: string; href: string };

export const site = {
  name: "Purity Udeh",
  year: "2026",
  email: "udeheberepurity@gmail.com",
  twitter: "https://x.com/ebyereh",
  github: "https://github.com/PurityEbere",
  linkedin: "https://www.linkedin.com/in/purityudeh/",
};

export const about: BioPart[][] = [
  [
    "My name is Purity Udeh. I'm a Technical Product Manager at ",
    { text: "Raven Bank", href: "https://getravenbank.com/enterprise/partner" },
    ", working on payment infrastructure and digital products.",
  ],
  [
    "I previously worked at ",
    { text: "Airvend", href: "https://apps.apple.com/ng/app/airvend/id1439778926" },
    " and WelcomeMe, and consulted for ",
    { text: "Billery", href: "https://www.billery.io/" },
    " and ",
    { text: "Bethy AI", href: "https://www.bethy.ai/" },
    ". I've had the chance to work across fintech, SaaS and EdTech.",
  ],
  [
    "I'm also a technical writer, product researcher and a big believer in asking questions, understanding problems and figuring out how things work.",
  ],
  [
    "Outside work, I contribute to developer communities and help organise ",
    { text: "Grafana & Friends Nigeria", href: "https://grafana.com/" },
    ".",
  ],
  [
    "I'm currently exploring machine learning, AI and all the interesting things happening at the intersection of technology and product.",
  ],
  ["I live in Lagos, Nigeria."],
];

// All mockups are 1317x2676 phone frames rendered at 3x.
const phone = (file: string) => ({ image: `/assets/${file}`, width: 1317, height: 2676 });
const PM = "Product Manager";

// How to edit a project:
//   year:        "" hides the line. App Store years are each app's first release; adjust as needed.
//   company:     optional line under the role (e.g. company: "Raven"). Delete to hide.
//   description: one string per paragraph; [] hides it. Shown on desktop only, like the original.
//                e.g. description: ["First paragraph.", "Second paragraph."]
//   credits:     collaborator names, one per string.
export const projects: Project[] = [
  {
    slug: "bethy",
    title: "Bethy AI",
    role: "Technical Product Manager",
    year: "2025",
    description: ["An AI-powered property management platform for landlords and letting agents. Bethy helps automate tenant communication, handle maintenance requests and coordinate repairs, reducing the administrative workload involved in managing properties."],
    credits: [],
    ...phone("bethy.png"),
  },
  {
    slug: "billery",
    title: "Billery",
    role: "Technical Product Manager",
    year: "2025",
    description: ["A digital product designed to simplify business operations and make everyday processes more efficient. It focuses on helping businesses manage their activities through a more streamlined digital experience."],
    credits: [],
    ...phone("billery.png"),
  },
  {
    slug: "raven-partner",
    title: "Raven Partner",
    role: "Lead Technical Product Manager",
    year: "",
    description: ["A financial services platform that enables business partners to access and deliver Raven's payment and financial products to their customers."],
    credits: [],
    ...phone("raven-partner.png"),
  },
  {
    slug: "tap-credit",
    title: "Tap Credit",
    role: PM,
    year: "2026",
    description: ["A digital credit product that gives eligible organization staff access to short-term credit through a simple, integrated experience."],
    credits: [],
    ...phone("raven-tapcredit.png"),
  },
  {
    slug: "raven-atlas",
    title: "Raven Atlas",
    role: "Technical Product Manager",
    year: "2024",
    description: ["A financial infrastructure platform that provides businesses with the tools to integrate payment services and build financial products without having to manage the underlying complexity themselves"],
    credits: [],
    ...phone("raven-atlas.png"),
  },
  {
    slug: "bankbox",
    title: "BankBox",
    role: PM,
    year: "2024",
    description: ["A mobile payment solution that enables businesses to accept and manage customer payments. It helps merchants process transactions and keep track of their payment activities."],
    credits: [],
    ...phone("bankbox.png"),
  },
  {
    slug: "smartajo",
    title: "SmartAjo",
    role: PM,
    year: "2026",
    description: ["A digital operating platform for Ajo and thrift businesses. It replaces manual record-keeping with tools for managing customers, agents, contributions, collections, withdrawals, payouts and reconciliation."],
    credits: [],
    ...phone("smartajo.png"),
  },
  {
    slug: "airvend",
    title: "Airvend",
    role: PM,
    year: "2021",
    description: ["A digital payments ecosystem offering payment APIs, POS solutions and a consumer app. It enables individuals and businesses to make payments, process transactions and integrate financial services into their platforms"],
    credits: [],
    ...phone("airvend.png"),
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
