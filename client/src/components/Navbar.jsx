import bg from '../assets/images/navbar_bg.png'
import logo from '../assets/icons/logo.png'
const Navbar = () => {
    return (
        <main>
            <div style={{ backgroundImage: `url(${bg})` }} className='flex items-center justify-center h-[80px]'>
                <img src={logo} alt={logo} />
                <p className='text-white font-rancho font-bold text-4xl md:text-6xl'>Espresso Emporium</p>
            </div>
        </main>
    );
};

export default Navbar;