import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Sweet Dreams Bakery - Artisan Cakes & Pastries",
  description: "Discover handcrafted cakes, pastries, and baked goods made with love. From classic vanilla cakes to seasonal specialties, every bite is a sweet dream.",
  keywords: "bakery, cakes, pastries, artisan, handcrafted, desserts, custom cakes",
  authors: [{ name: "Sweet Dreams Bakery" }],
  openGraph: {
    title: "Sweet Dreams Bakery",
    description: "Artisan cakes and pastries made with love",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
