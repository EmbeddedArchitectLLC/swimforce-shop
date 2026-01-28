import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CartProvider } from "@/components/cart/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwimForce - Swimming Training Accessories",
  description: "Professional swimming training accessories and gear. Elevate your swim training with SwimForce.",
};

function Navigation() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            {/* Logo placeholder - replace with actual logo */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">SF</span>
            </div>
            <span className="font-bold text-xl">SwimForce</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/shop" className="hover:text-blue-200 transition">
              Shop
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition">
              About
            </Link>
            <Link href="/training" className="hover:text-blue-200 transition">
              Training
            </Link>
            <Link
              href="/cart"
              className="bg-white/15 hover:bg-white/25 transition px-3 py-2 rounded-lg"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">SwimForce</h3>
            <p className="text-gray-400">
              Professional swimming training accessories for athletes of all levels.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/training" className="hover:text-white">Training Programs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-400">
              Email: info@swimforce.com<br />
              Follow us on social media
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} SwimForce. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <CartProvider>
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
