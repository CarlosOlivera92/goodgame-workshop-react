import './footer.css'
const Footer = () => {
    return (
        <footer className="footer container-fluid p-2 p-md-4 row m-0 align-items-center justify-content-center justify-content-md-start">
            <div className="footer-logo col-auto">
                <a href="index.html"> 
                    <img src="../src/assets/logo-2.png" alt="" />
                </a>
            </div>
            <nav className="footer-nav col-auto">
                <ul className="d-flex m-0 p-0">
                    <li><a href="/" title="inicio">Inicio</a></li>
                    <li><a href="/" title="juegos">Productos</a></li>
                    <li><a href="/" title="nosotros">Nosotros</a></li>
                    <li><a href="/" title="contacto">Contacto</a></li>

                </ul>
            </nav>
            <div className="disclaimer col-auto">
                <p className="m-0"> &#169;GoodGame 2023 Todos los derechos reservados</p>
            </div>
        </footer>
    )
}
export default Footer;
