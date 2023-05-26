import React from "react";
import iconMinus from "../../../../assets/icon-minus.svg";
import iconPlus from "../../../../assets/icon-plus.svg";

const Quantity = () => {
  return (
    <div className="product-quantity mb-4 me-0 flex flex-1 justify-center items-center bg-lightBlue1 rounded-xl md:mb-0 md:me-4 md:flex-initial">
      <button className="quantity-button px-5 py-4">
        <img src={iconMinus} alt="" />
      </button>
      <button className="px-5 py-4 flex-1 font-bold">0</button>
      <button className="quantity-button px-5 py-4">
        <img src={iconPlus} alt="" />
      </button>
    </div>
  );
};

export default Quantity;
