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
    default: "Retirement 247 — Life Rights Expertise. Always On.",
    template: "%s · Retirement 247",
  },
  description:
    "South Africa's specialist life rights advisory and sales platform for developers, landowners, funds, and REITs.",
  metadataBase: new URL("https://retirement247.co.za"),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Retirement 247",
    description: "Life rights expertise. Always on.",
    url: "https://retirement247.co.za",
    siteName: "Retirement 247",
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
        <SovereignNav variant="retirement247" />
        <main>{children}</main>
        <SovereignFooter variant="retirement247" />
      </body>
    </html>
  );
}
