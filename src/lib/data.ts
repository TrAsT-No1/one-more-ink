export interface Artist {
  id: string
  name: string
  slug: string
  role: string
  instagram: string
  instagramUrl: string
  specialties: string[]
  bio: string
  philosophy: string
  image: string
  imageWork: string
  imageCasual: string
}

export interface TattooStyle {
  id: string
  name: string
  slug: string
  description: string
}

export interface Service {
  id: string
  name: string
  description: string
  icon: string
}

export interface GalleryItem {
  id: string
  artist: string
  style: string
  label: string
  image: string
}

export interface Review {
  name: string
  text: string
  stars: number
}

export const artists: Artist[] = [
  {
    id: "federica",
    name: "Federica Morselli",
    slug: "federica-morselli",
    role: "Fondatrice & Artista",
    instagram: "@unpiccolofioccodineve",
    instagramUrl: "https://www.instagram.com/unpiccolofioccodineve/",
    specialties: ["Traditional", "Blackwork", "Fine Line", "Ornamental", "Color"],
    bio: "Tatuatrice dal 2013, wakeboarder, snowboarder, spirito libero. Ha aperto One More Ink perché voleva uno studio dove l'arte viene prima del business e dove ogni cliente esce con qualcosa di unico addosso.",
    philosophy: "Un tatuaggio non è un disegno sulla pelle — è un pezzo della tua storia che porti ovunque.",
    image: "/artists/federica-morselli.webp",
    imageWork: "/artists/federica-profile.webp",
    imageCasual: "/gallery/federica-mermaid-warrior.webp",
  },
  {
    id: "stefano",
    name: "Stefano Mazzotta",
    slug: "stefano-mazzotta",
    role: "Artista",
    instagram: "@ste49arts",
    instagramUrl: "https://www.instagram.com/ste49arts/",
    specialties: ["Blackwork", "Neo-Traditional", "Realismo"],
    bio: "Blackwork d'impatto, neo-traditional curato nel dettaglio, realismo che sembra uscire dalla pelle. Stefano ha un tratto riconoscibile — deciso, pulito, senza compromessi.",
    philosophy: "Il nero non è un limite, è un linguaggio. Ogni linea ha un peso, ogni ombra racconta qualcosa.",
    image: "/artists/stefano-mazzotta.jpg",
    imageWork: "/artists/stefano-mazzotta.jpg",
    imageCasual: "/gallery/stefano-demon.webp",
  },
]

export const tattooStyles: TattooStyle[] = [
  { id: "traditional", name: "Traditional", slug: "traditional", description: "Linee spesse, colori saturi, iconografia classica. Il tatuaggio nella sua forma più pura." },
  { id: "neo-traditional", name: "Neo-Traditional", slug: "neo-traditional", description: "L'evoluzione del traditional — dettagli raffinati, sfumature moderne, palette più ampia." },
  { id: "blackwork", name: "Blackwork", slug: "blackwork", description: "Nero pieno, pattern geometrici, contrasti netti. Potente e senza tempo." },
  { id: "fine-line", name: "Fine Line", slug: "fine-line", description: "Linee sottili e precise, dettagli minuziosi. Eleganza sulla pelle." },
  { id: "ornamental", name: "Ornamental", slug: "ornamental", description: "Pattern decorativi, mandala, simmetrie. Arte che segue il corpo." },
  { id: "realismo", name: "Realismo", slug: "realismo", description: "Riproduzione fotografica — ombre, luci e texture che ingannano l'occhio." },
]

export const services: Service[] = [
  { id: "custom", name: "Tatuaggi Custom", description: "Ogni pezzo è unico. Partiamo dalla tua idea, la sviluppiamo insieme e creiamo qualcosa che ti rappresenta.", icon: "pen-tool" },
  { id: "coverup", name: "Cover Up", description: "Trasformiamo vecchi tatuaggi in nuove opere. Il primo incontro è sempre gratuito.", icon: "layers" },
  { id: "piercing", name: "Piercing", description: "Piercing professionali con materiali certificati e assistenza completa post-piercing.", icon: "circle-dot" },
  { id: "consulenza", name: "Consulenza Gratuita", description: "Vieni a trovarci, raccontaci la tua idea. Il primo incontro è offerto da noi.", icon: "message-circle" },
]

