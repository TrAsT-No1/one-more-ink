import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ink text-paper flex flex-col items-center justify-center px-6">
      <Image src="/logo.png" alt="One More Ink" width={120} height={166} className="mb-8 opacity-40" />
      <h1 className="font-display text-6xl font-extrabold mb-4 md:text-8xl">404</h1>
      <p className="font-hand text-xl text-rust-light mb-2">Pagina non trovata</p>
      <p className="text-paper/50 text-sm mb-8 text-center max-w-sm">
        Questa pagina non esiste — ma il tuo prossimo tatuaggio sì.
      </p>
      <Link
        href="/"
        className="font-display font-bold uppercase tracking-widest text-sm bg-rust text-paper px-8 py-4 hover:bg-paper hover:text-ink transition-colors"
      >
        Torna alla Home
      </Link>
    </main>
  )
}
