import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Malu Estate — Nekretnine u Istri",
    template: "%s | Malu Estate",
  },
  description:
    "Moderna agencija za nekretnine u Istri. Prodaja, najam i upravljanje nekretninama u Puli, Rovinju, Poreču i cijeloj Istri.",
  metadataBase: new URL("https://malu.estate"),
  openGraph: {
    title: "Malu Estate — Nekretnine u Istri",
    description:
      "Pronađite svoj dom u Istri. Kuće, stanovi, zemljišta — premium nekretnine uz more.",
    url: "https://malu.estate",
    siteName: "Malu Estate",
    type: "website",
    images: [
      {
        url: "https://placehold.co/1200x630/5C6B4F/FAFAF8?text=Malu+Estate",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
