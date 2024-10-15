import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Barra_nav from './NuevaPaginaPiezas/BarraNav.jsx';
import Contenido_inicial from './NuevaPaginaPiezas/ContenidoInicial.jsx';
import Pie_pagina from './NuevaPaginaPiezas/PiePagina.jsx';
import Mis_Projectos from './NuevaPaginaPiezas/modulos/MisProjectos.jsx';
import Barrita_cambiar from './NuevaPaginaPiezas/BarritaCambiar.jsx';
import Informacion from './NuevaPaginaPiezas/modulos/Informacion'
import Esta_pagina_esta_hecha_de from './NuevaPaginaPiezas/modulos/EstaPaginaEstaHechaDe.jsx'
import Mi_nivel from './NuevaPaginaPiezas/modulos/MiNivel.jsx'
import CatGallery from './NuevaPaginaPiezas/modulos/GeneradoGatitos';
import Facciones from './NuevaPaginaPiezas/modulos/Facciones';
import TST_TS from './NuevaPaginaPiezas/modulos/TST_TS.tsx';



function App() {
  return (
  <Router>
    <div className="d-flex flex-column min-vh-100">
    {/* <header className="bg-primary text-white text-center py-3"> */}
        {/* <h1>Mi Aplicación</h1> */}
        <Barra_nav />
    {/* </header> */}
    <main className="flex-grow-1 ">
        <Contenido_inicial />
        <Barrita_cambiar />
        <Routes>
          <Route exact path='Active-cats/inicio/mis_projectos' element={<Mis_Projectos />}/>
          <Route path='Active-cats/Testeo-Zone/TypeScript' element={<TST_TS />}/>
          <Route path='Active-cats/Informacion-sobre-la-pagina' element={<Informacion />}/>
          <Route path='Active-cats/Facciones/Equipos/dead-ahead-warfare' element={<Facciones />}/>
          <Route path='Active-cats/Esta-pagina-hecha-de' element={<Esta_pagina_esta_hecha_de />}/>
          <Route path='Active-cats/Galeria-de-gatitos' element={<CatGallery />}/>
          <Route path='Active-cats/Mi-nivel-segun-yo' element={<Mi_nivel />}/>
        </Routes>
    </main>
    <Pie_pagina />
    </div>
  </Router>
  );
}

export default App;