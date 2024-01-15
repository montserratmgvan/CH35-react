import './Button.css'

/**
 * Props: propiedades que se pueden asignar a los componentes para modificar el texto, l información desde la rederización del mismo. 
 * Se asignan como parámetro de la función con el nombre del prop y debe ir entre llaves.
 * Se manda a llamar en el bloque de código donde se debe implementar.
 * **/

// eslint-disable-next-line react/prop-types
const Button = ({label}) => {
    return (
        <>
        <button>
            {label}
        </button>
        </>
    )
}

export default Button