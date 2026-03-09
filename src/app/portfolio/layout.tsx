import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio — One More Ink | Tattoo & Piercing Modena",
  description:
    "Guarda i lavori dei nostri artisti: tatuaggi traditional, blackwork, fine line, ornamental, neo-traditional e realistici. Studio a Modena.",
  openGraph: {
    title: "Portfolio — One More Ink | Tattoo & Piercing Modena",
    description:
      "Guarda i lavori dei nostri artisti: tatuaggi traditional, blackwork, fine line, ornamental, neo-traditional e realistici. Studio a Modena.",
    type: "website",
    locale: "it_IT",
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
