import type { Metadata } from "next"
import { Syne, Inter, Caveat } from "next/font/google"
import { MotionProvider } from "@/components/providers/motion-provider"
import { LenisProvider } from "@/components/providers/lenis-provider"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const syne = Syne({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-body-face",
  subsets: ["latin"],
  display: "swap",
})

const caveat = Caveat({
  variable: "--font-hand-face",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "One More Ink — Tattoo & Piercing Studio Modena",
  description:
    "Studio di tatuaggi e piercing a Modena. Federica Morselli e Stefano Mazzotta: traditional, blackwork, fine line, ornamental, neo-traditional, realismo.",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
  openGraph: {
    title: "One More Ink — Tattoo & Piercing Studio Modena",
    description:
      "Studio di tatuaggi e piercing a Modena. Federica Morselli e Stefano Mazzotta: traditional, blackwork, fine line, ornamental, neo-traditional, realismo.",
    type: "website",
    locale: "it_IT",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "One More Ink — Tattoo & Piercing Studio Modena" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#E00000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              "name": "One More Ink",
              "description": "Studio di tatuaggi e piercing a Modena. Traditional, blackwork, fine line, ornamental, neo-traditional, realismo.",
              "url": "https://onemoreink.it",
              "telephone": "+393270991523",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via Nobili 20/22",
                "addressLocality": "Modena",
                "postalCode": "41126",
                "addressCountry": "IT"
              },
              "geo": { "@type": "GeoCoordinates", "latitude": 44.6494, "longitude": 10.9263 },
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday"], "opens": "13:00", "closes": "19:30" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:30", "closes": "18:00" }
              ],
              "image": "https://onemoreink.it/og-image.png",
              "priceRange": "€€",
              "sameAs": ["https://www.instagram.com/onemoreink/", "https://www.facebook.com/ONEmoreINK/"]
            })
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${inter.variable} ${caveat.variable} font-body antialiased`}
      >
        {/* Skip to content — accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:bg-rust focus:text-paper focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:uppercase focus:tracking-widest">
          Vai al contenuto
        </a>
<MotionProvider>
          <LenisProvider>
            {children}
            <CookieBanner />
          </LenisProvider>
        </MotionProvider>
      </body>
    </html>
  )
}
