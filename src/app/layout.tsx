import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "W.F. Young - Healthier Animals. Happier Humans.",
  description: "Discover innovative solutions for animal wellness. At W.F. Young, we're reinventing animal wellness standards for happier pets and humans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
