import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pravne informacije",
  description: "Opći uvjeti poslovanja, politika privatnosti i informacije o kolačićima.",
};

export default function PravnoPage() {
  return (
    <>
      <section className="page-header">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold md:text-4xl">Pravne informacije</h1>
          <p className="mt-2 text-lg">Opći uvjeti, privatnost i kolačići</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="space-y-16">
          {/* 1. Opći uvjeti */}
          <article>
            <h2 className="text-2xl font-bold text-olive">1. Opći uvjeti poslovanja</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-text-light">
              <p>
                Malu Estate d.o.o. (u daljnjem tekstu: Posrednik) registrirana je agencija za posredovanje u prometu nekretnina upisana u Registar posrednika pri ministarstvu nadležnom za gospodarstvo, u skladu sa Zakonom o posredovanju u prometu nekretnina (NN 107/07, 144/12, 14/14).
              </p>

              <h3 className="text-base font-semibold text-text">1.1. Ugovor o posredovanju</h3>
              <p>
                Ugovor o posredovanju sklapa se u pisanom obliku na određeno vrijeme. Posrednički ugovor sadrži podatke o posredniku, nalogodavcu, vrsti i opisu nekretnine, posredničkoj naknadi te roku trajanja ugovora. Uobičajeno trajanje ugovora je 12 mjeseci.
              </p>

              <h3 className="text-base font-semibold text-text">1.2. Obveze posrednika</h3>
              <p>
                Posrednik se obvezuje: nastojati pronaći treću osobu za sklapanje posredovanog posla; upoznati nalogodavca s tržišnom cijenom nekretnine; izvršiti uvid u stanje nekretnine u zemljišnim knjigama; obaviti potrebne radnje radi predstavljanja nekretnine na tržištu; omogućiti pregled nekretnine; posredovati u pregovorima i nastojati da dođe do sklapanja ugovora; čuvati osobne podatke nalogodavca sukladno GDPR-u.
              </p>

              <h3 className="text-base font-semibold text-text">1.3. Posrednička naknada</h3>
              <p>
                Posrednička naknada (provizija) ugovara se ugovorom o posredovanju i iznosi 2–6% od ukupne kupoprodajne cijene nekretnine, ovisno o vrsti i vrijednosti nekretnine. Proviziju plaća strana koja je sklopila ugovor o posredovanju s Posrednikom. Naknada dospijeva na naplatu u trenutku sklapanja pravnog posla (kupoprodajnog ugovora, ugovora o najmu, itd.).
              </p>

              <h3 className="text-base font-semibold text-text">1.4. Osiguranje od odgovornosti</h3>
              <p>
                Posrednik ima zaključenu policu osiguranja od odgovornosti za štetu koju bi mogao prouzročiti nalogodavcu ili trećim osobama, u minimalnom iznosu od 100.000 EUR po štetnom događaju, odnosno 300.000 EUR ukupno godišnje.
              </p>

              <h3 className="text-base font-semibold text-text">1.5. Rješavanje sporova</h3>
              <p>
                Za sve sporove koji proizlaze iz ugovora o posredovanju nadležan je stvarno nadležan sud u Puli.
              </p>
            </div>
          </article>

          {/* 2. Politika privatnosti */}
          <article>
            <h2 className="text-2xl font-bold text-olive">2. Politika privatnosti</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-text-light">
              <p>
                Malu Estate d.o.o. posvećen je zaštiti vaših osobnih podataka u skladu s Općom uredbom o zaštiti podataka (GDPR — Uredba EU 2016/679) i Zakonom o provedbi Opće uredbe o zaštiti podataka (NN 42/18).
              </p>

              <h3 className="text-base font-semibold text-text">2.1. Voditelj obrade</h3>
              <p>
                Voditelj obrade podataka je Malu Estate d.o.o., Flanatička 29, 52100 Pula, Hrvatska. Email: info@malu.estate.
              </p>

              <h3 className="text-base font-semibold text-text">2.2. Koje podatke prikupljamo</h3>
              <p>
                Prikupljamo osobne podatke koje nam dobrovoljno pružite putem kontakt forme, emaila ili telefona: ime i prezime, email adresu, telefonski broj, sadržaj poruke. Također prikupljamo tehničke podatke putem kolačića (vidjeti sekciju 3).
              </p>

              <h3 className="text-base font-semibold text-text">2.3. Svrha i pravna osnova obrade</h3>
              <p>
                Vaše podatke obrađujemo u svrhu: odgovora na vaš upit (pravna osnova: legitimni interes); izvršenja ugovora o posredovanju (pravna osnova: ugovor); slanja obavijesti o nekretninama (pravna osnova: privola); ispunjenja zakonskih obveza (pravna osnova: zakonska obveza).
              </p>

              <h3 className="text-base font-semibold text-text">2.4. Rok čuvanja podataka</h3>
              <p>
                Osobne podatke čuvamo samo onoliko dugo koliko je potrebno za ostvarenje svrhe obrade, a najdulje 5 godina od zadnjeg kontakta, osim ako zakon ne nalaže dulji rok čuvanja.
              </p>

              <h3 className="text-base font-semibold text-text">2.5. Prava ispitanika</h3>
              <p>
                Imate pravo na: pristup svojim osobnim podacima; ispravak netočnih podataka; brisanje podataka (&quot;pravo na zaborav&quot;); ograničenje obrade; prenosivost podataka; prigovor na obradu; povlačenje privole u bilo kojem trenutku. Za ostvarivanje prava obratite se na info@malu.estate. Imate pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP).
              </p>

              <h3 className="text-base font-semibold text-text">2.6. Prijenos podataka</h3>
              <p>
                Vaše podatke ne prenosimo trećim stranama osim ako je to nužno za izvršenje usluge (npr. odvjetnik, javni bilježnik) ili ako smo na to zakonski obvezani. Podatke ne prenosimo izvan EU/EEA.
              </p>
            </div>
          </article>

          {/* 3. Kolačići */}
          <article>
            <h2 className="text-2xl font-bold text-olive">3. Kolačići</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-text-light">
              <p>
                Ova web stranica koristi kolačiće (cookies) kako bi osigurala ispravno funkcioniranje i poboljšala korisničko iskustvo.
              </p>

              <h3 className="text-base font-semibold text-text">3.1. Što su kolačići?</h3>
              <p>
                Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju prilikom posjeta web stranici. Omogućuju stranici da zapamti vaše postavke i preferencije.
              </p>

              <h3 className="text-base font-semibold text-text">3.2. Kategorije kolačića</h3>

              <div className="overflow-x-auto">
                <table className="mt-2 w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 font-semibold text-text">Kategorija</th>
                      <th className="py-2 pr-4 font-semibold text-text">Svrha</th>
                      <th className="py-2 font-semibold text-text">Trajanje</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 font-medium text-text">Nužni (tehnički)</td>
                      <td className="py-2 pr-4">Neophodni za funkcioniranje stranice (sesija, CSRF zaštita, pristanak na kolačiće)</td>
                      <td className="py-2">Sesija / 1 godina</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 font-medium text-text">Funkcionalni</td>
                      <td className="py-2 pr-4">Pamćenje jezičnih postavki i korisničkih preferencija</td>
                      <td className="py-2">1 godina</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 font-medium text-text">Analitički</td>
                      <td className="py-2 pr-4">Anonimna statistika posjećenosti (ako je implementirano)</td>
                      <td className="py-2">2 godine</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-semibold text-text">3.3. Upravljanje kolačićima</h3>
              <p>
                Prilikom prvog posjeta stranici prikazat će vam se obavijest o kolačićima. Možete prihvatiti ili odbiti neobavezne kolačiće. Kolačiće također možete kontrolirati putem postavki vašeg preglednika. Napominjemo da onemogućavanje nužnih kolačića može utjecati na funkcioniranje stranice.
              </p>
            </div>
          </article>
        </div>

        <p className="mt-16 text-xs text-text-light">
          Zadnje ažuriranje: 14. veljače 2026.
        </p>
      </section>
    </>
  );
}
