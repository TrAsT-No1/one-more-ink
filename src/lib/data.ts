export interface Artist {
  slug: string
  name: string
  role: string
  bio: string
  styles: string[]
  image: string
  instagram: string
}

export interface Service {
  slug: string
  name: string
  description: string
  icon: string
}

export const artists: Artist[] = [
  {
    slug: "marco-rossi",
    name: "Marco Rossi",
    role: "Founder & Lead Artist",
    bio: "Oltre 15 anni di esperienza nel tatuaggio artistico. Specializzato in realismo e blackwork.",
    styles: ["Realism", "Blackwork", "Portrait"],
    image: "/artists/marco-rossi.jpg",
    instagram: "https://instagram.com/marcorossi.ink",
  },
  {
    slug: "giulia-bianchi",
    name: "Giulia Bianchi",
    role: "Senior Artist",
    bio: "Artista versatile con un tocco unico nel fineline e nei tatuaggi botanici.",
    styles: ["Fineline", "Botanical", "Minimalist"],
    image: "/artists/giulia-bianchi.jpg",
    instagram: "https://instagram.com/giuliabianchi.ink",
  },
  {
    slug: "luca-verdi",
    name: "Luca Verdi",
    role: "Artist",
    bio: "Appassionato di traditional e neo-traditional, porta colore e carattere in ogni pezzo.",
    styles: ["Traditional", "Neo-Traditional", "Color"],
    image: "/artists/luca-verdi.jpg",
    instagram: "https://instagram.com/lucaverdi.ink",
  },
]

export const services: Service[] = [
  {
    slug: "tatuaggi-custom",
    name: "Tatuaggi Custom",
    description:
      "Disegni personalizzati creati su misura per te. Ogni pezzo e unico.",
    icon: "pen-tool",
  },
  {
    slug: "cover-up",
    name: "Cover Up",
    description:
      "Trasformiamo vecchi tatuaggi in nuove opere d'arte. Consultazione gratuita.",
    icon: "layers",
  },
  {
    slug: "consulenza",
    name: "Consulenza",
    description:
      "Primo incontro gratuito per discutere il tuo progetto, stile e posizionamento.",
    icon: "message-circle",
  },
  {
    slug: "touch-up",
    name: "Touch Up",
    description:
      "Rinfresca e ripara tatuaggi esistenti per riportarli al loro splendore.",
    icon: "refresh-cw",
  },
]
