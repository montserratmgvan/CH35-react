import { Link } from "react-router-dom"
const Nosotros = () => {
    return (
        <>
        <div>
            <h1>Esta es la página Sobre Nosotros</h1>
            <Link to="/">Regresar a la página de inicio</Link>
            <Link to="/contact">Regresar a la página de contacto</Link>

        </div>
        
        </>
    )
}

export default Nosotros