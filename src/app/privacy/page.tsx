import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { STUDIO_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy — One More Ink",
  description: "Informativa sulla privacy e trattamento dei dati personali di One More Ink Tattoo Studio.",
}

export default function PrivacyPage() {
  return (
    <main>
      <Nav />
      <section className="pt-52 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl font-extrabold mb-8 md:text-5xl">Privacy Policy</h1>
          <p className="text-ink-muted text-sm mb-8">Ultimo aggiornamento: Marzo 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-ink-muted leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-extrabold text-ink mb-3">1. Titolare del Trattamento</h2>
              <p>
                Il titolare del trattamento dei dati è <strong>{STUDIO_INFO.name}</strong>, con sede in {STUDIO_INFO.address}.
                Per qualsiasi informazione puoi contattarci al numero {STUDIO_INFO.phone}.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-extrabold text-ink mb-3">2. Dati Raccolti</h2>
              <p>Questo sito web non raccoglie dati personali tramite form di contatto. Le interazioni avvengono tramite:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>WhatsApp (gestito da Meta Platforms, Inc.)</li>
                <li>Telefonate dirette</li>
                <li>Visite in studio</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-extrabold text-ink mb-3">3. Cookie</h2>
              <p>
                Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento del sito.
                Non utilizziamo cookie di profilazione o di terze parti per finalità di marketing.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-extrabold text-ink mb-3">4. Servizi di Terze Parti</h2>
              <p>Il sito integra i seguenti servizi esterni:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Google Maps</strong> — per mostrare la posizione dello studio</li>
                <li><strong>Google Fonts</strong> — per il caricamento dei font tipografici</li>
              </ul>
              <p className="mt-2">
                Questi servizi possono raccogliere dati in modo autonomo. Ti invitiamo a consultare le rispettive privacy policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-extrabold text-ink mb-3">5. Diritti dell&apos;Utente</h2>
              <p>
                Ai sensi del Regolamento UE 2016/679 (GDPR), hai diritto di accedere ai tuoi dati personali,
                richiederne la rettifica o la cancellazione, limitarne il trattamento e opporti al trattamento stesso.
                Per esercitare i tuoi diritti, contattaci al numero {STUDIO_INFO.phone}.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-extrabold text-ink mb-3">6. Modifiche</h2>
              <p>
                Ci riserviamo il diritto di modificare questa informativa in qualsiasi momento.
                Le modifiche saranno pubblicate su questa pagina con la data di ultimo aggiornamento.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-ink/10">
            <Link href="/" className="text-sm font-display uppercase tracking-widest text-rust hover:text-rust-dark transition-colors">
              ← Torna alla Home
            </Link>
          </div>
        </div>
      </section>

      <footer className="tattoo-accent bg-ink text-paper/40 border-t border-paper/5 px-6 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs">© {new Date().getFullYear()} {STUDIO_INFO.name} — Tutti i diritti riservati</p>
        </div>
      </footer>
    </main>
  )
}
