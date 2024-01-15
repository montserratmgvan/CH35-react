
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio'
import Nosotros from './components/SobreNosotros'
import Contacto from './components/Contacto'

{/*- Routes: actúa como contenedor padre dee todas las rutas individuales que se crearan en la aplicación.

- Route: Es la ruta `hija` de cada componente. Recibe dos atributos:
1. path: especifica la ruta (URL) a seguir.
2. element: especifíca el componente que se renderiza.
*/}

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={ <Inicio /> } />
      <Route path="about-us" element={ <Nosotros /> } />
      <Route path="contact" element={ <Contacto /> } />
    </Routes>
    </>
  )
}

export default App