import type { Metadata } from "next"
import { Syne, Inter, Caveat } from "next/font/google"
import { MotionProvider } from "@/components/providers/motion-provider"
import { LenisProvider } from "@/components/providers/lenis-provider"
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
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body
        className={`${syne.variable} ${inter.variable} ${caveat.variable} font-body antialiased`}
      >
        {/* SVG filter for uniform logo outline — scales with any size */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <filter id="logo-outline-filter">
              <feMorphology in="SourceAlpha" operator="dilate" radius="5" result="expanded" />
              <feFlood floodColor="white" result="white" />
              <feComposite in="white" in2="expanded" operator="in" result="outline" />
              <feMerge>
                <feMergeNode in="outline" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        <MotionProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </MotionProvider>
      </body>
    </html>
  )
}
