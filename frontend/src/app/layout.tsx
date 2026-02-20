import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import AppSidebar from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DevAI - E-commerce",
  description: "Plataforma de e-commerce simples para microempreendedores",
};

import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1 container py-6 flex gap-16">
            <AppSidebar />
            <main className="flex-1 w-full">
              {children}
            </main>
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

