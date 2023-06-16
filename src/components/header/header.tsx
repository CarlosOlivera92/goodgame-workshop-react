import './header.css'
import NavBar from './navbar/navbar';

const Header = () => {
    return (
        <header className='header d-flex flex-column flex-md-row flex-xl-row align-items-center justify-content-between'>
            <div className="logo">
                <img src="../src/assets/logo-2.png" alt="" />
            </div>
            <NavBar/>
        </header>
    );
};
export default Header;
