import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-body-face",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "One More Ink | Tattoo Studio",
  description:
    "Studio di tatuaggi a Roma. Stili personalizzati, artisti professionisti, esperienza unica.",
  openGraph: {
    title: "One More Ink | Tattoo Studio",
    description:
      "Studio di tatuaggi a Roma. Stili personalizzati, artisti professionisti, esperienza unica.",
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
        className={`${cormorant.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
