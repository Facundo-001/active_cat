import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Columna de Información de la tienda */}
          <div className="col-12 col-md-4 mb-3">
            <h5 className="mb-3 text-white">Sobre Nosotros</h5>
            <p className="text-light">
              Una tienda de prueba de un desarrollador pequeño de paginas web
            </p>
          </div>

          {/* Columna de Enlaces rápidos */}
          <div className="col-6 col-md-4 mb-3">
            <h5 className="mb-3 text-white">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light hover-text-white">Inicio</a></li>
              <li><a href="#" className="text-light hover-text-white">Productos</a></li>
              <li><a href="#" className="text-light hover-text-white">Ofertas</a></li>
              <li><a href="#" className="text-light hover-text-white">Contacto</a></li>
            </ul>
          </div>

          {/* Columna de Redes Sociales */}
          <div className="col-6 col-md-4 mb-3">
            <h5 className="mb-3 text-white">Síguenos</h5>
            <ul className="list-unstyled d-flex">
              <li><a href="#" className="text-light me-3 hover-text-white"><FaFacebook size={30} /></a></li>
              <li><a href="#" className="text-light me-3 hover-text-white"><FaTwitter size={30} /></a></li>
              <li><a href="#" className="text-light me-3 hover-text-white"><FaInstagram size={30} /></a></li>
              <li><a href="#" className="text-light hover-text-white"><FaLinkedin size={30} /></a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="text-light mb-0">
            &copy; {new Date().getFullYear()} UltraShop Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