export const galleryItems: GalleryItem[] = [
  // Alternated to show both artists in previews
  { id: "federica-skull-roses-sleeve", artist: "federica", style: "Neo-Traditional", label: "Skull & roses sleeve", image: "/gallery/federica-skull-roses-sleeve.webp" },
  { id: "stefano-demon", artist: "stefano", style: "Neo-Traditional", label: "Demone", image: "/gallery/stefano-demon.webp" },
  { id: "federica-anubis", artist: "federica", style: "Realismo", label: "Anubis", image: "/gallery/federica-anubis.webp" },
  { id: "stefano-jellyfish-medusa", artist: "stefano", style: "Blackwork", label: "Medusa jellyfish", image: "/gallery/stefano-jellyfish-medusa.webp" },
  { id: "federica-mermaid-warrior", artist: "federica", style: "Neo-Traditional", label: "Mermaid warrior", image: "/gallery/federica-mermaid-warrior.webp" },
  { id: "stefano-raven-rose", artist: "stefano", style: "Neo-Traditional", label: "Corvo e rosa", image: "/gallery/stefano-raven-rose.webp" },
  { id: "federica-ornamental-eye", artist: "federica", style: "Blackwork", label: "Occhio ornamentale", image: "/gallery/federica-ornamental-eye.webp" },
  { id: "stefano-skulls-roses-sleeve", artist: "stefano", style: "Neo-Traditional", label: "Teschi e rose sleeve", image: "/gallery/stefano-skulls-roses-sleeve.webp" },
  { id: "federica-rose-skull", artist: "federica", style: "Neo-Traditional", label: "Rosa e teschio", image: "/gallery/federica-rose-skull.webp" },
  { id: "stefano-red-rose-classic", artist: "stefano", style: "Neo-Traditional", label: "Rosa rossa classica", image: "/gallery/stefano-red-rose-classic.webp" },
  { id: "federica-spongebob", artist: "federica", style: "Traditional", label: "SpongeBob", image: "/gallery/federica-spongebob.webp" },
  { id: "stefano-koi-fish", artist: "stefano", style: "Neo-Traditional", label: "Koi fish", image: "/gallery/stefano-koi-fish.webp" },
  { id: "federica-cat-skull-floral", artist: "federica", style: "Neo-Traditional", label: "Cat skull floreale", image: "/gallery/federica-cat-skull-floral.webp" },
  { id: "stefano-calligraphy", artist: "stefano", style: "Blackwork", label: "Calligrafia", image: "/gallery/stefano-calligraphy.webp" },
  { id: "federica-botanical-pinecone", artist: "federica", style: "Blackwork", label: "Pigna botanica", image: "/gallery/federica-botanical-pinecone.webp" },
  { id: "stefano-cards-dice", artist: "stefano", style: "Neo-Traditional", label: "Carte e dadi", image: "/gallery/stefano-cards-dice.webp" },
  { id: "federica-good-boy-666", artist: "federica", style: "Traditional", label: "Good Boy 666", image: "/gallery/federica-good-boy-666.webp" },
  { id: "stefano-bird-bells", artist: "stefano", style: "Neo-Traditional", label: "Uccello e campanelle", image: "/gallery/stefano-bird-bells.webp" },
  { id: "federica-drum-kit", artist: "federica", style: "Blackwork", label: "Drum kit", image: "/gallery/federica-drum-kit.webp" },
  { id: "stefano-ornamental-frame", artist: "stefano", style: "Neo-Traditional", label: "Cornice ornamentale", image: "/gallery/stefano-ornamental-frame.webp" },
  { id: "federica-templar-knight", artist: "federica", style: "Realismo", label: "Cavaliere templare", image: "/gallery/federica-templar-knight.webp" },
  { id: "stefano-neo-trad-rose", artist: "stefano", style: "Neo-Traditional", label: "Rosa neo-traditional", image: "/gallery/stefano-neo-trad-rose.webp" },
  { id: "federica-greek-profile", artist: "federica", style: "Fine Line", label: "Profilo greco", image: "/gallery/federica-greek-profile.webp" },
  { id: "stefano-reaper-sleeve", artist: "stefano", style: "Blackwork", label: "Reaper sleeve", image: "/gallery/stefano-reaper-sleeve.webp" },
  { id: "federica-skull-flowers", artist: "federica", style: "Blackwork", label: "Teschio e fiori", image: "/gallery/federica-skull-flowers.webp" },
  { id: "stefano-bird-berries", artist: "stefano", style: "Neo-Traditional", label: "Uccello e bacche", image: "/gallery/stefano-bird-berries.webp" },
  { id: "federica-alice-wonderland", artist: "federica", style: "Realismo", label: "Alice in Wonderland", image: "/gallery/federica-alice-wonderland.webp" },
  { id: "stefano-geometric-eye", artist: "stefano", style: "Blackwork", label: "Occhio geometrico", image: "/gallery/stefano-geometric-eye.webp" },
  { id: "federica-ginevra", artist: "federica", style: "Fine Line", label: "Ginevra", image: "/gallery/federica-ginevra.webp" },
  { id: "stefano-anubis-pyramids", artist: "stefano", style: "Realismo", label: "Anubis e piramidi", image: "/gallery/stefano-anubis-pyramids.webp" },
  { id: "federica-heart-cats", artist: "federica", style: "Realismo", label: "Gatti a cuore", image: "/gallery/federica-heart-cats.webp" },
  { id: "stefano-mermaid-sword", artist: "stefano", style: "Neo-Traditional", label: "Sirena con spada", image: "/gallery/stefano-mermaid-sword.webp" },
  { id: "federica-geometric-alchemy", artist: "federica", style: "Blackwork", label: "Alchimia geometrica", image: "/gallery/federica-geometric-alchemy.webp" },
  { id: "stefano-voldemort-portrait", artist: "stefano", style: "Realismo", label: "Voldemort", image: "/gallery/stefano-voldemort-portrait.webp" },
  { id: "federica-micro-face", artist: "federica", style: "Fine Line", label: "Micro face tattoo", image: "/gallery/federica-micro-face.webp" },
  { id: "stefano-ram-skull-pentagram", artist: "stefano", style: "Neo-Traditional", label: "Teschio d'ariete", image: "/gallery/stefano-ram-skull-pentagram.webp" },
  { id: "federica-hand-skull", artist: "federica", style: "Blackwork", label: "Skull on hand", image: "/gallery/federica-hand-skull.webp" },
  { id: "stefano-rose-skull-pink", artist: "stefano", style: "Neo-Traditional", label: "Rosa e teschio pink", image: "/gallery/stefano-rose-skull-pink.webp" },
  { id: "federica-cherry-blossoms", artist: "federica", style: "Fine Line", label: "Fiori di ciliegio", image: "/gallery/federica-cherry-blossoms.webp" },
  { id: "stefano-hexagon-eye", artist: "stefano", style: "Blackwork", label: "Occhio esagonale", image: "/gallery/stefano-hexagon-eye.webp" },
  { id: "stefano-cat-skull-flower", artist: "stefano", style: "Blackwork", label: "Cat skull e fiore", image: "/gallery/stefano-cat-skull-flower.webp" },
  { id: "stefano-scorpion-sunflower", artist: "stefano", style: "Neo-Traditional", label: "Scorpione e girasole", image: "/gallery/stefano-scorpion-sunflower.webp" },
  { id: "stefano-frankenstein-portrait", artist: "stefano", style: "Realismo", label: "Frankenstein", image: "/gallery/stefano-frankenstein-portrait.webp" },
  { id: "stefano-red-demon-horns", artist: "stefano", style: "Neo-Traditional", label: "Demone rosso", image: "/gallery/stefano-red-demon-horns.webp" },
  { id: "stefano-igor-portrait", artist: "stefano", style: "Realismo", label: "Igor", image: "/gallery/stefano-igor-portrait.webp" },
  { id: "stefano-jellyfish-blackwork", artist: "stefano", style: "Blackwork", label: "Medusa blackwork", image: "/gallery/stefano-jellyfish-blackwork.webp" },
  { id: "stefano-snake-fineline", artist: "stefano", style: "Fine Line", label: "Serpente fine line", image: "/gallery/stefano-snake-fineline.webp" },
  { id: "stefano-peony-sleeve", artist: "stefano", style: "Blackwork", label: "Peonia sleeve", image: "/gallery/stefano-peony-sleeve.webp" },
  { id: "stefano-sparrow-roses", artist: "stefano", style: "Fine Line", label: "Passero e rose", image: "/gallery/stefano-sparrow-roses.webp" },
  { id: "stefano-eye-swirl", artist: "stefano", style: "Blackwork", label: "Occhio vortice", image: "/gallery/stefano-eye-swirl.webp" },
]

