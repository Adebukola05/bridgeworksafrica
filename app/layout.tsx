import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CursorGlow } from "@/components/ui";
import { BriefingModalProvider } from "@/components/lead-gen/briefing-modal-context";
import { BriefingModal } from "@/components/lead-gen/briefing-modal";
import { ToolkitPopup } from "@/components/lead-gen/toolkit-popup";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.bridgeworksafrica.com";
const siteName = "BridgeWorks Africa";
const siteDescription =
  "BridgeWorks Africa researches, maps and maintains intelligence on informal businesses across Nigeria, connecting them with governments, corporations, financial institutions and development partners.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName}, Africa's Informal Economy Research & Intelligence Partner`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "informal economy research Africa",
    "Nigeria informal sector intelligence",
    "MSME research Nigeria",
    "economic inclusion advisory",
    "BridgeWorks Africa",
  ],
  authors: [{ name: siteName }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName,
    title: `${siteName}, Africa's Informal Economy Research & Intelligence Partner`,
    description: siteDescription,
    images: [
      {
        url: "/og/bridgeworks-africa-og.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Africa's informal economy research & intelligence partner.",
    images: ["/og/bridgeworks-africa-og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  alternateName: "BridgeWorks",
  slogan: "Building Better Business Communities",
  url: siteUrl,
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ibadan",
    addressRegion: "Oyo State",
    addressCountry: "NG",
  },
  areaServed: "NG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <CursorGlow />
        <BriefingModalProvider>
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          <BriefingModal />
          <ToolkitPopup />
        </BriefingModalProvider>
      </body>
    </html>
  );
}
