import logo from "../../assets/logo.svg";
import iconCart from "../../assets/icon-cart.svg";
import userAvatar from "../../assets/image-avatar.png";
import iconMenu from "../../assets/icon-menu.svg";
import { navLinks } from "../../constants";

const Navbar = ({ openDrawer }) => {
  return (
    <nav className="navbar px-6">
      <div className="container mx-auto py-5 flex flex-1 justify-between items-center border-lightBlue md:border-b md:pt-7 md:pb-0 md:items-start">
        <div className="flex items-end md:pt-3.5 md:items-start">
          {/* Mobile menu toggler */}
          <div className="navbar-toggle me-4 md:hidden">
            <img src={iconMenu} alt="icon-menu" onClick={openDrawer} />
          </div>

          {/* Logo */}
          <div className="navbar-brand me-14">
            <a href="/">
              <img src={logo} alt="logo" className="w-[138px] h-[20px]" />
            </a>
          </div>

          {/* Start menu items */}
          <div className="list-none hidden md:flex">
            {navLinks.map((nav, index) => (
              <a
                key={nav.id}
                className={`text-sm transition pb-10 text-secondary border-b-4 border-transparent hover:border-tertiary ${
                  index === navLinks.length - 1 ? "me-0" : "me-8"
                }`}
                href={`#${nav.id}`}
              >
                {nav.title}
              </a>
            ))}
          </div>
        </div>

        {/* End menu items */}
        <div className="flex items-center md:items-start">
          <div className="icon pt-0 mr-[22px] md:pt-3.5 md:mr-[46px]">
            <a href="">
              <img
                src={iconCart}
                className="w-[20px] h-[20px]"
                alt="icon-cart"
              />
            </a>
          </div>
          <div className="transition cursor-pointer items-center w-[25px] h-[25px] bg-black rounded-full border-2 hover:border-tertiary md:w-[50px] md:h-[50px]">
            <img src={userAvatar} alt="avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
