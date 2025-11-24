"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "./components/Header";

type Libro = {
  id: number;
  titulo: string;
  autor: string;
};

export default function HomePage() {
  const router = useRouter();

  const imagenes = [
    "/images/carrusel-1.jpg",
    "/images/carrusel-2a.jpg",
    "/images/carrusel-3a.jpg",
  ];

  const libros: Libro[] = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { id: 2, titulo: "El Principito", autor: "Antoine de Saint-Exupéry" },
    { id: 3, titulo: "1984", autor: "George Orwell" },
    { id: 4, titulo: "Orgullo y prejuicio", autor: "Jane Austen" },
    { id: 5, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { id: 6, titulo: "Rayuela", autor: "Julio Cortázar" },
  ];

  const [indice, setIndice] = useState(0);
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState<Libro[]>([]);


  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  const manejarBusqueda = (e: React.ChangeEvent<HTMLInputElement>) => {
  const valor = e.target.value.toLowerCase();
  setBusqueda(valor);

  if (valor.trim() === "") {
    setResultados([]);
    return;
  }

  const filtrados = libros.filter(
    (libro) =>
      libro.titulo.toLowerCase().includes(valor) ||
      libro.autor.toLowerCase().includes(valor)
  );

  setResultados(filtrados);
};


  return (
    <div className="relative h-screen w-screen overflow-hidden bg-white">
      {/* HEADER FIJO */}
      <Header />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex flex-col items-center justify-center h-full ">
        <p className="text-gray-700 mb-4 text-center max-w-2xl">
          Bienvenido a nuestra librería online. Explora títulos, autores y géneros que te inspirarán.
        </p>

        <div className="w-full max-w-md mb-4">
          <input
            type="text"
            placeholder="🔍 Buscar un libro o autor..."
            value={busqueda}
            onChange={manejarBusqueda}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        <div className="w-full max-w-md text-center overflow-hidden">
          {busqueda && resultados.length > 0 && (
            <ul className="bg-white rounded-lg shadow divide-y divide-gray-200 max-h-40 overflow-y-auto">
              {resultados.map((libro) => (
                <li
                  key={libro.id}
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => router.push(`/libros/${libro.id}`)}
                >
                  <span className="font-semibold">{libro.titulo}</span> —{" "}
                  <span className="text-gray-600">{libro.autor}</span>
                </li>
              ))}
            </ul>
          )}

          {busqueda && resultados.length === 0 && (
            <p className="text-gray-600 italic mt-2">
              ❌ No se encontró ningún libro con ese título o autor.
            </p>
          )}
        </div>

        <a
          href="/libros"
          className="mt-4 bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Ver catálogo completo
        </a>

        <div className="relative w-full h-[300px] overflow-hidden mt-6">
          {imagenes.map((imagen, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === indice ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={imagen}
                alt={`Banner ${i + 1}`}
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
