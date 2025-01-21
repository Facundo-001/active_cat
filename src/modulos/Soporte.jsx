import React, { useState } from 'react';

const SupportModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para manejar el envío del mensaje
  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Mensaje enviado:", message);
      setMessage(''); // Limpiar el campo de texto después de enviar
    } else {
      alert("Por favor, escribe un mensaje antes de enviar.");
    }
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button className="btn btn-danger" onClick={openModal}>
        Abrir Soporte
      </button>

      {/* Modal de soporte */}
      {isModalOpen && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="supportModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ backgroundColor: '#202020', borderRadius: '10px', boxShadow: '0 0 20px rgba(255, 0, 0, 0.8)' }}>
              {/* Encabezado del modal */}
              <div className="modal-header" style={{ borderBottom: '2px solid #ff0000' }}>
                <h5 className="modal-title" id="supportModalLabel" style={{ color: '#ff0000', textShadow: '0 0 5px rgba(255, 0, 0, 0.7)' }}>Soporte</h5>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>

              {/* Cuerpo del modal */}
              <div className="modal-body">
                <p>¡Bienvenido a la ventana de soporte! ¿En qué te puedo ayudar?</p>
                <textarea
                  className="form-control"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  placeholder="Escribe tu mensaje..."
                  style={{ backgroundColor: '#333', color: '#fff' }}
                />
              </div>

              {/* Pie del modal */}
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={handleSendMessage} style={{ textTransform: 'uppercase' }}>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportModal;
