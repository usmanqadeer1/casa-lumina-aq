/**
 * CASA LUMINA — single source of truth for the restaurant.
 *
 * This file is the entire "brand + knowledge base" for the demo. To rebuild
 * this website for another restaurant prospect, replace this file only:
 * every page section, form and the AI concierge read from here.
 */

export type DietaryTag = "vegetarian" | "vegan" | "gluten-free" | "contains-nuts" | "spicy";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  tags?: DietaryTag[];
  signature?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  blurb: string;
  items: MenuItem[];
};

export const dietaryLabels: Record<DietaryTag, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  "gluten-free": "Gluten-Free",
  "contains-nuts": "Contains Nuts",
  spicy: "Spicy",
};

export const dietaryShort: Record<DietaryTag, string> = {
  vegetarian: "V",
  vegan: "VG",
  "gluten-free": "GF",
  "contains-nuts": "N",
  spicy: "S",
};

export const restaurant = {
  name: "Casa Lumina",
  tagline: "Modern Italian Dining, Reimagined.",
  city: "Dallas, Texas",
  description:
    "Casa Lumina is an upscale modern Italian restaurant in downtown Dallas. Italian tradition meets a contemporary dining experience: handmade pasta, wood-fired secondi, a deep Italian wine list, and a warm, candlelit room designed for lingering.",
  address: {
    street: "1234 Main Street",
    cityState: "Dallas, TX 75201",
    full: "1234 Main Street, Dallas, TX 75201",
    directionsUrl: "https://maps.google.com/?q=1234+Main+Street+Dallas+TX+75201",
  },
  phone: "(214) 555-0187",
  phoneHref: "tel:+12145550187",
  email: "hello@casalumina.com",
  emailHref: "mailto:hello@casalumina.com",
  social: {
    instagram: "@casaluminadallas",
  },
  hours: [
    { days: "Monday – Thursday", time: "5:00 PM – 10:00 PM" },
    { days: "Friday", time: "5:00 PM – 11:00 PM" },
    { days: "Saturday", time: "4:00 PM – 11:00 PM" },
    { days: "Sunday", time: "4:00 PM – 9:00 PM" },
  ],
  hoursNote:
    "The kitchen closes 30 minutes before the dining room. The bar seats walk-ins nightly.",
} as const;

