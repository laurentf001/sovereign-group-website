import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { SovereignFooter, SovereignNav } from "@sovereign/ui";
import "@sovereign/brand/tokens.css";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sovereign Capital — Capital with Conscience",
    template: "%s · Sovereign Capital",
  },
  description:
    "A private capital group deploying patient, long-duration capital into South Africa's life rights retirement sector.",
  metadataBase: new URL("https://sovereigncapital.co.za"),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Sovereign Capital",
    description:
      "Capital with conscience. Care with authority.",
    url: "https://sovereigncapital.co.za",
    siteName: "Sovereign Capital",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <SovereignNav variant="sovereign-capital" />
        <main>{children}</main>
        <SovereignFooter variant="sovereign-capital" />
      </body>
    </html>
  );
}
