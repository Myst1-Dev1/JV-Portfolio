import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "João Victor | Desenvolvedor Fullstack",
  description: "Portfólio de João Victor, Engenheiro Fullstack especializado em arquitetura web de alta performance, microsserviços e interfaces de usuário impecáveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} scroll-smooth dark`}
    >
      <body className="bg-[#121212] text-gray-100 font-sans min-h-screen antialiased selection:bg-[#00FFFF] selection:text-black">
        {children}
      </body>
    </html>
  );
}

