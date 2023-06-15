import CartWidget from "../cart-widget/cartwidget";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className='nav-items list-unstyled list-inline'>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Productos</a></li>
                <li><a href="/">Nosotros</a></li>
                <li><a href="/">Contacto</a></li>
                <li className="dropdown">
                    <button className="btn button">
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                            <CartWidget />
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar