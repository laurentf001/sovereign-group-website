export interface ImagePrompt {
  id: string;
  label: string;
  section: string;
  filename: string;
  aspectRatio: "16:9" | "4:3" | "3:2" | "1:1";
  prompt: string;
}

const MJ_SUFFIX = "--style raw --v 6";

/** Midjourney generation prompts for Sovereign Capital photography. */
export const sovereignCapitalImagePrompts: ImagePrompt[] = [
  {
    id: "home.hero.primary",
    label: "Primary hero (full-bleed, dark)",
    section: "Hero / Homepage",
    filename: "hero-home.jpg",
    aspectRatio: "16:9",
    prompt: `Aerial view of a sophisticated South African coastal retirement estate at golden hour, Cape winelands mountain backdrop, manicured gardens, terracotta and ivory architecture, long shadows, cinematic wide angle, shot on Hasselblad, muted warm tones, editorial luxury real estate photography --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "home.hero.interior",
    label: "Alternative hero (interior)",
    section: "Hero / Homepage",
    filename: "hero-home-interior.jpg",
    aspectRatio: "16:9",
    prompt: `Grand entrance lobby of a boutique luxury retirement residence, double-height ceilings, Corinthian columns, Champagne and ivory palette, dramatic natural light from tall windows, fresh proteas in a stone vessel, no people, architectural photography, shot on Phase One, ultra sharp --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "developments.hero",
    label: "Construction aerial",
    section: "Sovereign Developments",
    filename: "developments-hero.jpg",
    aspectRatio: "16:9",
    prompt: `Aerial drone photograph of a premium residential development under construction in the Western Cape, Helderberg mountain range visible, neat site with visible landscaping, golden late afternoon light, South Africa, architectural photography --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "developments.panel",
    label: "Architectural scale model",
    section: "Sovereign Developments",
    filename: "developments-panel.jpg",
    aspectRatio: "4:3",
    prompt: `Architectural scale model of a luxury mixed-use development, white and beige maquette on dark timber surface, soft studio lighting, top-down perspective, minimalist, editorial --ar 4:3 ${MJ_SUFFIX}`,
  },
  {
    id: "living.hero",
    label: "Courtyard garden",
    section: "Sovereign Life Rights (Retirement Villages)",
    filename: "living-hero.jpg",
    aspectRatio: "16:9",
    prompt: `Serene courtyard garden of a luxury retirement village, South African fynbos planting, limestone pathways, wrought iron benches, morning light filtering through mature oak trees, no people, editorial lifestyle photography --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "living.panel",
    label: "Private dining room",
    section: "Sovereign Life Rights (Retirement Villages)",
    filename: "living-panel.jpg",
    aspectRatio: "16:9",
    prompt: `Elegant private dining room inside a boutique retirement residence, round tables with white linen, fresh flowers, large arched windows overlooking vineyards, warm candlelight, no people, Architectural Digest style --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "living.spa",
    label: "Wellness spa interior",
    section: "Sovereign Life Rights (Retirement Villages)",
    filename: "living-spa.jpg",
    aspectRatio: "3:2",
    prompt: `Luxury retirement village wellness spa interior, stone basin, folded white towels, eucalyptus branches, soft natural light, ivory and charcoal palette, no people, premium spa photography --ar 3:2 ${MJ_SUFFIX}`,
  },
  {
    id: "money.panel",
    label: "Signed document close-up",
    section: "Sovereign Money (Lending / Finance)",
    filename: "money-panel.jpg",
    aspectRatio: "3:2",
    prompt: `Abstract close-up of a hand-signed document on heavyweight cream paper, Montblanc pen resting across it, blurred dark navy background, shallow depth of field, editorial finance photography, no text visible --ar 3:2 ${MJ_SUFFIX}`,
  },
  {
    id: "money.hero",
    label: "Cape Town foreshore at dusk",
    section: "Sovereign Money (Lending / Finance)",
    filename: "money-hero.jpg",
    aspectRatio: "16:9",
    prompt: `Dramatic wide shot of the Cape Town foreshore financial district at dusk, city lights beginning to emerge, deep navy sky, long exposure, shot on Leica, cinematic --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "private-equity.hero",
    label: "Industrial infrastructure aerial",
    section: "Sovereign Private Equity",
    filename: "private-equity-hero.jpg",
    aspectRatio: "16:9",
    prompt: `Aerial photograph of South African industrial and logistics infrastructure, neat facilities surrounded by dry fynbos landscape, late afternoon side lighting, no people, economic geography photography --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "private-equity.panel",
    label: "Boardroom interior",
    section: "Sovereign Private Equity",
    filename: "private-equity-panel.jpg",
    aspectRatio: "16:9",
    prompt: `Dark moody boardroom, long polished walnut table, leather chairs, single candle centrepiece, floor to ceiling windows overlooking a mountainous landscape, no people, architectural interior photography --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "impact.hero",
    label: "Community vegetable garden",
    section: "Sovereign Impact (Ground Up Programme)",
    filename: "impact-hero.jpg",
    aspectRatio: "16:9",
    prompt: `South African community vegetable garden in early morning light, raised timber beds, lush green produce, rural Western Cape setting, warm documentary photography style, hopeful atmosphere, no faces visible --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "impact.craft",
    label: "Craft workshop hands",
    section: "Sovereign Impact (Ground Up Programme)",
    filename: "impact-craft.jpg",
    aspectRatio: "4:3",
    prompt: `Hands working clay at a craft workshop table, natural light from a side window, tools laid out neatly, ochre and terracotta tones, close-up editorial photography, social enterprise aesthetic --ar 4:3 ${MJ_SUFFIX}`,
  },
  {
    id: "impact.panel",
    label: "Community hall exterior",
    section: "Sovereign Impact (Ground Up Programme)",
    filename: "impact-panel.jpg",
    aspectRatio: "16:9",
    prompt: `Wide establishing shot of a modest but well-maintained community hall in a South African township, colourful murals on exterior walls, morning light, warm documentary style, no people --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "ferney.resort",
    label: "Mauritius smart city resort",
    section: "Ferney / Mauritius (Life Rights project)",
    filename: "ferney-resort.jpg",
    aspectRatio: "16:9",
    prompt: `Luxury smart city resort in Mauritius, lush tropical landscaping, modern low-rise architecture with terracotta roofs, infinity pool overlooking the Indian Ocean, golden hour, no people, editorial real estate photography --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "ferney.coastline",
    label: "Mauritius eastern coastline aerial",
    section: "Ferney / Mauritius (Life Rights project)",
    filename: "ferney-coastline.jpg",
    aspectRatio: "16:9",
    prompt: `Aerial view of Mauritius eastern coastline, turquoise lagoon, tropical forest meeting the ocean, soft morning haze, drone photography, ultra wide --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "ferney.villa",
    label: "Mauritius retirement villa interior",
    section: "Ferney / Mauritius (Life Rights project)",
    filename: "ferney-villa.jpg",
    aspectRatio: "16:9",
    prompt: `Interior of a premium Mauritius retirement villa, open plan living, high ceilings with timber rafters, sliding doors open to a private plunge pool, sea glimpse, Architectural Digest style, no people --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "about.geography",
    label: "Winelands estate aerial",
    section: "About / Team section backgrounds",
    filename: "about-geography.jpg",
    aspectRatio: "16:9",
    prompt: `Sun-drenched Cape winelands estate from above, geometric vineyard rows, whitewashed Cape Dutch gable visible, deep blue sky, editorial aerial photography --ar 16:9 ${MJ_SUFFIX}`,
  },
  {
    id: "leadership.study",
    label: "Study interior",
    section: "About / Team section backgrounds",
    filename: "leadership-study.jpg",
    aspectRatio: "3:2",
    prompt: `Minimalist light-filled study interior, floor to ceiling bookshelves, cream and navy palette, leather wingback chair, afternoon light, no people, South African estate aesthetic --ar 3:2 ${MJ_SUFFIX}`,
  },
  {
    id: "texture.limestone",
    label: "Limestone tile texture",
    section: "General UI panels / texture fills",
    filename: "texture-limestone.jpg",
    aspectRatio: "1:1",
    prompt: `Macro photograph of hand-laid limestone tiles, subtle natural variation in tone, warm ivory and grey, completely flat texture, no shadows, seamless tile, luxury material photography --ar 1:1 ${MJ_SUFFIX}`,
  },
  {
    id: "texture.gold-foil",
    label: "Gold foil embossing texture",
    section: "General UI panels / texture fills",
    filename: "texture-gold-foil.jpg",
    aspectRatio: "1:1",
    prompt: `Close-up of heavyweight Champagne gold foil embossing on cream card stock, luxury stationery photography, macro lens, shallow depth of field, no text --ar 1:1 ${MJ_SUFFIX}`,
  },
];

export const imagePromptsById = Object.fromEntries(
  sovereignCapitalImagePrompts.map((entry) => [entry.id, entry]),
) as Record<(typeof sovereignCapitalImagePrompts)[number]["id"], ImagePrompt>;

export const imagePromptsByFilename = Object.fromEntries(
  sovereignCapitalImagePrompts.map((entry) => [entry.filename, entry]),
) as Record<string, ImagePrompt>;