export const menu: MenuCategory[] = [
  {
    id: "antipasti",
    name: "Antipasti",
    blurb: "Small plates to open the table, made for sharing.",
    items: [
      {
        id: "burrata",
        name: "Burrata & Roasted Tomatoes",
        description:
          "Puglian burrata, slow-roasted heirloom tomatoes, basil, aged balsamic, grilled sourdough.",
        price: 18,
        tags: ["vegetarian"],
        signature: true,
      },
      {
        id: "carpaccio",
        name: "Beef Carpaccio",
        description:
          "Thinly sliced prime tenderloin, arugula, capers, shaved Parmigiano, lemon oil.",
        price: 21,
        tags: ["gluten-free"],
      },
      {
        id: "polpo",
        name: "Grilled Octopus",
        description:
          "Charred Spanish octopus, fingerling potatoes, Calabrian chili, salsa verde.",
        price: 24,
        tags: ["gluten-free", "spicy"],
      },
      {
        id: "carciofi",
        name: "Carciofi Fritti",
        description:
          "Crisp baby artichokes, sea salt, preserved lemon aioli, fresh herbs.",
        price: 16,
        tags: ["vegetarian"],
      },
      {
        id: "verdure",
        name: "Mercato Vegetables",
        description:
          "Seasonal market vegetables roasted over embers, olive oil, toasted pine nuts, mint.",
        price: 15,
        tags: ["vegan", "gluten-free", "contains-nuts"],
      },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    blurb: "Made by hand every morning, rolled and cut in-house.",
    items: [
      {
        id: "tagliatelle",
        name: "Truffle Tagliatelle",
        description:
          "Hand-cut tagliatelle, black winter truffle, cultured butter, aged Parmigiano.",
        price: 28,
        tags: ["vegetarian"],
        signature: true,
      },
      {
        id: "risotto",
        name: "Wild Mushroom Risotto",
        description:
          "Carnaroli rice, porcini and seasonal mushrooms, thyme, mountain cheese.",
        price: 26,
        tags: ["vegetarian", "gluten-free"],
        signature: true,
      },
      {
        id: "cacio",
        name: "Cacio e Pepe",
        description:
          "Bronze-cut tonnarelli, Pecorino Romano, cracked Tellicherry pepper.",
        price: 24,
        tags: ["vegetarian"],
      },
      {
        id: "rigatoni",
        name: "Rigatoni all'Amatriciana",
        description:
          "Guanciale, San Marzano tomato, chili, Pecorino. Available gluten-free on request.",
        price: 25,
        tags: ["spicy"],
      },
      {
        id: "ortolana",
        name: "Orecchiette Ortolana",
        description:
          "Broccolini, garlic, chili, toasted breadcrumb, olive oil. Prepared vegan.",
        price: 23,
        tags: ["vegan"],
      },
    ],
  },
  {
    id: "secondi",
    name: "Secondi",
    blurb: "Wood-fired and slow-cooked mains from the hearth.",
    items: [
      {
        id: "branzino",
        name: "Branzino al Limone",
        description:
          "Whole Mediterranean branzino, charred lemon, salsa verde, braised greens.",
        price: 36,
        tags: ["gluten-free"],
        signature: true,
      },
      {
        id: "shortrib",
        name: "48-Hour Short Rib",
        description:
          "Slow-braised beef short rib, Barolo jus, celery root purée, gremolata.",
        price: 42,
        tags: ["gluten-free"],
        signature: true,
      },
      {
        id: "pollo",
        name: "Pollo al Mattone",
        description:
          "Brick-pressed free-range chicken, rosemary, roasted garlic, pan drippings.",
        price: 32,
        tags: ["gluten-free"],
      },
      {
        id: "bistecca",
        name: "Bistecca Fiorentina (for two)",
        description:
          "40oz dry-aged porterhouse, rosemary salt, charred lemon, olive oil.",
        price: 96,
        tags: ["gluten-free"],
      },
      {
        id: "melanzane",
        name: "Melanzane alla Griglia",
        description:
          "Fire-roasted eggplant, tomato conserva, salsa verde, herbed white beans.",
        price: 27,
        tags: ["vegan", "gluten-free"],
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    blurb: "Finished in-house by our pastry kitchen.",
    items: [
      {
        id: "tiramisu",
        name: "Tiramisù Classico",
        description:
          "Espresso-soaked savoiardi, mascarpone cream, Valrhona cocoa.",
        price: 14,
        tags: ["vegetarian"],
        signature: true,
      },
      {
        id: "panna",
        name: "Vanilla Panna Cotta",
        description: "Tahitian vanilla, macerated seasonal fruit, olive oil.",
        price: 13,
        tags: ["vegetarian", "gluten-free"],
      },
      {
        id: "torta",
        name: "Flourless Chocolate Torta",
        description: "70% dark chocolate, hazelnut praline, sea salt.",
        price: 14,
        tags: ["vegetarian", "gluten-free", "contains-nuts"],
      },
      {
        id: "sorbetto",
        name: "Sorbetto del Giorno",
        description: "Daily fruit sorbetto churned in-house. Always dairy-free.",
        price: 10,
        tags: ["vegan", "gluten-free"],
      },
    ],
  },
  {
    id: "wine",
    name: "Wine",
    blurb:
      "A 300-label Italian-leaning list. Sommelier pairings available for any table.",
    items: [
      {
        id: "franciacorta",
        name: "Franciacorta Brut, Lombardy",
        description: "Bright, brioche-driven sparkling. By the glass or bottle.",
        price: 19,
        tags: ["vegan"],
      },
      {
        id: "vermentino",
        name: "Vermentino, Sardinia",
        description: "Citrus, sea salt, almond. Pairs with branzino and antipasti.",
        price: 16,
      },
      {
        id: "chianti",
        name: "Chianti Classico Riserva, Tuscany",
        description: "Cherry, leather, dried herb. Our house red pour.",
        price: 18,
      },
      {
        id: "barolo",
        name: "Barolo, Piedmont",
        description: "Rose petal, tar, fine tannin. Ideal with the short rib.",
        price: 26,
      },
      {
        id: "pairing",
        name: "Sommelier Pairing Flight",
        description: "Three curated pours chosen around your table's order.",
        price: 42,
      },
    ],
  },
];

export const signatureDishIds = [
  "tagliatelle",
  "risotto",
  "branzino",
  "burrata",
  "shortrib",
  "tiramisu",
] as const;

export const reservations = {
  policy:
    "Reservations are recommended and open 30 days in advance. Tables are held for 15 minutes past the reservation time. Parties of 7 or more are booked through our events team.",
  walkIns: "The full menu is served at the bar and lounge for walk-in guests every night.",
  largeParty: "Parties of 7+ are handled as a private dining or group booking inquiry.",
  dressCode: "Smart casual. Most guests dress up a little — jackets welcome, not required.",
  parking: "Complimentary valet from 5:00 PM nightly, plus a garage next door on Main Street.",
  accessibility: "The dining room, restrooms and private rooms are fully wheelchair accessible.",
};

export const privateDining = {
  headline: "Celebrate Around the Table.",
  intro:
    "Two private rooms and a full buyout option, each with a dedicated captain, custom menu and its own sound and lighting.",
  eventTypes: [
    "Corporate dinners",
    "Birthdays",
    "Weddings & rehearsal dinners",
    "Anniversaries",
    "Group celebrations",
  ],
  spaces: [
    {
      id: "cellar",
      name: "The Cellar",
      seated: "Seated 14 – 22",
      standing: "Standing 30",
      description:
        "Our wine room, lined floor to ceiling with the Italian list. Candlelit, intimate, ideal for milestone dinners.",
      minimum: "$1,800 food & beverage minimum",
    },
    {
      id: "terrazza",
      name: "La Terrazza",
      seated: "Seated 24 – 40",
      standing: "Standing 60",
      description:
        "A light-filled room with arched windows over Main Street and a private bar and entrance.",
      minimum: "$3,500 food & beverage minimum",
    },
    {
      id: "buyout",
      name: "Full Buyout",
      seated: "Seated 110",
      standing: "Standing 180",
      description:
        "The entire restaurant, kitchen and bar team dedicated to your evening, with a bespoke menu.",
      minimum: "$14,000 food & beverage minimum",
    },
  ],
  packages: [
    {
      id: "prix-fixe",
      name: "Prix Fixe",
      price: "$85 per guest",
      description: "Three courses, family-style antipasti, choice of pasta and secondo.",
      includes: [
        "Family-style antipasti",
        "Choice of two pastas",
        "Choice of two secondi",
        "Shared dessert board",
      ],
    },
    {
      id: "lumina",
      name: "The Lumina",
      price: "$125 per guest",
      description: "Our signature menu, built around the season and your table.",
      includes: [
        "Passed bites on arrival",
        "Four courses including truffle tagliatelle",
        "Sommelier wine pairing add-on",
        "Custom printed menus",
      ],
    },
    {
      id: "chefs-table",
      name: "Chef's Table",
      price: "$175 per guest",
      description: "A tasting menu written for your event, served with the kitchen in view.",
      includes: [
        "Seven-course tasting",
        "Chef introduction to each course",
        "Reserve wine pairings",
        "Dedicated captain and sommelier",
      ],
    },
  ],
  planningNotes:
    "Custom menus, dietary accommodations, AV, florals and printed menus are all available. We ask for final guest counts 72 hours before the event.",
};

export const catering = {
  headline: "Casa Lumina, Wherever You Gather.",
  intro:
    "Our catering team brings the Casa Lumina kitchen to offices, homes and venues across the Dallas–Fort Worth metroplex.",
  eventTypes: [
    "Corporate events",
    "Weddings",
    "Private parties",
    "Office lunches",
    "Special occasions",
  ],
  minimumGuests: 10,
  serviceArea: "Dallas–Fort Worth metroplex. Deliveries beyond 25 miles carry a travel fee.",
  leadTime: "72 hours notice for drop-off, two weeks for full-service events.",
  packages: [
    {
      id: "office",
      name: "Office Lunch",
      price: "$32 per guest",
      minimum: "10 guest minimum",
      description: "Drop-off service with disposable serviceware, ready to set out.",
      includes: [
        "Two pasta trays",
        "Chopped Italian salad",
        "Focaccia and olive oil",
        "Biscotti box",
      ],
    },
    {
      id: "grazing",
      name: "Grazing & Antipasti",
      price: "$46 per guest",
      minimum: "20 guest minimum",
      description: "An abundant Italian grazing table styled on site by our team.",
      includes: [
        "Salumi and cheese display",
        "Marinated and roasted vegetables",
        "Burrata and seasonal fruit",
        "Breads, focaccia, grissini",
      ],
    },
    {
      id: "full-service",
      name: "Full-Service Dinner",
      price: "$95 per guest",
      minimum: "40 guest minimum",
      description: "Plated or family-style service with our staff, chafing and rentals coordinated.",
      includes: [
        "Passed appetizers",
        "Two pastas and two secondi",
        "Service staff and captain",
        "Dessert display",
      ],
    },
    {
      id: "wedding",
      name: "Wedding Collection",
      price: "From $140 per guest",
      minimum: "60 guest minimum",
      description: "A fully bespoke wedding menu with tasting, coordination and bar service.",
      includes: [
        "Private menu tasting",
        "Cocktail hour bites",
        "Plated multi-course dinner",
        "Wine and bar service",
      ],
    },
  ],
  budgetRanges: [
    "Under $2,500",
    "$2,500 – $5,000",
    "$5,000 – $10,000",
    "$10,000 – $25,000",
    "$25,000+",
  ],
  dietaryNote:
    "Vegetarian, vegan, gluten-free and nut-free menus are available for every package with advance notice.",
};

export const testimonials = [
  {
    quote:
      "The truffle tagliatelle is the single best plate of pasta I have eaten in Texas. We have been back four times this year.",
    author: "Marisa Delgado",
    detail: "Dallas, TX",
  },
  {
    quote:
      "We hosted forty people in La Terrazza for our firm's anniversary. The service was flawless and nobody wanted to leave.",
    author: "Jonathan Pierce",
    detail: "Managing Partner, Pierce & Hall",
  },
  {
    quote:
      "Casa Lumina catered our wedding for 120 guests. Two years later, people still bring up the short rib.",
    author: "Amelia & Ross Whitaker",
    detail: "Married at the Adolphus",
  },
  {
    quote:
      "The sommelier found us a Barolo we had never heard of and it made the entire night. Genuinely warm hospitality.",
    author: "Priya Raman",
    detail: "Dallas, TX",
  },
  {
    quote:
      "As a vegetarian I usually settle. Here I had four courses I actually wanted. That never happens.",
    author: "Chris Okafor",
    detail: "Fort Worth, TX",
  },
];

export const faqs = [
  {
    question: "Do you take reservations?",
    answer:
      "Yes. Reservations are recommended and open 30 days in advance. Parties of 7 or more are booked through our events team as a group booking.",
  },
  {
    question: "Do you have vegetarian, vegan and gluten-free options?",
    answer:
      "Yes. Every menu section has vegetarian options, several dishes are vegan or can be prepared vegan, and much of the menu is gluten-free. Our pasta can be made gluten-free on request.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "Smart casual. Most guests dress up a little. Jackets are welcome but never required.",
  },
  {
    question: "Do you offer parking?",
    answer:
      "Complimentary valet is available from 5:00 PM nightly, and there is a public garage next door on Main Street.",
  },
  {
    question: "Can you accommodate allergies?",
    answer:
      "Yes. Please tell us when you book and again when you are seated, and the kitchen will build around it.",
  },
  {
    question: "Do you host private events?",
    answer:
      "We have two private rooms and a full buyout option, seating from 14 to 110 guests, each with custom menus.",
  },
  {
    question: "Do you cater off-site?",
    answer:
      "Yes, across the Dallas–Fort Worth metroplex, with a 10 guest minimum and packages from drop-off office lunches to full-service weddings.",
  },
  {
    question: "Is the restaurant wheelchair accessible?",
    answer: "Yes. The dining room, restrooms and both private rooms are fully accessible.",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Our Menu", to: "/menu" },
  { label: "Private Dining", to: "/private-dining" },
  { label: "Catering", to: "/catering" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function findMenuItem(id: string): MenuItem | undefined {
  for (const category of menu) {
    const hit = category.items.find((item) => item.id === id);
    if (hit) return hit;
  }
  return undefined;
}

/** Plain-text knowledge base handed to the AI concierge on every conversation. */
export function buildKnowledgeBase(): string {
  const menuText = menu
    .map((category) => {
      const items = category.items
        .map((item) => {
          const tags = item.tags?.length
            ? ` [${item.tags.map((t) => dietaryLabels[t]).join(", ")}]`
            : "";
          return `  - ${item.name} — $${item.price}: ${item.description}${tags}`;
        })
        .join("\n");
      return `${category.name} (${category.blurb})\n${items}`;
    })
    .join("\n\n");

  const hoursText = restaurant.hours.map((h) => `  - ${h.days}: ${h.time}`).join("\n");

  const spaces = privateDining.spaces
    .map((s) => `  - ${s.name}: ${s.seated}, ${s.standing}. ${s.description} ${s.minimum}.`)
    .join("\n");

  const pdPackages = privateDining.packages
    .map((p) => `  - ${p.name} (${p.price}): ${p.description} Includes: ${p.includes.join(", ")}.`)
    .join("\n");

  const catPackages = catering.packages
    .map(
      (p) =>
        `  - ${p.name} (${p.price}, ${p.minimum}): ${p.description} Includes: ${p.includes.join(", ")}.`,
    )
    .join("\n");

  const faqText = faqs.map((f) => `  Q: ${f.question}\n  A: ${f.answer}`).join("\n");

  return `RESTAURANT
Name: ${restaurant.name}
Tagline: ${restaurant.tagline}
About: ${restaurant.description}
Address: ${restaurant.address.full}
Phone: ${restaurant.phone}
Email: ${restaurant.email}
Instagram: ${restaurant.social.instagram}

HOURS
${hoursText}
Note: ${restaurant.hoursNote}

MENU
${menuText}

DIETARY INFORMATION
Vegetarian, vegan and gluten-free dishes are marked on the menu above. Pasta can be prepared gluten-free on request. Allergies are accommodated with notice. ${catering.dietaryNote}

RESERVATIONS
${reservations.policy}
Walk-ins: ${reservations.walkIns}
Large parties: ${reservations.largeParty}
Dress code: ${reservations.dressCode}
Parking: ${reservations.parking}
Accessibility: ${reservations.accessibility}

PRIVATE DINING
${privateDining.intro}
Event types: ${privateDining.eventTypes.join(", ")}
Spaces:
${spaces}
Packages:
${pdPackages}
Planning: ${privateDining.planningNotes}

CATERING
${catering.intro}
Event types: ${catering.eventTypes.join(", ")}
Minimum guests: ${catering.minimumGuests}
Service area: ${catering.serviceArea}
Lead time: ${catering.leadTime}
Packages:
${catPackages}
Budget ranges: ${catering.budgetRanges.join(", ")}

FREQUENTLY ASKED QUESTIONS
${faqText}`;
}
