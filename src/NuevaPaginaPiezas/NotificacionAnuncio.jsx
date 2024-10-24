import React from 'react'

const NotificacionAnuncio = () => {
    function CerrarAnuncio() {
        const id = document.getElementById('anuncio');
        id.style.display="none"
    }
    return (
        <div className='alert alert-info' id='anuncio'>
            😋 ya casi es hallowen puede que se venga una actualizacion al estilo de la pagina 😋
            <button className="d-flex align-content-end btn-close" id='cerrar' onClick={CerrarAnuncio}></button>
        </div>
    )
}

export default NotificacionAnuncio