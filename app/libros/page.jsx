"use client";
import { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function LibrosPage() {
  const { agregarAlCarrito } = useCarrito();
  const [mensaje, setMensaje] = useState("");

  const libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", precio: 12000, imagen: "/images/cien-anos.jpg" },
    { id: 2, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", precio: 8000, imagen: "/images/principito.jpg" },
    { id: 3, titulo: "1984", autor: "George Orwell", precio: 10000, imagen: "/images/1984.jpg" },
    { id: 4, titulo: "Orgullo y prejuicio", autor: "Jane Austen", precio: 9500, imagen: "/images/orgullo-y-prejuicio.jpg" },
    { id: 5, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", precio: 13000, imagen: "/images/quijote.jpg" },
    { id: 6, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", precio: 11000, imagen: "/images/cronicadeunamuerteanunciada.jpg" },
    { id: 7, titulo: "Rayuela", autor: "Julio Cortázar", precio: 12500, imagen: "/images/rayuela.jpg" },
    { id: 8, titulo: "Los juegos del hambre", autor: "Suzanne Collins", precio: 14500, imagen: "/images/hambre.jpg" },
    { id: 9, titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", precio: 13200, imagen: "/images/piedraFilosofal.jpg" },
    { id: 10, titulo: "El Hobbit", autor: "J.R.R. Tolkien", precio: 12700, imagen: "/images/hobbit.jpg" },
    { id: 11, titulo: "Fahrenheit 451", autor: "Ray Bradbury", precio: 10300, imagen: "/images/farenheit.jpg" },
    { id: 12, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", precio: 11990, imagen: "/images/sombra.jpg" },
  ];

  // ✅ Función mejorada sin alert
  const handleAgregar = (libro) => {
    agregarAlCarrito(libro);
    setMensaje(`"${libro.titulo}" agregado al carrito 🛒`);
    setTimeout(() => setMensaje(""), 2500); // mensaje desaparece después de 2.5 segundos
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />

      {/*Mensaje temporal */}
      {mensaje && (
        <div className="fixed top-20 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md animate-fadeIn">
          {mensaje}
        </div>
      )}

      <section className="p-8 mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {libros.map((libro) => (
            <div
              key={libro.id}
              className="bg-white border rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-2xl transition"
            >
              <Link href={`/libros/${libro.id}`} className="flex flex-col items-center">
                <Image
                  src={libro.imagen}
                  alt={libro.titulo}
                  width={180}
                  height={250}
                  className="rounded-md mb-3"
                />
                <h2 className="text-lg font-semibold text-center">{libro.titulo}</h2>
                <p className="text-gray-500 text-sm">{libro.autor}</p>
                <p className="text-blue-700 font-bold mt-2">${libro.precio}</p>
              </Link>

              <button
                onClick={() => handleAgregar(libro)}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full"
              >
                Agregar al carrito 🛒
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
