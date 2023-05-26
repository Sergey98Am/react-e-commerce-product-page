import React from "react";
import iconCart from "../../../../assets/icon-cart-white.svg";

const AddToCartButton = () => {
  return (
    <div className="add-to-cart-button">
      <button className="flex justify-center items-center rounded-xl shadow-[0px_20px_50px_-20px_#FF7E1B] bg-tertiary font-bold text-white h-[56px] w-full md:shadow-none md:w-[142px] lg:w-[222px] xl:w-[272px]">
        <div className="cart-icon me-4">
          <img src={iconCart} alt="" className="w-4 h-4" />
        </div>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartButton;
