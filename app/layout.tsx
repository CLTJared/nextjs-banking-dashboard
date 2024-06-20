import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-ibm-plex-serif'})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform built for everyone.",
  icons: '/icons/lovo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Using the inter.variable & ibmPlexSerif.variable allows us to use these fonts everywhere in layout.
          Defined above on lines 5 & 6.
      */}
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}