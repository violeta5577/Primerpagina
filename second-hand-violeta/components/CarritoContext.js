"use client";

import { createContext, useContext, useState } from "react";

const CarritoContext = createContext(null);

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]); // lista de productos
  const [favoritos, setFavoritos] = useState([]); // lista de ids
  const [filtro, setFiltro] = useState("Todo");

  const enCarrito = (id) => carrito.some((p) => p.id === id);
  const alternarCarrito = (producto) =>
    setCarrito((c) => (c.some((p) => p.id === producto.id) ? c.filter((p) => p.id !== producto.id) : [...c, producto]));

  const esFavorito = (id) => favoritos.includes(id);
  const alternarFavorito = (id) =>
    setFavoritos((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  return (
    <CarritoContext.Provider value={{ carrito, enCarrito, alternarCarrito, esFavorito, alternarFavorito, filtro, setFiltro }}>
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContext);
}
