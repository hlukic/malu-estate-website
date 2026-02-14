"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/nekretnine", label: "Nekretnine" },
  { href: "/o-nama", label: "O nama" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

const languages = ["HR", "EN", "IT", "DE"];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("HR");

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-[72px]">
        <Link href="/" className="text-2xl font-bold text-olive tracking-tight">
          Malu <span className="text-terra">Estate</span>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Izbornik"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-text transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>

        {/* Nav */}
        <nav
          className={`${
            menuOpen
              ? "flex flex-col absolute top-[72px] left-0 right-0 bg-warm-white border-b border-border shadow-lg p-6 gap-4"
              : "hidden"
          } md:flex md:static md:flex-row md:items-center md:gap-7 md:p-0 md:shadow-none md:border-0`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors hover:text-terra ${
                pathname === link.href ? "text-terra" : "text-text"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language selector */}
          <div className="flex gap-1.5 md:ml-3 md:pl-4 md:border-l md:border-border pt-3 md:pt-0 border-t md:border-t-0 border-border">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`text-xs font-semibold px-1.5 py-0.5 rounded transition-colors ${
                  activeLang === lang
                    ? "bg-olive text-white"
                    : "text-text-light hover:bg-olive/10"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
