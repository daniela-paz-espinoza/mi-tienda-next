import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CarritoProvider } from "./context/CarritoContext"; // 👈 Importa el contexto global

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Librería Mundo de Letras",
  description: "Explora nuestra colección de libros en línea 📚",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 👇 Aquí envolvemos toda la app con el provider del carrito */}
        <CarritoProvider>
          {children}
        </CarritoProvider>
      </body>
    </html>
  );
}
