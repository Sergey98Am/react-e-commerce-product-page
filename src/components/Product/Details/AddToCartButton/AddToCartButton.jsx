import { useContext } from "react";
import CartContext from "@/Context/Cart/CartContext";
import iconCart from "@/assets/icon-cart-white.svg";
import product from "@/data";

const AddToCartButton = ({ quantity }) => {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="add-to-cart-button flex flex-1">
      <button onClick={() => addToCart({...product, quantity })} className="btn btn-orange flex flex-1 justify-center items-center">
        <span className="cart-icon me-4">
          <img src={iconCart} alt="" className="w-4 h-4" />
        </span>
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddToCartButton;
