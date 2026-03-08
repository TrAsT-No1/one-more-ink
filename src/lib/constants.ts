export const STUDIO_INFO = {
  name: "One More Ink",
  address: "Via Example 42, 00100 Roma RM",
  phone: "+39 06 1234567",
  email: "info@onemoreink.it",
  mapUrl: "https://maps.google.com/?q=One+More+Ink+Roma",
} as const

export const SOCIAL_LINKS = [
  {
    platform: "Instagram",
    url: "https://instagram.com/onemoreink",
    handle: "@onemoreink",
  },
  {
    platform: "TikTok",
    url: "https://tiktok.com/@onemoreink",
    handle: "@onemoreink",
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/3906123456",
    label: "Scrivici",
  },
] as const

export const BUSINESS_HOURS = [
  { day: "Lunedi - Venerdi", hours: "10:00 - 19:00" },
  { day: "Sabato", hours: "10:00 - 17:00" },
  { day: "Domenica", hours: "Chiuso" },
] as const
