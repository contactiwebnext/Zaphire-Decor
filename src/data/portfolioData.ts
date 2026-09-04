import { PortfolioItem } from '../types';

/**
 * ZAPHIRE DECOR PORTFOLIO / GALLERY DATA
 * 
 * NOTE FOR ZAPHIRE DECOR TEAM:
 * To replace placeholder imagery with your real event and product photography:
 * 1. Add your optimized images to the `/public/images/portfolio/` folder or upload to your CDN.
 * 2. Update the `imageUrl` and `imageAlt` properties below for each portfolio item.
 * 3. Add or remove items as your portfolio grows.
 */
export const portfolioCategories = [
  'All',
  'Weddings',
  'Event Decor',
  'Tablescapes',
  'Backdrops',
  'Customized Products',
  'Customized Apparel',
  'Celebrations'
] as const;

export const portfolioData: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Sacramento Garden Estate Wedding',
    category: 'Weddings',
    description: 'Complete ceremony coordination and ambient reception design featuring rich navy linens and warm champagne gold accents.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Sacramento outdoor estate wedding ceremony with elegant floral arrangements and golden hour lighting',
    featured: true,
    tags: ['Full Coordination', 'Outdoor Wedding', 'Gold & Sapphire Accent']
  },
  {
    id: 'port-2',
    title: 'Romantic Candlelit Tablescape',
    category: 'Tablescapes',
    description: 'Layered gold charger plates, taper candles, botanical runners, and bespoke calligraphy place cards.',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Luxury dining table setup with gold dinnerware, crystal glassware, and elegant floral centerpiece',
    featured: true,
    tags: ['Tablescape', 'Gold Chargers', 'Romantic Lighting']
  },
  {
    id: 'port-3',
    title: 'Grand Floral Arch & Photo Backdrop',
    category: 'Backdrops',
    description: 'Statement ceremonial arch and guest photo backdrop designed with ivory blooms, greenery, and draped chiffon fabric.',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Lush wedding ceremonial arch framing a scenic backdrop for bride and groom portraits',
    featured: true,
    tags: ['Photo Backdrop', 'Ceremonial Arch', 'Floral Design']
  },
  {
    id: 'port-4',
    title: 'Personalized Bridal Party Gift Suites',
    category: 'Customized Products',
    description: 'Handcrafted keepsake boxes featuring custom laser-cut names, personalized glassware, and satin ribbon accents.',
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Set of custom personalized bridal party gift boxes tied with satin ribbon',
    featured: true,
    tags: ['Custom Gifts', 'Keepsake Boxes', 'Personalized Favors']
  },
  {
    id: 'port-5',
    title: 'Bespoke Celebration Apparel & Shirts',
    category: 'Customized Apparel',
    description: 'Matching luxury embroidered and heat-pressed celebration apparel for a milestone Sacramento anniversary gathering.',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Customized celebration shirts with clean typographic graphics and soft ring-spun cotton fabric',
    featured: true,
    tags: ['Custom Apparel', 'Milestone Gathering', 'Branded Wear']
  },
  {
    id: 'port-6',
    title: 'Milestone 40th Birthday Evening Gala',
    category: 'Celebrations',
    description: 'Coordinated dinner celebration featuring customized entrance welcome sign, balloon installation, and playlist timing.',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Intimate outdoor evening celebration with guests dining at a long candlelit table',
    featured: false,
    tags: ['Event Coordination', 'Milestone Birthday', 'Ambient Lighting']
  },
  {
    id: 'port-7',
    title: 'Modern Acrylic Event Welcome Signage',
    category: 'Event Decor',
    description: 'Frosted acrylic signage with hand-lettered gold calligraphy and fresh floral base clusters for an upscale entryway.',
    imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Elegant custom wedding welcome sign on wooden easel surrounded by floral greenery',
    featured: false,
    tags: ['Custom Signage', 'Acrylic Decor', 'Entryway Styling']
  },
  {
    id: 'port-8',
    title: 'Blush & Gold Organic Balloon Installation',
    category: 'Backdrops',
    description: 'Multi-sized organic balloon garland framing a custom celebration shimmer wall for photos and cake cutting.',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Custom celebratory balloon garland installation in shades of blush, ivory, and metallic gold',
    featured: false,
    tags: ['Balloon Artistry', 'Photo Wall', 'Party Backdrops']
  },
  {
    id: 'port-9',
    title: 'Bridal Shower High-Tea Coordination',
    category: 'Celebrations',
    description: 'Intimate brunch coordination with vintage-modern teaware, custom menu cards, and personalized favor jars for attendees.',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Delicate celebratory shower table with floral place settings and personalized menu cards',
    featured: false,
    tags: ['Bridal Shower', 'Day Coordination', 'Custom Place Cards']
  },
  {
    id: 'port-10',
    title: 'Custom Laser-Cut Acrylic Cake Toppers & Names',
    category: 'Customized Products',
    description: 'Precision cut metallic gold acrylic cake toppers, drink stirrers, and place cards customized for weddings and events.',
    imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Wedding cake decorated with fresh flowers and custom gold acrylic cake topper',
    featured: false,
    tags: ['Laser Cut', 'Acrylic Accents', 'Personalized Details']
  },
  {
    id: 'port-11',
    title: 'Bridal Party Satin Robes & Getting-Ready Apparel',
    category: 'Customized Apparel',
    description: 'Luxurious personalized satin robes with delicate gold script names for morning prep and bridal photo sessions.',
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Bridal wedding dress and celebration robes hanging in preparation for wedding morning',
    featured: false,
    tags: ['Bridal Robes', 'Custom Lettering', 'Wedding Morning']
  },
  {
    id: 'port-12',
    title: 'Vineyard Sunset Wedding Reception',
    category: 'Weddings',
    description: 'Full timeline coordination and decor management for 140 guests nestled among regional Northern California vines.',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Vineyard wedding reception table setup under twinkling canopy lights at dusk',
    featured: true,
    tags: ['Vineyard Wedding', 'Full Logistics', 'Northern California']
  }
];
