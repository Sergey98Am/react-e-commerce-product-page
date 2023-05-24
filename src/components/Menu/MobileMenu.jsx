import iconClose from "../../assets/icon-close.svg";
import { navLinks } from "../../constants";
import { Drawer } from "@material-tailwind/react";

const MobileMenu = ({ open, closeDrawer }) => {
  return (
    <div className="md:hidden">
      <Drawer open={open} onClose={closeDrawer} className="!max-w-[250px]">
        <div
          className="mb-2 flex items-center justify-between p-6 pb-12"
          onClick={closeDrawer}
        >
          <img src={iconClose} alt="icon-clone" />
        </div>
        <div className="list p-0">
          {navLinks.map((nav) => (
            <a href="" key={nav.id} className="font-bold text-primary text-lg">
              <div className="list-item px-6 py-3">{nav.title}</div>
            </a>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