export const reviews: Review[] = [
  { name: "Martina R.", text: "Federica ha capito esattamente cosa volevo. Il mio primo tatuaggio, e non sarà l'ultimo!", stars: 5 },
  { name: "Luca B.", text: "Stefano è un artista pazzesco. Il realismo che fa sembra una foto. Studio super accogliente.", stars: 5 },
  { name: "Sara M.", text: "Ambiente rilassato, zero pressione. Mi hanno seguito passo passo dalla consulenza al risultato finale.", stars: 5 },
  { name: "Marco T.", text: "Terzo tatuaggio qui. Ormai è casa. Federica ha un talento unico per il traditional.", stars: 5 },
]

export interface MerchItem {
  id: string
  name: string
  description: string
  price: string
  category: "apparel" | "accessories"
  variants?: string[]
  badge?: string
}

export const merchItems: MerchItem[] = [
  {
    id: "tee-logo",
    name: "OMI Logo Tee",
    description: "T-shirt unisex in cotone organico con logo One More Ink ricamato sul petto. Vestibilità oversized.",
    price: "€35",
    category: "apparel",
    variants: ["S", "M", "L", "XL"],
  },
  {
    id: "tee-flash",
    name: "Flash Sheet Tee",
    description: "Design esclusivo di Federica stampato in serigrafia. Edizione limitata a 50 pezzi.",
    price: "€40",
    category: "apparel",
    variants: ["S", "M", "L", "XL"],
    badge: "Limited",
  },
  {
    id: "hoodie-omi",
    name: "OMI Hoodie",
    description: "Felpa con cappuccio in french terry 350gsm. Logo grande sul retro, piccolo sul petto.",
    price: "€65",
    category: "apparel",
    variants: ["S", "M", "L", "XL"],
  },
  {
    id: "cap-classic",
    name: "OMI Cap",
    description: "Cappellino dad cap con logo ricamato. Chiusura regolabile in metallo.",
    price: "€25",
    category: "accessories",
  },
  {
    id: "tote-bag",
    name: "Tote Bag",
    description: "Borsa in tela canvas pesante con stampa flash sheet originale. Perfetta per lo studio e per il giorno dopo.",
    price: "€20",
    category: "accessories",
  },
  {
    id: "sticker-pack",
    name: "Sticker Pack",
    description: "Set di 6 sticker in vinile con flash disegnati dagli artisti dello studio. Resistenti all'acqua.",
    price: "€8",
    category: "accessories",
  },
]

export const stats = {
  yearsFounded: 2013,
  tattoosCount: "3.000+",
  googleRating: "4.9",
  googleReviews: "120+",
}
