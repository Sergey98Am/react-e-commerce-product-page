import { useContext } from "react";
import CartContext from "@/Context/Cart/CartContext";
import deleteIcon from "@/assets/icon-delete.svg";

const CartItem = ({ product }) => {

  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="cart flex justify-between items-center">
      <div className="cart-content flex">
        <div className="cart-image mr-4 rounded overflow-hidden">
          <img
            src={product.slides[0].src}
            alt="cart-image"
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="cart-info">
          <div className="product-title text-secondary">{product.title}</div>
          <div className="product-price-with-quantity flex">
            <div className="product-price-section flex mr-3 text-secondary">
              <div className="product-price">${product.price}</div>
              <div> x </div>
              <div className="quantity">{product.quantity}</div>
            </div>
            <div className="sum-price">
              <b>${product.price * product.quantity}</b>
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <button onClick={() => removeFromCart(product)}>
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
