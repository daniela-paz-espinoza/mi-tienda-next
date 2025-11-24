"use client";
import Link from "next/link";
import Image from "next/image";
import { useCarrito } from "../context/CarritoContext";

export default function Header() {
  const { carrito } = useCarrito();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-8 py-3">
      {/* 🔹 Contenedor principal con posición relativa */}
      <div className="relative w-full flex items-center justify-between">
        {/* 🟦 Logo (izquierda) */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/LOGO2.png" // 👈 tu logo en /public/images/
            alt="Logo Librería"
            width={45}
            height={45}
            className="rounded-md hover:scale-105 transition-transform duration-200"
          />
        </Link>

        {/* 💜 Título centrado */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-blue-700 text-center">
          MEME
        </h1>

        {/* 🟩 Carrito (derecha) */}
        <Link href="/carrito" className="relative group">
          <div className="flex items-center gap-2 cursor-pointer text-blue-700 hover:text-blue-900 transition">
            <span className="font-semibold">🛒 Carrito</span>
            {carrito.length > 0 && (
              <span className="bg-blue-700 text-white px-2 py-0.5 rounded-full text-sm font-bold">
                {carrito.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}
