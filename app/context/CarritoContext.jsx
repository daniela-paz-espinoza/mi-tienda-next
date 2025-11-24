"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    try {
      const carritoGuardado = localStorage.getItem("carrito");
      if (carritoGuardado) setCarrito(JSON.parse(carritoGuardado));
    } catch (e) {
      console.error("Error leyendo carrito de localStorage", e);
    }
  }, []);

  // Guardar carrito en localStorage al cambiar
  useEffect(() => {
    try {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } catch (e) {
      console.error("Error guardando carrito en localStorage", e);
    }
  }, [carrito]);

  // Agregar producto (si existe incrementa cantidad)
  const agregarAlCarrito = (libro) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === libro.id);
      if (existe) {
        return prev.map((item) =>
          item.id === libro.id
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...libro, cantidad: 1 }];
    });
  };

  // Incrementar cantidad (por id)
  const incrementarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: (item.cantidad || 1) + 1 } : item
      )
    );
  };

  // Disminuir cantidad (si llega a 0 lo elimina)
  const disminuirCantidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, cantidad: (item.cantidad || 1) - 1 } : item
        )
        .filter((item) => (item.cantidad || 0) > 0)
    );
  };

  // Eliminar producto completamente
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
    try {
      localStorage.removeItem("carrito");
    } catch (e) {
      console.error("Error removiendo carrito de localStorage", e);
    }
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        incrementarCantidad,
        disminuirCantidad,
        eliminarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContext);
}
