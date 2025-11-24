// ❌ NO poner "use client"

import DetalleCliente from "./DetalleCliente";

// 📚 Aquí están tus libros
const libros = [
  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", precio: 12000, imagen: "/images/cien-anos.jpg", descripcion: "Una obra maestra del realismo mágico que narra la historia de la familia Buendía en el mítico pueblo de Macondo." },
  { id: 2, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", precio: 8000, imagen: "/images/principito.jpg", descripcion: "Un cuento poético y filosófico sobre un niño que viaja por el universo aprendiendo sobre la vida y el amor." },
  { id: 3, titulo: "1984", autor: "George Orwell", precio: 10000, imagen: "/images/1984.jpg", descripcion: "Una distopía que muestra un futuro dominado por un gobierno totalitario donde la libertad y la verdad son controladas por el Gran Hermano." },
  { id: 4, titulo: "Orgullo y prejuicio", autor: "Jane Austen", precio: 9500, imagen: "/images/orgullo-y-prejuicio.jpg", descripcion: "Una historia de amor, orgullo y clases sociales en la Inglaterra del siglo XIX, protagonizada por la inteligente Elizabeth Bennet y el reservado señor Darcy." },
  { id: 5, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", precio: 13000, imagen: "/images/quijote.jpg", descripcion: "Las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza, una sátira sobre los ideales y la locura caballeresca." },
  { id: 6, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", precio: 11000, imagen: "/images/cronicadeunamuerteanunciada.jpg", descripcion: "Un relato sobre un crimen anunciado desde el principio, contado con el estilo inconfundible del realismo mágico de García Márquez." },
  { id: 7, titulo: "Rayuela", autor: "Julio Cortázar", precio: 12500, imagen: "/images/rayuela.jpg", descripcion: "Una novela experimental que rompe las reglas narrativas, explorando el amor, el arte y el sentido de la existencia entre París y Buenos Aires." },
  { id: 8, titulo: "Los juegos del hambre", autor: "Suzanne Collins", precio: 14500, imagen: "/images/hambre.jpg", descripcion: "Katniss Everdeen desafía a un régimen opresor participando en un mortal reality show donde solo uno puede sobrevivir." },
  { id: 9, titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", precio: 13200, imagen: "/images/piedraFilosofal.jpg", descripcion: "El joven mago Harry descubre su destino en Hogwarts y se enfrenta a los primeros misterios que rodean al temible Lord Voldemort." },
  { id: 10, titulo: "El Hobbit", autor: "J.R.R. Tolkien", precio: 12700, imagen: "/images/hobbit.jpg", descripcion: "Bilbo Bolsón, un hobbit tranquilo, se ve arrastrado a una gran aventura junto a enanos y magos para recuperar un tesoro custodiado por un dragón." },
  { id: 11, titulo: "Fahrenheit 451", autor: "Ray Bradbury", precio: 10300, imagen: "/images/farenheit.jpg", descripcion: "En un mundo donde los libros están prohibidos, un bombero comienza a cuestionar su papel en una sociedad que teme al pensamiento libre." },
  { id: 12, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", precio: 11990, imagen: "/images/sombra.jpg", descripcion: "En la Barcelona de posguerra, un niño descubre un libro olvidado que lo lleva a desentrañar un misterio literario y familiar lleno de secretos." },
];

// ✔ Necesario para next export
export function generateStaticParams() {
  return libros.map((libro) => ({
    id: String(libro.id),
  }));
}

export default function Page({ params }) {
  const libro = libros.find((l) => String(l.id) === params.id);

  if (!libro) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-600">Libro no encontrado</h1>
        <a
          href="/libros"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Volver al catálogo
        </a>
      </main>
    );
  }

  return <DetalleCliente libro={libro} />;
}
