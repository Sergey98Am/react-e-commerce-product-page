import { useState } from "react";
import Navbar from "./components/Menu/Navbar";
import DrawerComp from "./components/Menu/MobileMenu";

function App() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Navbar openDrawer={openDrawer} />
      <DrawerComp open={open} closeDrawer={closeDrawer} />
    </>
  );
}

export default App;
