import Link from "next/link";

const pages = [
  { href: "/", label: "Početna" },
  { href: "/nekretnine", label: "Nekretnine" },
  { href: "/o-nama", label: "O nama" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

const locations = ["Pula", "Rovinj", "Poreč", "Umag", "Motovun"];

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h4 className="text-lg font-bold text-white mb-3">
              Malu <span className="text-terra">Estate</span>
            </h4>
            <p className="text-sm leading-relaxed">
              Moderna agencija za nekretnine u Istri. Pokretana naprednom tehnologijom i ljudskom stručnošću.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Stranice</h4>
            <ul className="space-y-2 text-sm">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="hover:text-white transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Lokacije</h4>
            <ul className="space-y-2 text-sm">
              {locations.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 info@malu.estate</li>
              <li>📍 Pula, Istra 🇭🇷</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <span>© 2026 Malu Estate — Pula, Istra 🇭🇷</span>
          <Link href="/pravno" className="hover:text-white/80 transition-colors">
            Pravne informacije
          </Link>
        </div>
      </div>
    </footer>
  );
}
