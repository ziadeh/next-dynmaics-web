import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/lib/utils";
import { SiteFooter, SiteHeader } from "@/components/site";

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
      <body className="flex min-h-screen flex-col bg-nd-secondary-950">
        <TRPCReactProvider>
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
