import './footer.css'
import Logo from '../../atoms/logo/logo';
import Disclaimer from '../../atoms/disclaimer/disclaimer';
import NavBar from '../../molecules/navbar/navbar';
const Footer = () => {
    return (
        <footer className="footer container-fluid">
            <Logo/>
            <NavBar/>
            <Disclaimer/>
        </footer>
    )
}
export default Footer;
