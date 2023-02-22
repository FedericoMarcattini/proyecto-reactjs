import "./Navbar.scss"
import logo from "./logo.png"
import CardWidget from "../CardWidget/CardWidget"


export const Navbar = () => {

    return (
            <header className="header">
                <div className="header__container">
                    <img src={ logo } alt="logo" className="header__logo"/>

                    <nav className="navbar">
                        <a href="#" className="navbar__item">Inicio</a>
                        <a href="#" className="navbar__item">Tienda</a>
                        <a href="#" className="navbar__item">Contacto</a>

                        <CardWidget/>
                    </nav>

                </div>
            </header>
    )
}


