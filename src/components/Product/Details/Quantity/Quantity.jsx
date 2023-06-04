import iconMinus from "@/assets/icon-minus.svg";
import iconPlus from "@/assets/icon-plus.svg";

const Quantity = ({ quantity, decreaseQuantity, increaseQuantity }) => {
  return (
    <div className="product-quantity mb-4 me-0 flex flex-1 justify-center items-center bg-lightBlue1 rounded-xl md:mb-0 md:me-4 md:flex-initial">
      <button
        onClick={decreaseQuantity}
        className="quantity-button px-5 py-4"
      >
        <img src={iconMinus} alt="" />
      </button>
      <div className="py-4 flex-1 text-center font-bold w-[3.5rem]">{quantity}</div>
      <button
        onClick={increaseQuantity}
        className="quantity-button px-5 py-4"
      >
        <img src={iconPlus} alt="" />
      </button>
    </div>
  );
};

export default Quantity;
