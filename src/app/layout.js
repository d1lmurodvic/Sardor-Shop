import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ThemeProvider from "@/components/ui/theme/themeProvider/page"; 
import { CartProvider } from "./context/CartContext"; // <- import CartProvider
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Sardor Shop",
  description: "You can buy more useful things from here",
  icons: {
    icon: "/alifshop.svg",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-base-300 flex flex-col`}
      >
        <ThemeProvider>
          <CartProvider> 
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          <ToastContainer/>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
