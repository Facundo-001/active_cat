import React, { useState } from "react";
import './styles/styles.css'

const Contenido1 = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la barra de búsqueda

  // Lista de productos de ejemplo
  const products = [
    { id: 1, name: "Laptop", description: "Laptop de alta gama" },
    { id: 2, name: "Smartphone", description: "Último modelo de smartphone" },
    { id: 3, name: "Auriculares", description: "Auriculares inalámbricos" },
    { id: 4, name: "Teclado", description: "Teclado mecánico RGB" },
    { id: 5, name: "Mouse", description: "Mouse ergonómico" },
    { id: 6, name: "Monitor", description: "Monitor 4K UHD" },
    { id: 7, name: "Impresora", description: "Impresora multifuncional" },
    { id: 8, name: "Tablet", description: "Tablet para dibujo digital" },
    { id: 9, name: "Gato Volador", description: "Gato volador" },
    { id: 10, name: "Gato Bugeado", description: "Tablet para dibujo digital" },
    { id: 11, name: "Gato Naranja", description: "Impresora multifuncional" },
    { id: 13, name: "Gato Door", description: "Impresora multifuncional" },
    { id: 12, name: "Gato Espejo", description: "Tablet para dibujo digital" },
    { id: 14, name: "Gato Torcido", description: "Tablet para dibujo digital" },
    { id: 15, name: "Gato Zero", description: "Impresora multifuncional" },
    { id: 16, name: "Gato Pro", description: "Tablet para dibujo digital" },
  ];

  // Filtrar productos según el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Imagen destacada con ofertas */}
    <div 
      className="w-100 bg-dark-subtle d-flex justify-content-center align-items-center position-relative text-white boxes" 
    >
      <img
        src="https://i.blogs.es/2a3976/thumb-1920-1075225/1366_2000.png"
        alt="Oferta destacada"
        className="img-fluid"
        title="Imagen destacada con oferta"
        style={{ width: "100%", height: "100%", objectFit: "cover",objectPosition: '50% 30%'}}
        loading="lazy"
      />
      <div 
        className="position-absolute text-center" 
        style={{ background: "rgba(0, 0, 0, 0.6)", padding: "10px 20px", borderRadius: "5px" }}
      >
        <h2 className="fw-bold mb-1">¡Gran Oferta del 30%!</h2>
        <p className="mb-0">Aprovecha ahora y Compra Ultrakill.</p>
      </div>
    </div>

    <div 
      className="w-100 mt-3 bg-dark-subtle d-flex justify-content-center align-items-center position-relative text-white boxes2"
    >
      <img
        src="https://pbs.twimg.com/media/E0Y9aA1XsAIMW8Z?format=jpg&name=4096x4096"
        alt="Oferta destacada"
        className="img-fluid"
        title="Imagen destacada con oferta"
        style={{ width: "100%", height: "100%", objectFit: "cover",objectPosition: '50% 40%'}}
        loading="lazy"
      />
      <div 
        className="position-absolute text-center" 
        style={{ background: "rgba(0, 0, 0, 0.6)", padding: "10px 20px", borderRadius: "5px" }}
      >
        <h2 className="fw-bold mb-1">¡Gran Oferta del 20%!</h2>
        <p className="mb-0">Aprovecha ahora y encuentra productos increíbles a precios inigualables</p>
      </div>
    </div>



      {/* Barra de búsqueda */}
      <div className="container mt-5">
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el estado de búsqueda
          />
        </div>

        {/* Objetos para vender */}
        <div className="row g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <div className="card h-100">
                  <img
                    src={`https://via.placeholder.com/150?text=${product.name}`}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted">{product.description}</p>
                    <button className="btn btn-primary w-100">Agregar al carrito</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="text-muted">No se encontraron productos relacionados con "{searchTerm}".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contenido1;
