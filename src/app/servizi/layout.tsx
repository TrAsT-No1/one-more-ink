import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servizi — One More Ink | Tatuaggi, Piercing, Cover Up",
  description:
    "Tatuaggi custom, cover up, piercing professionali e consulenza gratuita. Studio a Modena — ti seguiamo dal primo incontro al risultato finale.",
  openGraph: {
    title: "Servizi — One More Ink | Tatuaggi, Piercing, Cover Up",
    description:
      "Tatuaggi custom, cover up, piercing professionali e consulenza gratuita. Studio a Modena — ti seguiamo dal primo incontro al risultato finale.",
    type: "website",
    locale: "it_IT",
  },
}

export default function ServiziLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
