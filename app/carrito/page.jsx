"use client";
//import { useCarrito } from "../../context/CarritoContext";
import Link from "next/link";
import { useCarrito } from "../context/CarritoContext";

export default function CarritoPage() {
  const {
    carrito,
    incrementarCantidad,
    disminuirCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
  } = useCarrito();

  const total = carrito.reduce(
    (acc, item) => acc + (item.precio || 0) * (item.cantidad || 1),
    0
  );

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">🛒 Tu Carrito</h1>

      {carrito.length === 0 ? (
        <div className="text-center text-gray-600 text-lg mt-10">
          <p>Tu carrito está vacío 😔</p>
          <Link
            href="/libros"
            className="mt-6 inline-block bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Ver catálogo
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md p-4 divide-y divide-gray-200">
            {carrito.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-4"
              >
                <div>
                  <p className="font-semibold text-lg">{item.titulo}</p>
                  <p className="text-gray-600 text-sm">{item.autor}</p>
                  <p className="text-sm text-gray-500">
                    Precio unitario: ${item.precio ?? 0}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Botón restar */}
                  <button
                    onClick={() => disminuirCantidad(item.id)}
                    className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300 text-lg"
                    aria-label={`Disminuir ${item.titulo}`}
                  >
                    −
                  </button>

                  <span className="font-semibold min-w-[24px] text-center">
                    {item.cantidad || 1}
                  </span>

                  {/* Botón sumar */}
                  <button
                    onClick={() => incrementarCantidad(item.id)}
                    className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300 text-lg"
                    aria-label={`Aumentar ${item.titulo}`}
                  >
                    +
                  </button>

                  {/* Subtotal */}
                  <span className="ml-4 font-semibold text-blue-700">
                    ${(item.precio || 0) * (item.cantidad || 1)}
                  </span>

                  {/* Eliminar */}
                  <button
                    onClick={() => eliminarDelCarrito(item.id)}
                    className="ml-4 text-red-600 hover:text-red-800 text-sm"
                    aria-label={`Eliminar ${item.titulo}`}
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total y vaciar carrito */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-xl font-bold text-blue-800">
              Total: ${total}
            </span>
            <div className="flex gap-3">
              <button
                onClick={vaciarCarrito}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Vaciar carrito
              </button>
              <Link
                href="/checkout"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Ir a pagar
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
