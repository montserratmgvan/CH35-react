import './Navbar.css' 
import ISSLogo from '../assets/ISS_logo.svg' 
const Navbar = () => {
    const url1= "https://www.nasa.gov/international-space-station/' id='link--logo";
    const url2= "https://www.nasa.gov/mission/apollo-13/";
    const url3="http://open-notify.org/Open-Notify-API/People-In-Space/";

    return (
        <>
        <div className='navbar--container'>
            <div className='navbar--title'>
                <a href= {url1} target="_blank" id='link--logo' rel="noreferrer">
                    <img src= {ISSLogo} alt="Logo de ISS" />

                </a>
            </div>
            <div className='navbar--links'>
                <div className='navbar--link'>
                    <a href={url1}target="_blank" rel="noreferrer">Home</a>
                </div>
                <div className='navbar--link'>
                    <a href= {url2}  target="_blank" rel="noreferrer">Apollo 13</a>
                </div>
                <div className='navbar--link'>
                    <a href= {url3} target="_blank" rel="noreferrer">Astros</a>
                </div>

            </div>
        </div>
        </>
    )
}

export default Navbar

