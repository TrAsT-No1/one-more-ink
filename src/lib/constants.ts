export const STUDIO_INFO = {
  name: "One More Ink",
  tagline: "Tattoo & Piercing Studio",
  city: "Modena",
  address: "Via Nobili 20/22, 41126 Modena",
  phone: "+39 327 0991523",
  whatsappUrl: "https://wa.me/393270991523",
  googleMapsUrl: "https://maps.google.com/?q=One+More+Ink+Modena",
} as const

export const SOCIAL_LINKS = {
  instagram: {
    url: "https://www.instagram.com/onemoreink/",
    handle: "@onemoreink",
  },
  facebook: {
    url: "https://www.facebook.com/ONEmoreINK/",
    name: "ONE more INK",
  },
} as const

export const BUSINESS_HOURS = [
  { day: "Lunedì", hours: "Chiuso" },
  { day: "Martedì", hours: "13:00 – 19:30" },
  { day: "Mercoledì", hours: "13:00 – 19:30" },
  { day: "Giovedì", hours: "13:00 – 19:30" },
  { day: "Venerdì", hours: "13:00 – 19:30" },
  { day: "Sabato", hours: "10:30 – 18:00" },
  { day: "Domenica", hours: "Chiuso" },
] as const
