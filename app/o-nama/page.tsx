import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nama",
  description: "Malu Estate je moderna agencija za nekretnine u Istri, pokretana naprednom tehnologijom i ljudskom stručnošću. Sjedište u Puli.",
};

const values = [
  { icon: "🤖", title: "Tehnološka inovacija", desc: "Koristimo AI za analizu tržišta i procjenu vrijednosti nekretnina, uz ljudski nadzor u svakom koraku." },
  { icon: "🤝", title: "Transparentnost", desc: "Otvoreni smo o našim metodama rada, cijenama i procesima. Bez iznenađenja." },
  { icon: "🏠", title: "Lokalno znanje", desc: "Poznajemo svaki kutak Istre — od tržišnih trendova do prostornih planova općina." },
  { icon: "⚖️", title: "Pravna sigurnost", desc: "Temeljita provjera dokumentacije za svaku nekretninu — vlasnički list, dozvole, tereti." },
];

const steps = [
  { icon: "1️⃣", title: "Razgovor", desc: "Saslušamo vaše želje, potrebe i budžet. Bez obveze." },
  { icon: "2️⃣", title: "Pretraga i analiza", desc: "Koristimo napredne alate za pronalazak nekretnina koje odgovaraju vašim kriterijima." },
  { icon: "3️⃣", title: "Razgledavanje", desc: "Organiziramo razgledavanje odabranih nekretnina uz stručno vođenje." },
  { icon: "4️⃣", title: "Pravna provjera", desc: "Temeljita provjera dokumentacije — vlasnički list, dozvole, tereti, prostorni plan." },
  { icon: "5️⃣", title: "Pregovaranje", desc: "Zastupamo vaše interese i pregovaramo najbolje uvjete." },
  { icon: "6️⃣", title: "Zaključenje", desc: "Pratimo vas kroz potpis ugovora, prijenos vlasništva i predaju ključeva." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold">O nama</h1>
          <p className="mt-2">Upoznajte Malu Estate — vaš partner za nekretnine u Istri</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-2">Naša priča</p>
              <h2 className="text-3xl font-semibold mb-6">Moderna agencija za modernog klijenta</h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>Malu Estate je moderna agencija za nekretnine pokretana naprednom tehnologijom i ljudskom stručnošću. Sa sjedištem u Puli, pokrivamo cijelu Istru — od obale do unutrašnjosti, od Umaga do Labina.</p>
                <p>Vjerujemo u transparentnost. Koristimo najnovije AI alate za analizu tržišta, procjenu vrijednosti i optimizaciju procesa, dok naš tim stručnjaka osigurava ljudski pristup svakom klijentu.</p>
                <p>Naš pristup je jednostavan: kombiniramo duboko poznavanje istarskog tržišta nekretnina s modernim alatima kako bismo vam pružili najbolju moguću uslugu. Bez skrivenih naknada, bez pritiska — samo profesionalan savjet i podrška na svakom koraku.</p>
              </div>
            </div>
            <div>
              <img
                src="https://placehold.co/600x500/5C6B4F/FAFAF8?text=Malu+Estate+Tim"
                alt="Malu Estate tim"
                className="rounded-xl w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center border border-border">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h4 className="font-semibold mb-2">{v.title}</h4>
                <p className="text-text-light text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-2">Naš pristup</p>
          <h2 className="text-3xl font-semibold mb-3">Kako radimo</h2>
          <p className="text-text-light max-w-xl mx-auto mb-12">
            Od prvog kontakta do predaje ključeva — pratimo vas kroz cijeli proces
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="bg-warm-white rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-text-light text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
