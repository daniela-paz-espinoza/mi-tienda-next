"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Header from "../../components/Header";
import { useCarrito } from "../../context/CarritoContext";

export default function DetalleCliente({ libro }) {
  const router = useRouter();
  const { agregarAlCarrito } = useCarrito();
  const [mensaje, setMensaje] = useState("");

  const handleAgregar = () => {
    agregarAlCarrito(libro);
    setMensaje(`"${libro.titulo}" agregado al carrito 🛒`);
    setTimeout(() => setMensaje(""), 2500);
  };

  return (
    <main className="flex flex-col items-center p-8 min-h-screen bg-gray-50">
      <Header />

      {mensaje && (
        <div className="fixed top-20 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md">
          {mensaje}
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl text-center mt-24">
        <Image
          src={libro.imagen}
          alt={libro.titulo}
          width={250}
          height={350}
          className="rounded-lg mx-auto mb-6"
        />

        <h1 className="text-3xl font-bold mb-2 text-blue-700">{libro.titulo}</h1>
        <p className="text-gray-600 italic mb-4">por {libro.autor}</p>
        <p className="text-gray-800 mb-6">{libro.descripcion}</p>
        <p className="text-blue-700 font-bold text-lg mb-6">${libro.precio}</p>

        <button
          onClick={handleAgregar}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Agregar al carrito
        </button>

        <button
          onClick={() => router.push("/libros")}
          className="ml-4 bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400"
        >
          Volver
        </button>
      </div>
    </main>
  );
}
