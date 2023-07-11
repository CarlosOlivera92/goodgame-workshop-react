import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className='nav-items list-unstyled list-inline'>
                <li><NavLink to="/home">Inicio</NavLink></li>
                <li><NavLink to="/productos">Productos</NavLink></li>
                <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    )
}
export default NavBar