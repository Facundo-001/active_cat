    import React from 'react';
    // import "./style-fondo-gif.css";

    const Informacion = () => {
    return (
        <div className="container mb-5 mt-5 p-4" style={{ maxWidth: '800px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 className="text-center mb-4" style={{ color: '#343a40' }}>Información sobre esta página</h1>
        <p style={{ fontSize: '18px', color: '#6c757d', lineHeight: '1.6' }}>
            <strong>Bienvenido a mi página personal</strong>, un espacio dedicado exclusivamente a mis proyectos. Aquí podrás ver y explorar los diferentes trabajos en los que he estado trabajando. Esta página ha sido creada para mostrar el resultado de mis esfuerzos y mantener un registro organizado de todo lo que he realizado.
        </p>
        <h3 style={{ color: '#343a40' }} className="mt-4">¿Qué encontrarás aquí?</h3>
        <ul className="list-group list-group-flush">
            <li className="list-group-item" style={{ backgroundColor: '#f8f9fa' }}>
            <strong>Sección "Mis Proyectos":</strong> Esta área está dedicada únicamente a los proyectos que he creado. Aquí podrás ver los detalles de cada proyecto y seguir mi progreso.
            </li>
            <li className="list-group-item" style={{ backgroundColor: '#f8f9fa' }}>
            <strong>Información personal:</strong> Además de los proyectos, comparto un poco de información sobre mí, mis intereses y mis habilidades, para que puedas conocer más sobre mi enfoque y los tipos de proyectos en los que suelo trabajar.
            </li>
            <li className="list-group-item" style={{ backgroundColor: '#f8f9fa' }}>
            <strong>Diseño simple y directo:</strong> La página está organizada para ofrecerte una vista clara y fácil de mis trabajos, sin complicaciones ni funcionalidades en tiempo real, solo una muestra estática y bien estructurada de lo que he hecho.
            </li>
        </ul>
        <p className="mt-4" style={{ fontSize: '18px', color: '#6c757d' }}>
            Esta página es mi espacio personal donde muestro lo que he logrado, y aunque no se actualiza en tiempo real, representa un reflejo fiel de mis proyectos hasta el momento.
        </p>
        </div>
    );
    };

    export default Informacion;
