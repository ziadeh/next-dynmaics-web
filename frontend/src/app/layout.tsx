import { Poppins } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { SiteFooter, SiteHeader } from "@/components/site";

import "@/styles/globals.css";
import CookieBanner from "@/components/shared/CookieBanner";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

import Script from "next/script";

export const metadata: Metadata = {
  title: "Crafting Innovative Digital Solutions | Next Dynamics Inc.",
  description:
    "Next Dynamics Inc. crafts innovative digital solutions—your strategic partner in developing technologies that translate visions into measurable success.",
  openGraph: {
    images: ["/share-image.png"],
  },
  metadataBase: new URL("https://nextdynamicsinc.com"),
  alternates: { canonical: "/" },
  icons: [
    { rel: "icon", url: "/favicon-48.png", sizes: "48x48" },
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://nextdynamicsinc.com/#website",
      url: "https://nextdynamicsinc.com/",
      name: "Next Dynamics Inc.",
      alternateName: ["NEXT Dynamics", "Next Dynamics"],
      publisher: { "@id": "https://nextdynamicsinc.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://nextdynamicsinc.com/#organization",
      name: "Next Dynamics Inc.",
      url: "https://nextdynamicsinc.com/",
      slogan: "Crafting Innovative Digital Solutions",
      logo: {
        "@type": "ImageObject",
        "@id": "https://nextdynamicsinc.com/#logo",
        url: "https://nextdynamicsinc.com/static/logo-512.png",
        contentUrl: "https://nextdynamicsinc.com/static/logo-512.png",
        width: 512,
        height: 512,
      },
      sameAs: ["https://www.linkedin.com/company/next-dynamics-inc."],
      // contactPoint: [{ "@type": "ContactPoint", contactType: "customer support", email: "support@nextdynamicsinc.com" }]
    },
    {
      "@type": "WebPage",
      "@id": "https://nextdynamicsinc.com/#webpage",
      url: "https://nextdynamicsinc.com/",
      name: "Crafting Innovative Digital Solutions | Next Dynamics Inc.",
      headline: "Crafting Innovative Digital Solutions",
      description:
        "Next Dynamics Inc. crafts innovative digital solutions—your strategic partner in developing technologies that translate visions into measurable success.",
      isPartOf: { "@id": "https://nextdynamicsinc.com/#website" },
      about: { "@id": "https://nextdynamicsinc.com/#organization" },
      primaryImageOfPage: { "@id": "https://nextdynamicsinc.com/#logo" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <Script
          id="jsonld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-nd-secondary-950">
        <TRPCReactProvider>
          <CookieBanner />
          <SiteHeader />
          <div className="flex-1">
            <div className="min-h-1/2">{children}</div>
          </div>
          <SiteFooter />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
