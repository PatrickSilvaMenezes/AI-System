import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DevAI - E-commerce",
  description: "Plataforma de e-commerce simples para microempreendedores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col bg-surface-bg`}>
        <Header />
        <main className="flex-1 container max-w-[1200px] mx-auto py-6 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
