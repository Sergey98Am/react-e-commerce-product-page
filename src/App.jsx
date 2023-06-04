import { useState } from "react";
import Navbar from "./components/Menu/Navbar";
import MobileMenu from "./components/Menu/MobileMenu";
import Product from "./components/Product/Product";

function App() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      {/* Menu */}
      <Navbar openDrawer={openDrawer} />
      <MobileMenu open={open} closeDrawer={closeDrawer} />

      {/* Product */}
      <Product />
    </>
  );
}

export default App;
