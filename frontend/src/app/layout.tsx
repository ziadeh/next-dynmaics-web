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

export const metadata: Metadata = {
  title: "Next Dynamics",
  description:
    "Your strategic partner in crafting innovative technologies that translate visions into measurable success.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    images: ["/share-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="bg-nd-secondary-950 flex min-h-screen flex-col">
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
