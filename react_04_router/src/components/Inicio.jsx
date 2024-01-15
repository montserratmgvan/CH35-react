import { Link } from "react-router-dom"
const Inicio = () => {
    return (
        <>
        <div>
            <h1>Esta es la página de Inicio</h1>
            <Link to="about-us"> Presiona aqui para ir a la página sobre nosotros
            </Link>
            <br></br>
            <Link to="contact">
            Presiona aquí para ir a la página de contacto
            </Link>
            </div>
        </>
    )
}

export default Inicio