import Link from "next/link";
import PropertyCard from "./components/PropertyCard";

const featuredProperties = [
  {
    image: "https://placehold.co/600x400/5C6B4F/FAFAF8?text=Vila+Rovinj",
    alt: "Vila u Rovinju",
    badge: "Novo",
    title: "Moderna vila s bazenom",
    location: "Rovinj",
    details: ["🛏 4 spavaće", "📐 220 m²", "🏊 Bazen"],
    price: "650.000 €",
  },
  {
    image: "https://placehold.co/600x400/C4704E/FAFAF8?text=Kamena+kuća",
    alt: "Kamena kuća Motovun",
    badge: "Ekskluzivno",
    title: "Obnovljena kamena kuća",
    location: "Motovun",
    details: ["🛏 3 spavaće", "📐 150 m²", "🌳 Vrt"],
    price: "320.000 €",
  },
  {
    image: "https://placehold.co/600x400/3B7A9E/FAFAF8?text=Stan+Pula",
    alt: "Stan u Puli",
    title: "Stan s pogledom na more",
    location: "Pula, Verudela",
    details: ["🛏 2 spavaće", "📐 85 m²", "🅿️ Parking"],
    price: "195.000 €",
  },
];

const whyIstra = [
  { icon: "🌊", title: "More i priroda", desc: "Kristalno čisto more, netaknuta priroda, nacionalni parkovi i prekrasne plaže na svakom koraku." },
  { icon: "🍷", title: "Gastronomija", desc: "Tartufi, maslinovo ulje, vrhunska vina — Istra je gastronomski raj s Michelinovim restoranima." },
  { icon: "🏛️", title: "Kultura i povijest", desc: "Od rimskog Amfiteatra u Puli do srednjovjekovnih gradića — bogata povijest na svakom koraku." },
  { icon: "✈️", title: "Povezanost", desc: "Zračna luka Pula, blizina Italije i Slovenije, odlična cestovna infrastruktura." },
  { icon: "📈", title: "Investicijski potencijal", desc: "Rastuće tržište nekretnina, visoki prinosi od najma, stabilna potražnja tijekom cijele godine." },
  { icon: "☀️", title: "Kvaliteta života", desc: "Mediteranska klima, siguran život, pristupačne cijene i topli ljudi." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center text-white"
        style={{
          background:
            "linear-gradient(135deg, rgba(92,107,79,0.85), rgba(59,122,158,0.7)), url('https://placehold.co/1920x1080/5C6B4F/FAFAF8?text=Istra+Panorama') center/cover",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-warm-white to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-2">
              Dobrodošli u Istru
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Pronađite svoj dom na Mediteranu
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed">
              Od kamenih kuća u unutrašnjosti do vila uz more — Malu Estate pomaže vam pronaći savršenu nekretninu u najljepšoj regiji Hrvatske.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/nekretnine"
                className="bg-terra hover:bg-terra-dark text-white font-semibold px-7 py-3 rounded-xl transition-all hover:-translate-y-0.5"
              >
                Pregledaj nekretnine
              </Link>
              <Link
                href="/kontakt"
                className="border-2 border-white/60 hover:border-white hover:bg-white/15 text-white font-semibold px-7 py-3 rounded-xl transition-all"
              >
                Kontaktirajte nas
              </Link>
            </div>
          </div>

          {/* Search bar */}
          <div className="mt-12 bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col sm:flex-row gap-3 max-w-3xl">
            <select className="flex-1 bg-white text-text rounded-lg px-4 py-3 text-sm">
              <option>Lokacija</option>
              <option>Pula</option>
              <option>Rovinj</option>
              <option>Poreč</option>
              <option>Umag</option>
              <option>Novigrad</option>
              <option>Motovun</option>
            </select>
            <select className="flex-1 bg-white text-text rounded-lg px-4 py-3 text-sm">
              <option>Tip nekretnine</option>
              <option>Kuća</option>
              <option>Stan</option>
              <option>Vila</option>
              <option>Zemljište</option>
            </select>
            <select className="flex-1 bg-white text-text rounded-lg px-4 py-3 text-sm">
              <option>Cijena do</option>
              <option>100.000 €</option>
              <option>200.000 €</option>
              <option>500.000 €</option>
              <option>1.000.000 €</option>
            </select>
            <button className="bg-terra hover:bg-terra-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Pretraži
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-2">
              Istaknute nekretnine
            </p>
            <h2 className="text-3xl font-semibold mb-3">Odabrano za vas</h2>
            <p className="text-text-light">
              Ručno odabrane nekretnine koje predstavljaju najbolje od Istre
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((p, i) => (
              <PropertyCard key={i} {...p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/nekretnine"
              className="inline-block border-2 border-olive text-olive hover:bg-olive hover:text-white font-semibold px-7 py-3 rounded-xl transition-colors"
            >
              Pogledaj sve nekretnine →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Istra */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-2">
              Zašto Istra
            </p>
            <h2 className="text-3xl font-semibold mb-3">Regija koja osvaja srca</h2>
            <p className="text-text-light">
              Istra je najtraženija destinacija za kupnju nekretnina u Hrvatskoj
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyIstra.map((item, i) => (
              <div
                key={i}
                className="bg-warm-white rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-olive to-olive-dark text-white text-center">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-3xl font-semibold mb-3">Tražite nekretninu u Istri?</h2>
          <p className="text-white/85 mb-8">
            Javite nam se i pomoći ćemo vam pronaći savršenu nekretninu — bez obveze.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-olive font-semibold px-8 py-3 rounded-xl hover:shadow-lg transition-all"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </section>
    </>
  );
}
