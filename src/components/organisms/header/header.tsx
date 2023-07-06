import NavBar from '../../molecules/navbar/navbar';
import Logo from '../../atoms/logo/logo';
import './header.css'
import CartWidget from './cart-widget/cartwidget';

const Header = () => {
    return (
        <header className='header d-flex flex-column flex-md-row flex-xl-row align-items-center justify-content-between'>
            <Logo/>
            <NavBar/>
            <CartWidget/>
        </header>
    );
};
export default Header;
