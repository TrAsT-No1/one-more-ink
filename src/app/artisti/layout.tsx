import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artisti — One More Ink | Federica Morselli & Stefano Mazzotta",
  description:
    "Federica Morselli e Stefano Mazzotta: due mani diverse, una visione comune. Traditional, blackwork, fine line, ornamental, neo-traditional, realismo.",
  openGraph: {
    title: "Artisti — One More Ink | Federica Morselli & Stefano Mazzotta",
    description:
      "Federica Morselli e Stefano Mazzotta: due mani diverse, una visione comune. Traditional, blackwork, fine line, ornamental, neo-traditional, realismo.",
    type: "website",
    locale: "it_IT",
  },
}

export default function ArtistiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
