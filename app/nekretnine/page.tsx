import type { Metadata } from "next";
import PropertyCard from "../components/PropertyCard";

export const metadata: Metadata = {
  title: "Nekretnine u Istri",
  description: "Pregledajte naš katalog nekretnina u Istri — kuće, stanovi, vile, zemljišta. Filtrirajte po lokaciji, cijeni i tipu.",
};

const properties = [
  { image: "https://placehold.co/600x400/5C6B4F/FAFAF8?text=Vila+Rovinj", alt: "Vila Rovinj", badge: "Novo", title: "Moderna vila s bazenom", location: "Rovinj", details: ["🛏 4 spavaće", "📐 220 m²", "🏊 Bazen"], price: "650.000 €" },
  { image: "https://placehold.co/600x400/C4704E/FAFAF8?text=Kamena+kuća", alt: "Kamena kuća Motovun", badge: "Ekskluzivno", title: "Obnovljena kamena kuća", location: "Motovun", details: ["🛏 3 spavaće", "📐 150 m²", "🌳 Vrt"], price: "320.000 €" },
  { image: "https://placehold.co/600x400/3B7A9E/FAFAF8?text=Stan+Pula", alt: "Stan Pula", title: "Stan s pogledom na more", location: "Pula, Verudela", details: ["🛏 2 spavaće", "📐 85 m²", "🅿️ Parking"], price: "195.000 €" },
  { image: "https://placehold.co/600x400/5C6B4F/FAFAF8?text=Zemljište+Poreč", alt: "Zemljište Poreč", title: "Građevinsko zemljište", location: "Poreč, okolica", details: ["📐 1.200 m²", "🏗 Građevinsko"], price: "120.000 €" },
  { image: "https://placehold.co/600x400/C4704E/FAFAF8?text=Kuća+Umag", alt: "Kuća Umag", title: "Obiteljska kuća blizu mora", location: "Umag", details: ["🛏 5 spavaćih", "📐 280 m²", "🌳 Vrt 500 m²"], price: "480.000 €" },
  { image: "https://placehold.co/600x400/3B7A9E/FAFAF8?text=Stan+Novigrad", alt: "Stan Novigrad", badge: "Sniženo", title: "Dvosobni stan u centru", location: "Novigrad", details: ["🛏 2 spavaće", "📐 65 m²", "🏖 200m do mora"], price: "145.000 €" },
];

export default function PropertiesPage() {
  return (
    <>
      <section className="page-header">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold">Nekretnine</h1>
          <p className="mt-2">Pronađite svoju idealnu nekretninu u Istri</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10 p-4 bg-white rounded-xl border border-border">
            <select className="flex-1 min-w-[150px] bg-warm-white border border-border rounded-lg px-4 py-2.5 text-sm">
              <option>Sve lokacije</option>
              <option>Pula</option>
              <option>Rovinj</option>
              <option>Poreč</option>
              <option>Umag</option>
              <option>Novigrad</option>
              <option>Motovun</option>
              <option>Labin</option>
              <option>Buzet</option>
            </select>
            <select className="flex-1 min-w-[150px] bg-warm-white border border-border rounded-lg px-4 py-2.5 text-sm">
              <option>Svi tipovi</option>
              <option>Kuća</option>
              <option>Stan</option>
              <option>Vila</option>
              <option>Zemljište</option>
              <option>Poslovni prostor</option>
            </select>
            <select className="flex-1 min-w-[120px] bg-warm-white border border-border rounded-lg px-4 py-2.5 text-sm">
              <option>Cijena od</option>
              <option>50.000 €</option>
              <option>100.000 €</option>
              <option>200.000 €</option>
              <option>500.000 €</option>
            </select>
            <select className="flex-1 min-w-[120px] bg-warm-white border border-border rounded-lg px-4 py-2.5 text-sm">
              <option>Cijena do</option>
              <option>100.000 €</option>
              <option>200.000 €</option>
              <option>500.000 €</option>
              <option>1.000.000 €</option>
              <option>2.000.000+ €</option>
            </select>
            <button className="bg-terra hover:bg-terra-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
              Filtriraj
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((p, i) => (
              <PropertyCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
