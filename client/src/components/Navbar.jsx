import bg from "../assets/images/navbar_bg.png";
import logo from "../assets/icons/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <main>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex flex-col items-center justify-center  "
      >
       <div className="flex justify-center items-center">
       <img src={logo} alt={logo} />
        <p className="text-white font-rancho font-bold text-4xl md:text-6xl">
          Espresso Emporium
        </p>
       </div>
        <div className="flex gap-4">
        <NavLink to="/" className='text-white'>Home</NavLink>
        <NavLink to="/users" className='text-white'>Users</NavLink>
        <NavLink to="/register" className='text-white'>Register</NavLink>
      </div>
      </div>
      
    </main>
  );
};

export default Navbar;
