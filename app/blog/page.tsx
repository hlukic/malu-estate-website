import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Savjeti, vodiči i novosti o nekretninama u Istri i Hrvatskoj.",
};

const articles = [
  {
    slug: "kupnja-nekretnine-u-istri-vodic-2026",
    title: "Kupnja nekretnine u Istri — vodič za 2026.",
    date: "10. veljače 2026.",
    excerpt:
      "Sve što trebate znati prije kupnje nekretnine u Istri — od pravnih koraka, poreza, do savjeta za odabir lokacije. Kompletan vodič za kupce u 2026. godini.",
    image: "https://placehold.co/800x450/5C6B4F/FAFAF8?text=Kupnja+nekretnine",
  },
  {
    slug: "zasto-je-istra-idealna-za-investiciju",
    title: "Zašto je Istra idealna za investiciju u nekretnine",
    date: "3. veljače 2026.",
    excerpt:
      "Istra bilježi stalan rast cijena nekretnina i turističke potražnje. Saznajte zašto investitori iz cijele Europe biraju upravo Istru.",
    image: "https://placehold.co/800x450/3B7A9E/FAFAF8?text=Investicija+Istra",
  },
  {
    slug: "legalizacija-nekretnina",
    title: "Legalizacija nekretnina — što trebate znati",
    date: "25. siječnja 2026.",
    excerpt:
      "Mnoge nekretnine u Istri nemaju uporabnu dozvolu. Objašnjavamo postupak legalizacije, rokove i troškove koje možete očekivati.",
    image: "https://placehold.co/800x450/C4704E/FAFAF8?text=Legalizacija",
  },
  {
    slug: "porez-na-promet-nekretnina-2026",
    title: "Porez na promet nekretnina u Hrvatskoj 2026.",
    date: "18. siječnja 2026.",
    excerpt:
      "Porez na promet nekretnina iznosi 3% tržišne vrijednosti. Saznajte tko je oslobođen, kako se prijavljuje i koji su rokovi.",
    image: "https://placehold.co/800x450/5C6B4F/FAFAF8?text=Porez+nekretnine",
  },
  {
    slug: "kamene-kuce-istre",
    title: "Kamene kuće Istre — tradicija i moderna obnova",
    date: "10. siječnja 2026.",
    excerpt:
      "Istarske kamene kuće su simbol regije. Kako ih obnoviti uz poštivanje tradicije, a opet dobiti moderan i udoban dom?",
    image: "https://placehold.co/800x450/3B7A9E/FAFAF8?text=Kamene+ku%C4%87e",
  },
  {
    slug: "kratkorocni-najam-istra",
    title: "Kratkoročni najam u Istri — isplati li se?",
    date: "2. siječnja 2026.",
    excerpt:
      "Airbnb, Booking i drugi portali donose prihod vlasnicima nekretnina u Istri. Analiziramo isplativost, propise i očekivani povrat.",
    image: "https://placehold.co/800x450/C4704E/FAFAF8?text=Kratko%C4%8Dni+najam",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="page-header">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold md:text-4xl">Blog</h1>
          <p className="mt-2 text-lg">Savjeti, vodiči i novosti o nekretninama u Istri</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.slug}
              className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.image}
                alt={a.title}
                className="h-48 w-full object-cover transition group-hover:scale-105"
              />
              <div className="p-5">
                <time className="text-sm text-text-light">{a.date}</time>
                <h2 className="mt-2 text-lg font-semibold leading-snug text-text">
                  {a.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {a.excerpt}
                </p>
                <Link
                  href={`/blog/${a.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-terra hover:text-terra-dark"
                >
                  Pročitajte više →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
