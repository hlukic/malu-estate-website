"use client";

import { useState, FormEvent } from "react";

const contactInfo = {
  email: "info@malu.estate",
  phone: "+385 52 123 456",
  address: "Flanatička 29, 52100 Pula, Hrvatska",
  whatsapp: "https://wa.me/38552123456",
  telegram: "https://t.me/maluestate",
};

const workingHours = [
  { day: "Ponedjeljak — Petak", hours: "09:00 — 17:00" },
  { day: "Subota", hours: "10:00 — 14:00" },
  { day: "Nedjelja", hours: "Zatvoreno" },
];

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-header">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold md:text-4xl">Kontakt</h1>
          <p className="mt-2 text-lg">Javite nam se — rado ćemo vam pomoći</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Forma */}
          <div>
            <h2 className="text-2xl font-semibold text-text">Pošaljite upit</h2>
            {submitted ? (
              <div className="mt-6 rounded-xl border border-olive/30 bg-olive/5 p-6 text-center">
                <p className="text-lg font-medium text-olive">Hvala na upitu!</p>
                <p className="mt-2 text-sm text-text-light">
                  Odgovorit ćemo vam u najkraćem mogućem roku.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text">
                    Ime i prezime *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-olive focus:ring-1 focus:ring-olive focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-olive focus:ring-1 focus:ring-olive focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-olive focus:ring-1 focus:ring-olive focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-text">
                    Tip upita *
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-olive focus:ring-1 focus:ring-olive focus:outline-none"
                  >
                    <option value="">Odaberite...</option>
                    <option value="kupnja">Kupnja nekretnine</option>
                    <option value="prodaja">Prodaja nekretnine</option>
                    <option value="najam">Najam</option>
                    <option value="procjena">Procjena vrijednosti</option>
                    <option value="ostalo">Ostalo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text">
                    Poruka *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-olive focus:ring-1 focus:ring-olive focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-olive px-6 py-3 text-sm font-semibold text-white transition hover:bg-olive-dark sm:w-auto"
                >
                  Pošalji upit
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-text">Kontakt podaci</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-text-light">Email</dt>
                  <dd>
                    <a href={`mailto:${contactInfo.email}`} className="text-terra hover:underline">
                      {contactInfo.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-text-light">Telefon</dt>
                  <dd>
                    <a href={`tel:${contactInfo.phone}`} className="text-terra hover:underline">
                      {contactInfo.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-text-light">Adresa</dt>
                  <dd>{contactInfo.address}</dd>
                </div>
              </dl>
            </div>

            <div className="flex gap-3">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
              >
                WhatsApp
              </a>
              <a
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-sea px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sea-light"
              >
                Telegram
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text">Radno vrijeme</h3>
              <dl className="mt-3 space-y-1 text-sm">
                {workingHours.map((wh) => (
                  <div key={wh.day} className="flex justify-between">
                    <dt className="text-text-light">{wh.day}</dt>
                    <dd className="font-medium">{wh.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Google Maps placeholder */}
            <div className="overflow-hidden rounded-xl border border-border">
              <div className="flex h-64 items-center justify-center bg-gray-100 text-sm text-text-light">
                <span>🗺️ Google Maps — Pula, Istra</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
