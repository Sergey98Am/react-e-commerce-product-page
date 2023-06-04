import { useState } from "react";
import Navbar from "./components/Header/Menu/Navbar";
import MobileMenu from "./components/Header/Menu/MobileMenu";
import Product from "./components/Product/Product";

function App() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      {/* Header */}
      <Navbar openDrawer={openDrawer} />
      <MobileMenu open={open} closeDrawer={closeDrawer} />

      {/* Product */}
      <Product />
    </>
  );
}

export default App;
