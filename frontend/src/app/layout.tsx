import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "SystemAI — Gestão Inteligente",
  description: "Plataforma avançada de gestão para e-commerce e varejo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body className="min-h-screen bg-[#F8FAFC]">
          <Header />
          <div className="flex pt-16">
            <Sidebar />
            <main className="flex-1 p-8 ml-64">
              {children}
            </main>
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
