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
    imageWork: "/artists/federica-work.jpg",
    imageCasual: "/artists/federica-casual.jpg",
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
    imageWork: "/artists/stefano-work.jpg",
    imageCasual: "/artists/stefano-mazzotta.jpg",
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
  { id: "omi-01", artist: "federica", style: "Neo-Traditional", label: "Skull & roses sleeve", image: "/gallery/omi-01.webp" },
  { id: "ste-03", artist: "stefano", style: "Neo-Traditional", label: "Medusa", image: "/gallery/ste-03.webp" },
  { id: "omi-02", artist: "federica", style: "Realismo", label: "Anubis", image: "/gallery/omi-02.webp" },
  { id: "ste-04", artist: "stefano", style: "Neo-Traditional", label: "Demone", image: "/gallery/ste-04.webp" },
  { id: "omi-03", artist: "federica", style: "Neo-Traditional", label: "Mermaid warrior", image: "/gallery/omi-03.webp" },
  { id: "ste-01", artist: "stefano", style: "Blackwork", label: "Medusa jellyfish", image: "/gallery/ste-01.webp" },
  { id: "omi-07", artist: "federica", style: "Blackwork", label: "Occhio ornamentale", image: "/gallery/omi-07.webp" },
  { id: "ste-05", artist: "stefano", style: "Neo-Traditional", label: "Corvo e rosa", image: "/gallery/ste-05.webp" },
  { id: "omi-04", artist: "federica", style: "Neo-Traditional", label: "Rosa e teschio", image: "/gallery/omi-04.webp" },
  { id: "ste-08", artist: "stefano", style: "Neo-Traditional", label: "Rosa rossa", image: "/gallery/ste-08.webp" },
  { id: "omi-05", artist: "federica", style: "Traditional", label: "SpongeBob", image: "/gallery/omi-05.webp" },
  { id: "ste-10", artist: "stefano", style: "Neo-Traditional", label: "Koi fish", image: "/gallery/ste-10.webp" },
  { id: "omi-06", artist: "federica", style: "Neo-Traditional", label: "Cat skull floreale", image: "/gallery/omi-06.webp" },
  { id: "ste-11", artist: "stefano", style: "Blackwork", label: "Calligrafia", image: "/gallery/ste-11.webp" },
  { id: "omi-08", artist: "federica", style: "Blackwork", label: "Pigna botanica", image: "/gallery/omi-08.webp" },
  { id: "ste-14", artist: "stefano", style: "Neo-Traditional", label: "Carte e dadi", image: "/gallery/ste-14.webp" },
  { id: "omi-09", artist: "federica", style: "Traditional", label: "Good Boy 666", image: "/gallery/omi-09.webp" },
  { id: "ste-16", artist: "stefano", style: "Neo-Traditional", label: "Uccello e campanelle", image: "/gallery/ste-16.webp" },
  { id: "omi-10", artist: "federica", style: "Blackwork", label: "Drum kit", image: "/gallery/omi-10.webp" },
  { id: "ste-18", artist: "stefano", style: "Neo-Traditional", label: "Cornice ornamentale", image: "/gallery/ste-18.webp" },
  { id: "omi-11", artist: "federica", style: "Realismo", label: "Cavaliere templare", image: "/gallery/omi-11.webp" },
  { id: "omi-12", artist: "federica", style: "Fine Line", label: "Profilo greco", image: "/gallery/omi-12.webp" },
  { id: "omi-13", artist: "federica", style: "Blackwork", label: "Teschio e fiori", image: "/gallery/omi-13.webp" },
  { id: "omi-14", artist: "federica", style: "Realismo", label: "Alice in Wonderland", image: "/gallery/omi-14.webp" },
  { id: "omi-15", artist: "federica", style: "Fine Line", label: "Ginevra", image: "/gallery/omi-15.webp" },
  { id: "omi-16", artist: "federica", style: "Realismo", label: "Gatti a cuore", image: "/gallery/omi-16.webp" },
  { id: "omi-17", artist: "federica", style: "Blackwork", label: "Alchimia geometrica", image: "/gallery/omi-17.webp" },
  { id: "omi-18", artist: "federica", style: "Fine Line", label: "Micro face tattoo", image: "/gallery/omi-18.webp" },
  { id: "omi-19", artist: "federica", style: "Blackwork", label: "Skull on hand", image: "/gallery/omi-19.webp" },
  { id: "omi-20", artist: "federica", style: "Fine Line", label: "Fiori di ciliegio", image: "/gallery/omi-20.webp" },
]

export const reviews: Review[] = [
  { name: "Martina R.", text: "Federica ha capito esattamente cosa volevo. Il mio primo tatuaggio, e non sarà l'ultimo!", stars: 5 },
  { name: "Luca B.", text: "Stefano è un artista pazzesco. Il realismo che fa sembra una foto. Studio super accogliente.", stars: 5 },
  { name: "Sara M.", text: "Ambiente rilassato, zero pressione. Mi hanno seguito passo passo dalla consulenza al risultato finale.", stars: 5 },
  { name: "Marco T.", text: "Terzo tatuaggio qui. Ormai è casa. Federica ha un talento unico per il traditional.", stars: 5 },
]

export const stats = {
  yearsFounded: 2013,
  tattoosCount: "3.000+",
  googleRating: "4.9",
  googleReviews: "120+",
}
