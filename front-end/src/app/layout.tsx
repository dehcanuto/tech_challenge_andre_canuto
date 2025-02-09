import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import TopHeader from "@/components/organisms/TopHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnCar | Encontre e financie o seu carro novo ou seminovo",
  description: "Todo mundo tem crédito na onCar. Faça sua simulação agora mesmo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader/>
        <main className="bg-gray-900 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
