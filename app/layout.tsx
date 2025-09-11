import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TradeAfrika Market Day",
  description: "Showcasing Africa's SMEs,Unlocking Trade Potential",
  keywords: [
    "tradeafrika",
    "market day",
    "tradeafrikamarketplace",
    "Joshua Ahimbisibwe",
    "african trade",
    "AfCFTA",
    "marketplace",
    "b2b",
    "B2B",
    "women SMEs",
    "youth SMEs",
    "Intra-African trade",
    "innovation hub",
    "digital trade",
    "green trade"
  ],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${roboto.className} text-[#0F2A19] antialiased`}>
        {children}
      </body>
    </html>
  );
}
