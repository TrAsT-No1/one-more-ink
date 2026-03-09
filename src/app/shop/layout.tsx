import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop — One More Ink | Merch & Accessori",
  description:
    "T-shirt, felpe, cappellini e accessori disegnati dagli artisti di One More Ink. Pezzi limitati, design esclusivi. Studio a Modena.",
  openGraph: {
    title: "Shop — One More Ink | Merch & Accessori",
    description:
      "T-shirt, felpe, cappellini e accessori disegnati dagli artisti di One More Ink. Pezzi limitati, design esclusivi.",
    type: "website",
    locale: "it_IT",
  },
}

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
