import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './modulos/Navbar.jsx';
import Contenido1 from './modulos/contenido-principal/Contenido1.jsx'
import Footer from './modulos/Footer.jsx';



function App() {
  return (
  <Router>
    <div className="d-flex flex-column min-vh-100">
    {/* <header className="bg-primary text-white text-center py-3"> */}
        {/* <h1>Mi Aplicación</h1> */}
        {/* <NotificacionAnuncio /> */}
        {/* <Barra_nav /> */}
        <Navbar />
    {/* </header> */}
    <main className="flex-grow-1" style={{marginTop: '5rem'}}>
        {/* <Contenido_inicial />
        <Barrita_cambiar /> */}
        <Routes>
          
          <Route path='/' element={<Contenido1 />}/> 
          {/* <Route exact path='Active-cats/inicio/mis_projectos' element={<Mis_Projectos />}/>
          <Route path='Active-cats/Testeo-Zone/TypeScript' element={<TST_TS />}/>
          <Route path='Active-cats/Informacion-sobre-la-pagina' element={<Informacion />}/>
          <Route path='Active-cats/Facciones/Equipos/dead-ahead-warfare' element={<Facciones />}/>
          <Route path='Active-cats/Esta-pagina-hecha-de' element={<Esta_pagina_esta_hecha_de />}/>
          <Route path='Active-cats/Galeria-de-gatitos' element={<CatGallery />}/>
          <Route path='Active-cats/Mi-nivel-segun-yo' element={<Mi_nivel />}/> */}
        </Routes>
    </main>
    {/* <Pie_pagina /> */}
    <Footer />
    </div>
  </Router>
  );
}

export default App;