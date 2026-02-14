"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-olive text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Koristimo kolačiće kako bismo poboljšali vaše iskustvo.{" "}
          <Link href="/pravno#kolacici" className="underline">
            Saznajte više
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="bg-terra hover:bg-terra-dark text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Prihvaćam
          </button>
          <button
            onClick={reject}
            className="border border-white/40 hover:border-white text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Odbij
          </button>
        </div>
      </div>
    </div>
  );
}
